'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import {
  Mail, ChevronRight,
  Facebook, Twitter, Linkedin, Instagram, ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const Footer = () => {
  const [email, setEmail] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [isServicesOpen, setIsServicesOpen] = React.useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = React.useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, source: 'newsletter' }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Successfully subscribed to the newsletter!');
        setEmail('');
      } else {
        toast.error(data.error || 'Failed to subscribe. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="bg-seo-navy text-slate-300 border-t border-seo-navy font-sans">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-8 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Column 1: Brand & Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <Link href="/" className="inline-block mb-4">
                <Image src="/logo.webp" alt="SEOfocus" width={160} height={48} className="h-10 md:h-12 w-auto brightness-0 invert" />
              </Link>
              <p className="text-slate-400 leading-relaxed mb-6 max-w-sm">
                We help ambitious businesses dominate search results and drive revenue through data-driven SEO strategies.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
                  { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
                  { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
                  { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-seo-blue hover:text-white transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-900">

              <a href="mailto:hello@seofocus.com.au" className="flex items-center group">
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-seo-blue group-hover:bg-seo-blue group-hover:text-white transition-colors mr-4">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-300 uppercase tracking-wider font-semibold">Email Us</p>
                  <p className="text-white font-medium group-hover:text-seo-blue transition-colors">hello@seofocus.com.au</p>
                </div>
              </a>
            </div>
          </div>

          {/* Column 2: Services (3 cols) */}
          <div className="lg:col-span-3 lg:pl-8">
            <button 
              className="w-full flex items-center justify-between lg:block text-left group"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              <h3 className="text-lg font-display font-bold text-white mb-6 lg:mb-6 uppercase tracking-tight">Our Services</h3>
              <ChevronRight className={`w-5 h-5 text-slate-400 transition-transform lg:hidden ${isServicesOpen ? 'rotate-90' : ''}`} />
            </button>
            <ul className={`space-y-3 ${isServicesOpen ? 'block' : 'hidden lg:block'} pb-6 lg:pb-0`}>
              {[
                { label: "Local SEO", href: "/service/local-seo" },
                { label: "Technical SEO", href: "/service/technical-seo" },
                { label: "All Services", href: "/services" },
              ].map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-slate-300 hover:text-seo-blue transition-colors flex items-center group">
                    <ChevronRight className="w-4 h-4 mr-2 text-slate-400 group-hover:text-seo-blue transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company (2 cols) */}
          <div className="lg:col-span-2">
            <button 
              className="w-full flex items-center justify-between lg:block text-left group"
              onClick={() => setIsCompanyOpen(!isCompanyOpen)}
            >
              <h3 className="text-lg font-display font-bold text-white mb-6 lg:mb-6 uppercase tracking-tight">Company</h3>
              <ChevronRight className={`w-5 h-5 text-slate-400 transition-transform lg:hidden ${isCompanyOpen ? 'rotate-90' : ''}`} />
            </button>
            <ul className={`space-y-3 ${isCompanyOpen ? 'block' : 'hidden lg:block'} pb-6 lg:pb-0`}>
              {[
                { label: "About Us", href: "/about" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Our Process", href: "/methodology" },
                { label: "Blog", href: "/blogs" },
                { label: "Glossary", href: "/glossary" },
                { label: "Contact", href: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-slate-300 hover:text-seo-blue transition-colors flex items-center group">
                    <ChevronRight className="w-4 h-4 mr-2 text-slate-400 group-hover:text-seo-blue transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter (3 cols) */}
          <div className="lg:col-span-3">
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
              <h3 className="text-lg font-display font-bold text-white mb-2">Stay Ahead</h3>
              <p className="text-sm text-slate-400 mb-4">
                Get the latest SEO tips and strategies delivered to your inbox.
              </p>
              <form className="space-y-3" onSubmit={handleSubscribe}>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-seo-navy border-white/20 text-white placeholder:text-slate-400 focus-visible:ring-seo-peach"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  required
                />
                <Button
                  type="submit"
                  className="w-full bg-seo-blue hover:bg-seo-blue-light text-seo-navy font-bold"
                  disabled={isLoading}
                >
                  {isLoading ? 'Subscribing...' : 'Subscribe'}
                  {!isLoading && <ArrowRight className="w-4 h-4 ml-2" />}
                </Button>
              </form>
              <p className="text-xs text-slate-400 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-900 bg-black/20">
        <div className="container mx-auto px-4 py-4 md:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-slate-300">
              © {new Date().getFullYear()} SEOfocus. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-slate-300">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
            </div>
            <div className="flex items-center text-sm text-slate-300">
              <a
                href="https://www.linkedin.com/in/jaydeep-k/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Made by Jaydeep K
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
