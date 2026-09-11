# Deployment Guide - Programmatic SEO System (100K+ Pages)

**Current Status**: ✅ Build Verified & Production-Ready  
**Last Build**: 2026-09-11 (All tests passing)  
**Target Platform**: Vercel (recommended for ISR support)

---

## Pre-Deployment Checklist

### Code Quality
- [x] Build passes with zero errors
- [x] All pages render correctly
- [x] No TypeScript/ESLint errors in critical paths
- [x] Core Web Vitals infrastructure in place
- [x] Web Vitals monitoring endpoint ready

### Performance Verification
- [x] Image optimization configured (AVIF/WebP)
- [x] Critical CSS inlined (_document.js)
- [x] System fonts active (zero FOUT)
- [x] Edge middleware caching ready
- [x] ISR revalidation times set

### SEO Foundation
- [x] Sitemaps configured (13 files)
- [x] Breadcrumb schema in place
- [x] Business/LocalBusiness schemas ready
- [x] Canonical URLs configured
- [x] robots.txt prepared

### Security
- [x] Security headers configured
- [x] CORS policies set
- [x] CSP headers ready
- [x] Reduced permissions policy active

### Database & Environment
- [x] JSON data files in /data directory
  - services.json (20 services)
  - industries.json (30 industries)
  - locations.json (50 locations)
  - blog-posts.json (10 posts)
- [x] No secrets in code
- [x] Environment-agnostic (works with default Vercel env)

---

## Deployment Options

### Option 1: Vercel (Recommended)

**Why Vercel?**
- Native Next.js support
- ISR (Incremental Static Regeneration) at scale
- Edge Functions for middleware
- Automatic SSL/TLS
- Global CDN with smart caching

#### Steps:

1. **Connect Repository**
   ```bash
   # Already connected to GitHub
   # Just ensure you're pushing to origin
   git push origin pages-router-pseo-100k
   ```

2. **Configure Project in Vercel**
   - Go to https://vercel.com/dashboard
   - Click "Add New..." → "Project"
   - Import `jvkoyani/seo-11-09-2026` repository
   - Select branch: `pages-router-pseo-100k` (or `main`)

3. **Set Environment Variables** (if needed)
   ```
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   ```
   
   *Note: Current system uses hardcoded URLs in sitemap, consider updating*

4. **Configure Build Settings**
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm ci`

5. **Deploy**
   - Vercel will automatically build on push
   - Wait for deployment to complete (~5-10 minutes for first build)
   - Get production URL

6. **Post-Deployment**
   - Visit deployment URL
   - Test key pages:
     - Homepage: `/`
     - Blog: `/blog`
     - Blog post: `/blog/seo-tips-2024`
     - Blog location variant: `/blog/seo-tips-2024/sydney`
   - Check Web Vitals in Vercel dashboard

### Option 2: Self-Hosted (Docker/VM)

#### Requirements
- Node.js 18+ 
- 2GB RAM minimum
- 5GB disk space
- Nginx/Apache for reverse proxy

#### Steps:

```bash
# 1. Clone repository
git clone https://github.com/jvkoyani/seo-11-09-2026.git
cd seo-11-09-2026

# 2. Install dependencies
npm ci

# 3. Build
npm run build

# 4. Start server
npm run start
# or use PM2 for process management:
pm2 start npm --name "pseo-site" -- start

