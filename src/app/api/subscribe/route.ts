import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

const DATA_FILE = path.join(process.cwd(), 'data', 'subscribers.json');

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const {
            email,
            source = 'newsletter',
            name,
            phone,
            website,
            company,
            message,
            challenge,
            budget,
            service,
            location
        } = data;

        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            );
        }

        // 1. Store in JSON file
        interface SubscriberRecord {
            email: string;
            source: string;
            date: string;
            [key: string]: string | undefined;
        }
        let subscribers: SubscriberRecord[] = [];
        if (fs.existsSync(DATA_FILE)) {
            const fileContent = fs.readFileSync(DATA_FILE, 'utf-8');
            const rawData: unknown = JSON.parse(fileContent);

            // Migrate legacy string array to object array
            if (Array.isArray(rawData)) {
                subscribers = rawData.map(item => {
                    if (typeof item === 'string') {
                        return { email: item, source: 'legacy', date: new Date().toISOString() };
                    }
                    return item;
                });
            }
        }

        const newEntry = {
            ...data, // Store all received data
            date: new Date().toISOString()
        };

        // Always append new entries to keep a history of all inquiries
        // even if the same email submits multiple times (e.g. different forms)
        subscribers.push(newEntry);

        fs.writeFileSync(DATA_FILE, JSON.stringify(subscribers, null, 2));

        // 2. Send email notification
        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            });

            let subject = 'New Website Inquiry';
            if (source === 'newsletter') subject = 'New Newsletter Subscriber';
            else if (source === 'seo-audit') subject = 'New SEO Audit Request';
            else if (source === 'contact-form') subject = 'New Contact Form Submission';
            else if (source === 'free-consultation') subject = 'New Free Consultation Request';
            else if (source === 'floating-cta') subject = 'New Quick Audit Request';

            // Construct email body
            const fields = [
                { label: 'Source', value: source },
                { label: 'Name', value: name },
                { label: 'Email', value: email },
                { label: 'Phone', value: phone },
                { label: 'Website', value: website },
                { label: 'Company', value: company },
                { label: 'Service', value: service },
                { label: 'Budget', value: budget },
                { label: 'Challenge', value: challenge },
                { label: 'Location', value: location },
                { label: 'Message', value: message },
            ].filter(f => f.value); // Only show fields that have values

            const textBody = fields.map(f => `${f.label}: ${f.value}`).join('\n');

            const htmlBody = `
                <h2>${subject}</h2>
                <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
                    ${fields.map(f => `
                        <tr>
                            <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold; width: 150px;">${f.label}</td>
                            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${f.value}</td>
                        </tr>
                    `).join('')}
                </table>
            `;

            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: 'koyanijaydeep57@gmail.com',
                subject: subject,
                text: textBody,
                html: htmlBody,
            });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Subscription error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
