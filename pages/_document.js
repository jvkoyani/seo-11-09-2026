import { Html, Head, Main, NextScript } from 'next/document';
import { generateCriticalCSS, getResourceHints, fontStack } from '../lib/performance';

export default function Document() {
  const resourceHints = getResourceHints();

  return (
    <Html lang="en">
      <Head>
        {/* Critical CSS inline to prevent render-blocking */}
        <style dangerouslySetInnerHTML={{ __html: generateCriticalCSS() }} />

        {/* System font stack for instant text rendering */}
        <style dangerouslySetInnerHTML={{
          __html: `
            html {
              font-family: ${fontStack.sans};
              --font-mono: ${fontStack.mono};
            }
          `,
        }} />

        {/* Resource hints for performance */}
        {resourceHints.map((hint, idx) => (
          <link key={idx} {...hint} />
        ))}

        {/* Prefetch critical pages */}
        <link rel="prefetch" href="/blog" as="document" />
        <link rel="prefetch" href="/sitemap.xml" as="fetch" crossOrigin="anonymous" />

        {/* Favicon with explicit type for faster loading */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="32x32" />

        {/* Preload critical fonts if using web fonts */}
        {/* Uncomment if adding custom fonts: */}
        {/* <link rel="preload" href="/fonts/custom.woff2" as="font" type="font/woff2" crossOrigin="anonymous" /> */}

        {/* Open Graph for social sharing (no render-blocking) */}
        <meta property="og:locale" content="en_AU" />
        <meta property="og:site_name" content="Professional Digital Marketing & SEO Services" />

        {/* Color scheme for instant dark mode support */}
        <meta name="color-scheme" content="light dark" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
