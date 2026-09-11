
import Link from 'next/link';

import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center px-4">
                <h1 className="text-9xl font-bold text-seo-blue mb-4">404</h1>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Page Not Found</h2>
                <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
                    Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <Link href="/">
                    <Button className="bg-seo-blue hover:bg-seo-blue-light text-white px-8 py-6 text-lg">
                        <ArrowLeft className="mr-2 h-5 w-5" />
                        Return to Home
                    </Button>
                </Link>
            </div>
        </div>
    );
}
