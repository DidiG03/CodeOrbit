# Deployment Guide - Code Orbit Website

This guide will walk you through deploying the Code Orbit website to Vercel with automatic deployments.

## Prerequisites

- ✅ GitHub account
- ✅ Vercel account (free tier works great)
- ✅ Project pushed to GitHub

## Step 1: Prepare Your GitHub Repository

If you haven't already pushed your code to GitHub:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Code Orbit website"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/CodeOrbit.git

# Push to main branch
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Using Vercel Dashboard (Recommended for Beginners)

1. **Sign up/Log in to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub (recommended for easier integration)

2. **Import Your Project**
   - Click "Add New Project" or "New Project"
   - Click "Import Git Repository"
   - Select your GitHub repository (CodeOrbit)
   - Authorize Vercel to access your GitHub account if prompted

3. **Configure Project**
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./` (leave as default)
   - **Build Command:** `npm run build` (auto-detected)
   - **Output Directory:** `.next` (auto-detected)
   - **Install Command:** `npm install` (auto-detected)

4. **Environment Variables (Optional)**
   - If you have any environment variables, add them here
   - For this basic setup, none are required

5. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete (usually 1-2 minutes)
   - 🎉 Your site is live!

### Option B: Using Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Link to existing project or create new one
   - Select your scope (personal or team)
   - Confirm settings

4. **Production Deployment**
   ```bash
   vercel --prod
   ```

## Step 3: Configure Automatic Deployments

Vercel automatically sets up continuous deployment when you connect via GitHub.

### How It Works:

- **Main Branch:** Every push to `main` branch triggers a production deployment
- **Other Branches:** Pushes to other branches create preview deployments
- **Pull Requests:** Each PR gets its own preview URL

### Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions
5. Wait for DNS propagation (can take 24-48 hours)

## Step 4: Verify Deployment

1. **Check Build Logs**
   - Review the deployment logs in Vercel dashboard
   - Ensure there are no errors

2. **Test Your Site**
   - Visit your Vercel URL (e.g., `your-project.vercel.app`)
   - Test all sections:
     - ✅ Hero section loads
     - ✅ Navigation works
     - ✅ All sections are visible
     - ✅ Contact form displays
     - ✅ Responsive on mobile

3. **Test Performance**
   - Run Lighthouse audit
   - Check Core Web Vitals
   - Verify SEO score

## Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] GitHub repository connected to Vercel
- [ ] First deployment successful
- [ ] Site accessible at Vercel URL
- [ ] All sections working correctly
- [ ] Forms functioning properly
- [ ] Mobile responsive
- [ ] SEO metadata present
- [ ] Favicon displaying
- [ ] No console errors

## Monitoring and Analytics

### Vercel Analytics (Recommended)

1. Go to your project in Vercel
2. Navigate to "Analytics" tab
3. Enable Analytics (free on Pro plan)
4. Monitor:
   - Page views
   - User sessions
   - Core Web Vitals
   - Top pages

### Adding Google Analytics (Optional)

1. Create a Google Analytics property
2. Add tracking code to `src/app/layout.tsx`:

```typescript
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `
        }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

## Troubleshooting

### Build Fails

**Error:** `Module not found`
- **Solution:** Run `npm install` locally and verify all dependencies
- Commit `package-lock.json` to repository

**Error:** TypeScript errors
- **Solution:** Run `npm run lint` locally and fix all errors
- Commit fixes before deploying

### Site Not Updating

- **Check:** Verify commit was pushed to GitHub
- **Check:** Build completed successfully in Vercel
- **Try:** Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
- **Try:** Clear browser cache

### Slow Build Times

- Vercel builds can take 1-3 minutes
- Check build logs for specific slow steps
- Consider optimization if consistently slow

## Deployment Workflow

### For New Features

1. Create a feature branch
   ```bash
   git checkout -b feature/new-feature
   ```

2. Make changes and commit
   ```bash
   git add .
   git commit -m "Add new feature"
   ```

3. Push to GitHub
   ```bash
   git push origin feature/new-feature
   ```

4. Vercel creates a preview deployment automatically
5. Review the preview URL
6. Create Pull Request on GitHub
7. After approval, merge to main
8. Vercel automatically deploys to production

## Rollback

If you need to rollback to a previous version:

1. Go to Vercel dashboard
2. Navigate to "Deployments"
3. Find the previous successful deployment
4. Click "..." menu
5. Select "Promote to Production"

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel CLI Reference](https://vercel.com/docs/cli)

## Support

For deployment issues:
- Check [Vercel Status](https://www.vercel-status.com/)
- Visit [Vercel Support](https://vercel.com/support)
- Check Next.js GitHub issues

---

**Next Steps After Deployment:**
1. Share your live URL with stakeholders
2. Set up monitoring and analytics
3. Plan content updates
4. Consider custom domain
5. Optimize performance based on analytics

🚀 Happy Deploying!

