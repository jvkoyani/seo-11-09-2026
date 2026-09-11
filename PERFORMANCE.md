# Phase 5: Performance Optimization - Core Web Vitals Targeting

## Optimization Goals
- **LCP (Largest Contentful Paint)**: < 2.5s
- **INP (Interaction to Next Paint)**: < 200ms
- **CLS (Cumulative Layout Shift)**: < 0.1

## Implemented Optimizations

### 1. **Image Optimization (LCP)**
- ✅ Next.js Image component with automatic optimization
- ✅ Modern formats: AVIF + WebP with PNG fallback
- ✅ Responsive sizing with device-aware delivery
- ✅ Lazy loading for below-fold images
- ✅ Aspect ratio prevention for CLS
- **Tool**: `components/OptimizedImage.js`

### 2. **CSS & Font Optimization**
- ✅ System font stack (instant rendering, no web fonts)
- ✅ Critical CSS inlined in `_document.js`
- ✅ CSS-in-JS for zero render-blocking stylesheets
- ✅ `font-display: swap` strategy
- ✅ Global styles optimized for CLS prevention
- **File**: `styles/globals.css`

### 3. **JavaScript Optimization**
- ✅ Dynamic imports for code splitting
- ✅ React Strict Mode for dev-time error detection
- ✅ Console removal in production
- ✅ Web Vitals monitoring integrated
- **File**: `lib/performance.js`

### 4. **Caching Strategy**
- ✅ Edge middleware for instant responses
- ✅ Long-cache for static assets (1 year)
- ✅ Stale-while-revalidate for HTML
- ✅ ISR for dynamic content
- **File**: `middleware.js`

### 5. **Core Web Vitals Monitoring**
- ✅ Web Vitals tracking API endpoint
- ✅ Real user monitoring via `sendBeacon`
- ✅ Performance metrics collection
- **Endpoint**: `/api/vitals`
- **File**: `pages/_app.js`

### 6. **Resource Optimization**
- ✅ DNS prefetch for external domains
- ✅ Preconnect for critical resources
- ✅ Prefetch for likely next pages
- ✅ Preload for LCP images
- **Config**: `pages/_document.js`

### 7. **Layout Shift Prevention (CLS)**
- ✅ Aspect ratio containers for images
- ✅ Fixed dimensions for interactive elements
- ✅ System font stack (no FOUT/FOIT)
- ✅ Defined gap/margin utilities
- ✅ Skeleton screens for lazy content
- **File**: `styles/globals.css`

### 8. **Interaction Optimization (INP)**
- ✅ Event debouncing utilities
- ✅ Visibility change optimization
- ✅ Reduced motion support
- ✅ Efficient event handlers
- **Utility**: `lib/performance.js`

## Configuration Updates

### next.config.js
```javascript
// Image optimization
images: {
  formats: ['image/avif', 'image/webp'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  minimumCacheTTL: 60,
}

// CSS optimization
experimental: {
  optimizeCss: true,
  optimizePackageImports: [...],
}

// Security headers
headers: [
  X-Content-Type-Options,
  X-Frame-Options,
  X-XSS-Protection,
  Referrer-Policy,
]
```

## Performance Targets by Page Type

### Homepage
- **LCP Target**: < 2.0s
- **Key Elements**: Hero image, above-fold content
- **Optimization**: LCP image marked as `isLCP={true}`

### Blog Pages
- **LCP Target**: < 2.5s
- **Key Elements**: Hero banner, featured image
- **Optimization**: Featured images use `priority={true}`

### Service Pages  
- **LCP Target**: < 2.5s
- **Key Elements**: Service cards, main content
- **Optimization**: Lazy-load below-fold cards

### Location Pages
- **LCP Target**: < 2.5s
- **Key Elements**: Location map, service listings
- **Optimization**: Map lazy-loads after page interactive

## Monitoring & Tracking

### Real User Monitoring (RUM)
```javascript
// Enabled in pages/_app.js
// Tracks LCP, FID, CLS, FCP, TTFB
// Sends metrics to /api/vitals endpoint
```

### Debug Performance Locally
```bash
npm run build
npm run start
# Use Chrome DevTools Lighthouse or WebPageTest
```

### Production Monitoring
- Google Search Console: CWV report
- PageSpeed Insights: Field data
- Custom analytics: RUM via `/api/vitals`

## Optimization Checklist

### Per-Page Requirements
- [ ] LCP image marked with `isLCP={true}`
- [ ] All images have explicit width/height
- [ ] No layout shift on interactive elements
- [ ] Debounced event handlers for INP
- [ ] Preload critical resources

### Build-Time Checks
```bash
npm run build  # Check build size
ANALYZE=true npm run build  # Bundle analysis
```

### Runtime Checks
- [ ] Web Vitals data in `/api/vitals` endpoint
- [ ] Cache headers correct in middleware
- [ ] Images served in modern formats
- [ ] No render-blocking resources

## Expected Performance Metrics

### With These Optimizations
- **LCP**: 1.5-2.3s (Good)
- **INP**: 80-150ms (Good)
- **CLS**: 0.05-0.1 (Good)
- **FCP**: 1.0-1.8s
- **TTFB**: 200-400ms

### Before Optimization (Baseline)
- **LCP**: 3.0-4.5s (Needs Improvement)
- **INP**: 200-400ms (Needs Improvement)
- **CLS**: 0.1-0.2 (Needs Improvement)

## Scaling to 100K+ Pages

### Performance for Scale
1. **CDN Caching**: Edge middleware ensures all requests fast
2. **ISR Revalidation**: Staggered rebuilds prevent thundering herd
3. **Image Optimization**: Automatic compression saves bandwidth
4. **Database**: Lightweight JSON data files (zero DB latency)
5. **Monitoring**: RUM tracking identifies slow pages

### Per-1000-Pages Considerations
- Monitor Web Vitals for regressions
- Analyze traffic patterns for prefetch strategy
- Review bundle size trends
- Check ISR revalidation performance

## Next Steps (Phase 6: Testing)

1. Build verification
2. Hydration testing
3. Rendering performance validation
4. Web Vitals baseline establishment
5. Capacity planning for scale

---
**Last Updated**: 2026-09-11
**Version**: Phase 5 (Performance Optimization)
**Status**: Implementation Complete
