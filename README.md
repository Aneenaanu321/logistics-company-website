# Logistics Company Website

A modern, responsive logistics company website built with Next.js, TypeScript, and Tailwind CSS.

## Features

-  **Dark/Light Theme Toggle** - Switch between themes with persistent preference
-  **Shipment Tracking** - Track shipments by tracking number (guest access)
-  **Quote Calculator** - Get instant shipping quotes (guest access)
-  **PDF Export** - Download tracking reports and quotes as PDF
-  **CSV Export** - Export data in CSV format
-  **Responsive Design** - Works on mobile, tablet, and desktop
-  **SEO Optimized** - Built with Next.js for excellent SEO

## Tech Stack

- **Framework**: Next.js 16+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Theme Management**: next-themes
- **PDF Generation**: jsPDF + html2canvas
- **CSV Export**: papaparse
- **Forms**: react-hook-form + zod
- **Icons**: lucide-react
- **Animations**: framer-motion

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # UI components
│   ├── layout/           # Layout components (Header, Footer, etc.)
│   ├── features/         # Feature components (Tracking, Quote, etc.)
│   └── sections/         # Page sections
├── lib/                   # Utility functions
│   ├── pdf.ts            # PDF generation utilities
│   └── csv.ts            # CSV export utilities
└── types/                 # TypeScript type definitions
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Quick Deploy to Vercel (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Import your repository: `Aneenaanu321/logistics-company-website`
4. Click **"Deploy"**
5. Your site will be live in 1-2 minutes! 🚀

**Live URL will be:** `https://logistics-company-website.vercel.app`

### Other Deployment Options

- **Netlify**: [netlify.com](https://netlify.com) - Similar to Vercel
- **AWS Amplify**: AWS hosting solution
- **DigitalOcean**: Cloud platform deployment

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed deployment instructions.

## Next Steps

1. Create homepage with hero section
2. Build tracking page with search functionality
3. Create quote calculator page
4. Add services page
5. Build contact page
6. Implement PDF/CSV export features

## License

MIT
