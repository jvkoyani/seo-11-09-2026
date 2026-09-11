import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { reportWebVitals } from '../lib/performance';

// Global styles
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Report Web Vitals for all pages
    if ('web-vital' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(reportWebVitals);
        getFID(reportWebVitals);
        getFCP(reportWebVitals);
        getLCP(reportWebVitals);
        getTTFB(reportWebVitals);
      });
    }
  }, []);

  useEffect(() => {
    // Handle route changes for performance tracking
    const handleRouteChange = (url) => {
      // Track page view or other analytics
      if (typeof window.gtag !== 'undefined') {
        window.gtag.pageview({
          page_path: url,
        });
      }
    };

    router.events?.on('routeChangeComplete', handleRouteChange);
    return () => router.events?.off('routeChangeComplete', handleRouteChange);
  }, [router.events]);

  // Optimize large interactive regions with debounced handlers
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Pause animations/processing when page is hidden
        document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
          img.loading = 'lazy';
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  return <Component {...pageProps} />;
}

// Export reportWebVitals for Next.js to use
export function reportWebVitals(metric) {
  if (typeof window !== 'undefined') {
    const body = JSON.stringify(metric);
    if (navigator.sendBeacon) {
      navigator.sendBeacon('/api/vitals', body);
    }
  }
}

export default MyApp;