# 5. Configure reverse proxy (Nginx example)
# /etc/nginx/sites-available/pseo
server {
    listen 80;
    server_name yourdomain.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

# 6. Enable SSL with Let's Encrypt
sudo certbot --nginx -d yourdomain.com

# 7. Restart Nginx
sudo systemctl restart nginx
```

### Option 3: AWS (Lambda/EC2/Amplify)

#### AWS Amplify (Easiest)
```bash
npm install -g @aws-amplify/cli
amplify init
amplify add hosting
amplify publish
```

#### AWS EC2 (Full Control)
- Launch t3.medium instance (2GB RAM, cost-effective)
- Install Node.js and Nginx
- Follow "Self-Hosted" steps above

#### AWS Lambda (Serverless)
```bash
npm install -g serverless
serverless create --template aws-nodejs-eco --path seo-site
# Deploy Next.js using Serverless Framework plugin
```

---

## Post-Deployment Configuration

### 1. Update Site URL (Critical for SEO)

Edit `next.config.js` to use environment variable:

```javascript
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com';

// Then update sitemap generation to use baseUrl instead of hardcoded URL
```

**Or** set environment variable in hosting platform:
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### 2. Configure DNS

```
Vercel: CNAME to [your-project].vercel.app
Self-Hosted: A record to your server IP
```

### 3. Set Up Google Search Console

1. Go to https://search.google.com/search-console
2. Add property: Choose URL prefix
3. Enter: `https://yourdomain.com`
4. Verify using TXT record or other method
5. Submit `/sitemap.xml` to GSC

### 4. Configure Web Vitals Monitoring

The `/api/vitals` endpoint is ready to collect metrics:

```javascript
// Option A: Google Analytics (Recommended)
// Integrate GA4 to view Web Vitals data natively

// Option B: Custom Dashboard
// Build a dashboard that reads the /api/vitals endpoint
// Store metrics in database for analysis

// Option C: Third-Party Service
// Use Sentry, DataDog, New Relic, etc.
// They natively support Web Vitals tracking
```

### 5. Set Up Monitoring & Alerts

- **Vercel**: Built-in analytics at https://vercel.com/dashboard
- **Google Search Console**: Monitor CWV in Experience → Core Web Vitals
- **Custom**: Implement dashboard with `/api/vitals` data

---

## Scaling Beyond 100K Pages

### Phase 1: Expand Data (0-3 months)
```json
{
  "services": 20 → 40,
  "industries": 30 → 50,
  "locations": 50 → 170+ (all major Australian cities/suburbs)
}
```

**Estimated Result**: 30K → 300K+ pages

### Phase 2: Optimize for Scale
- Increase seed set size for ISR
- Implement database (optional) instead of JSON
- Add content API for dynamic generation

### Phase 3: Advanced Features (3-6 months)
- Location-specific service pages
- Industry-specific landing pages
- AI-generated content variants
- Customer review integration
- Dynamic pricing/availability

---

## Rollback Plan

If issues occur post-deployment:

### Vercel
1. Go to Deployments tab
2. Click "Rollback" on previous successful deployment
3. Previous version live in ~30 seconds

### Self-Hosted
```bash
# Rollback to previous version
git revert HEAD
npm run build
npm run start

# Or use PM2 to switch versions
pm2 restart pseo-site
pm2 save
```

---

## Post-Launch Monitoring

### Daily (First Week)
- [ ] Check homepage loads
- [ ] Monitor error logs
- [ ] Verify Google indexing

### Weekly (First Month)
- [ ] Review Web Vitals metrics
- [ ] Check Google Search Console
- [ ] Monitor server performance
- [ ] Test blog page generation

### Monthly (Ongoing)
- [ ] Analyze Core Web Vitals trends
- [ ] Review traffic patterns
- [ ] Monitor build times
- [ ] Check indexation status

---

## Troubleshooting

### Issue: Pages Not Generating

**Solution**:
```bash
# Check build logs
npm run build

# Verify data files exist
ls data/

# Verify paths in getStaticPaths
# Check fallback: 'blocking' is properly set
```

### Issue: Slow Page Load

**Solution**:
```bash
# Run Lighthouse audit
# Check LCP images are marked with priority={true}
# Verify ISR revalidation times
# Check Edge middleware is caching correctly
```

### Issue: Sitemap Not Updating

**Solution**:
```bash
# Check ISR revalidation in code
# Verify /sitemap.xml endpoint responds
# Submit sitemap manually to GSC
```

---

## Success Metrics

After deployment, validate:

✅ **Build Time**: < 10 minutes for full build  
✅ **Homepage Load**: < 2 seconds LCP  
✅ **Blog Page Load**: < 2.5 seconds LCP  
✅ **Sitemap**: All URLs discoverable  
✅ **Web Vitals**: CLS < 0.1, INP < 200ms  
✅ **Indexation**: 500+ pages in Google within 2 weeks  

---

## Support & Next Steps

### Documentation
- `PERFORMANCE.md` - CWV optimization guide
- `TESTING.md` - Testing procedures
- `README.md` - Project overview

### Scaling Guide
- Expand `/data/*.json` files with more entries
- Monitor build performance as page count grows
- Consider database migration at 50K+ pages

### Questions?
- Review Next.js docs: https://nextjs.org/docs
- Check Vercel deployment: https://vercel.com/docs/frameworks/nextjs

---

**Ready to Deploy!** 🚀  
Branch: `pages-router-pseo-100k`  
Build Status: ✅ Verified & Tested
