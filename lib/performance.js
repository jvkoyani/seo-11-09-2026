// Core Web Vitals monitoring and optimization utilities

export function reportWebVitals(metric) {
  if (typeof window !== 'undefined') {
    const body = JSON.stringify(metric);
    // Use sendBeacon for non-blocking reporting
    if (navigator.sendBeacon) {
      navigator.sendBeacon('/api/vitals', body);
    }
  }
}

// Hook to monitor Web Vitals (dynamically imported to reduce bundle size)
export async function useWebVitals() {
  if (typeof window === 'undefined') return;

  try {
    const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');
    getCLS(reportWebVitals);
    getFID(reportWebVitals);
    getFCP(reportWebVitals);
    getLCP(reportWebVitals);
    getTTFB(reportWebVitals);
  } catch (error) {
    console.warn('Web Vitals monitoring unavailable');
  }
}

// Optimize image loading for LCP
export function getOptimizedImageProps(src, alt, priority = false) {
  return {
    src,
    alt,
    priority,
    loading: priority ? 'eager' : 'lazy',
    quality: 85,
  };
}

// Resource hints for performance
export function getResourceHints() {
  return [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'dns-prefetch',
      href: 'https://images.unsplash.com',
    },
    {
      rel: 'dns-prefetch',
      href: 'https://cms.powermyseo.com',
    },
  ];
}

// Optimize fonts with system font stack
export const fontStack = {
  sans: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  mono: 'ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, "DejaVu Sans Mono", monospace',
};

// CLS prevention helpers
export function preventCLS(width, height) {
  return {
    width,
    height,
    aspectRatio: `${width} / ${height}`,
  };
}

// INP optimization: Debounce event handlers
export function debounce(fn, delay = 300) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}

// Intersection Observer for lazy loading optimization
export function observeElement(element, callback, options = {}) {
  if (typeof window === 'undefined' || !element) return;

  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '50px',
    ...options,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback(entry);
        observer.unobserve(entry.target);
      }
    });
  }, defaultOptions);

  observer.observe(element);
  return observer;
}

// Optimize server-side rendering for initial paint
export function generateCriticalCSS() {
  return `
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { font-family: ${fontStack.sans}; }
    body { background-color: #ffffff; color: #111827; }
    main { display: block; }
    img { max-width: 100%; height: auto; display: block; }
  `;
}

// Pre-render optimization hints
export function shouldPrerender(pageType) {
  const prerenderPages = {
    homepage: true,
    blog_index: true,
    service_hub: true,
    industry_hub: true,
    top_location: true,
  };

  return prerenderPages[pageType] || false;
}

// Prefetch strategy for likely next pages
export function getPrefetchStrategy(currentPage) {
  const prefetchMap = {
    homepage: ['/blog', '/services'],
    blog_index: ['/blog/seo-tips-2024', '/blog/local-seo-guide'],
    service_hub: ['/contact', '/about'],
  };

  return prefetchMap[currentPage] || [];
}
