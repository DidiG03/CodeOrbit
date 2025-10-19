# Code Orbit - Company Website

A modern, responsive company website built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- ✅ **Next.js 15** with App Router
- ✅ **TypeScript** for type safety
- ✅ **Tailwind CSS** for beautiful, responsive design
- ✅ **SEO Optimized** with proper metadata
- ✅ **Responsive Design** - works on all devices
- ✅ **Modern UI/UX** with smooth animations and gradients
- ✅ **Contact Form** with validation
- ✅ **Dark Mode** support

## 📦 Project Structure

```
CodeOrbit/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with SEO metadata
│   │   ├── page.tsx             # Main page with all sections
│   │   ├── globals.css          # Global styles
│   │   └── favicon.ico          # Favicon
│   └── components/
│       ├── Navbar.tsx           # Navigation bar
│       ├── Hero.tsx             # Hero section
│       ├── Services.tsx         # Services section
│       ├── Products.tsx         # Products section
│       ├── About.tsx            # About section
│       ├── Contact.tsx          # Contact form section
│       └── Footer.tsx           # Footer
├── public/                      # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## 🛠️ Tech Stack

- **Framework:** Next.js 15.5.6
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Fonts:** Geist Sans & Geist Mono
- **Linting:** ESLint with Next.js config
- **Package Manager:** npm

## 🏃 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd CodeOrbit
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment to Vercel

### Method 1: Automatic Deployment (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js settings
   - Click "Deploy"

3. **Automatic Deployments:**
   - Every push to `main` branch will trigger a new deployment
   - Pull requests create preview deployments

### Method 2: Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Production Deployment:**
   ```bash
   vercel --prod
   ```

## 📝 Sections Overview

### Hero Section
- Eye-catching gradient background
- Clear call-to-action buttons
- Responsive design

### Services
- 4 service cards: Web Development, Mobile Apps, Cloud Solutions, UI/UX Design
- Hover effects and animations

### Products
- 3 product showcases with status badges
- OrbitCMS, DataFlow, ConnectAPI

### About
- Company mission and values
- Statistics (projects, clients, years)
- Team information

### Contact
- Functional contact form (placeholder submission)
- Contact information display
- Social media links

## 🎨 Customization

### Colors
Modify the color scheme in Tailwind CSS classes throughout the components. The current theme uses:
- Primary: Blue (600/700)
- Secondary: Purple (600)
- Background: White/Gray

### Content
Update the content in each component file:
- `Hero.tsx` - Main heading and tagline
- `Services.tsx` - Service offerings
- `Products.tsx` - Product details
- `About.tsx` - Company information
- `Contact.tsx` - Contact information

### SEO
Update metadata in `src/app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Your Title",
  description: "Your Description",
  // ... other metadata
};
```

## 🔧 Configuration Files

- **next.config.ts** - Next.js configuration
- **tailwind.config.ts** - Tailwind CSS configuration
- **tsconfig.json** - TypeScript configuration
- **eslint.config.mjs** - ESLint configuration

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🐛 Known Issues

- Contact form currently logs to console (implement backend integration)
- Social media links are placeholders

## 🔮 Future Enhancements

- [ ] Backend integration for contact form
- [ ] Blog section
- [ ] Portfolio/case studies
- [ ] Admin dashboard
- [ ] Newsletter subscription
- [ ] Multi-language support

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

Contact the Code Orbit team for contribution guidelines.

## 📞 Support

For support, email hello@codeorbit.com or visit our contact page.

---

Built with ❤️ by Code Orbit
