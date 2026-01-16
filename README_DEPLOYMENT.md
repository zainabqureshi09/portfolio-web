# Deployment Guide

## Production Build

This portfolio is production-ready and optimized for deployment.

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Build Steps

1. **Install dependencies**
```bash
npm install
```

2. **Build for production**
```bash
npm run build
```

3. **Test production build locally**
```bash
npm start
```

### Environment Variables

Create a `.env.local` file for local development (see `.env.local.example`):

```env
GITHUB_TOKEN=your_github_personal_access_token
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

For production, set these in your deployment platform.

### Deployment Platforms

#### Vercel (Recommended)
1. Push code to GitHub
2. Import repository in Vercel
3. Vercel will auto-detect Next.js and deploy
4. Add environment variables in project settings

#### Netlify
1. Build command: `npm run build`
2. Publish directory: `.next`
3. Add environment variables in site settings

#### Docker
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

### Features Included

✅ SEO optimized with metadata
✅ Responsive design for all devices
✅ Loading states and error boundaries
✅ Scroll to top functionality
✅ Animated transitions
✅ GitHub API integration with caching
✅ Production-ready performance optimizations
✅ Security headers configured

### Performance Optimizations

- Image optimization with Next.js Image
- Component code splitting
- Route prefetching
- Cached API responses (1 hour revalidation)
- Compressed assets
- Minified production build

### GitHub Token Setup

For better GitHub API rate limits:
1. Go to https://github.com/settings/tokens
2. Generate new token (classic)
3. Select `public_repo` scope
4. Copy token and add to environment variables
