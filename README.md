# HippiStuff 🌿

A conscious living affiliate marketing platform built with React, TypeScript, and Tailwind CSS. Connecting earth-conscious souls with sustainable products and ancient wisdom.

## ✨ Features

### 🛍️ Affiliate Marketing Platform
- **Product Categories**: Meditation & Mindfulness, Natural Beauty, Sustainable Living, Sacred Spaces
- **Search Functionality**: Real-time product search with intelligent filtering
- **Affiliate Tracking**: Complete analytics system for clicks, conversions, and performance
- **Product Database**: Curated collection of earth-friendly products with affiliate links
- **Trust & Transparency**: Honest affiliate disclosure and authentic reviews

### 🎨 User Experience
- **Sacred Shop Section**: Dedicated product showcase with beautiful UI
- **Content Integration**: Product recommendations embedded within blog content
- **Mobile Responsive**: Seamless experience across all devices
- **Smooth Navigation**: Single-page application with scroll-to-section navigation

### 📊 Analytics & SEO
- **Performance Tracking**: Google Analytics 4 and Facebook Pixel integration
- **SEO Optimized**: Complete meta tags, structured data, and social sharing
- **Conversion Tracking**: Advanced affiliate link monitoring and reporting
- **Site Performance**: Built-in performance monitoring and optimization

### 🌱 Content Features
- **Wisdom Library**: Earth-conscious articles and guides
- **Sacred Circle**: Community platform with testimonials
- **Educational Resources**: Learning paths and workshops
- **Newsletter**: "Hippie Digest" email subscription

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/your-username/hippistuff.git
cd hippistuff

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development Commands
- `npm run dev` - Start Vite dev server with hot reload
- `npm run build` - Create production build
- `npm run lint` - Run ESLint on TypeScript/React files
- `npm run preview` - Preview production build locally

## 🏗️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Analytics**: Custom tracking system with GA4 & Facebook Pixel support
- **Deployment**: Ready for Vercel, Netlify, or any static host

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── SearchBar.tsx    # Product search functionality
│   └── AffiliateDisclosure.tsx  # Transparency component
├── data/
│   └── products.ts      # Product database and affiliate links
├── utils/
│   └── analytics.ts     # Affiliate tracking and analytics
├── App.tsx             # Main application component
└── main.tsx            # Application entry point
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
# Analytics
VITE_GA_MEASUREMENT_ID=your_google_analytics_id
VITE_FACEBOOK_PIXEL_ID=your_facebook_pixel_id

# Affiliate Settings
VITE_AFFILIATE_ID=your_affiliate_id
VITE_COMMISSION_RATE=your_default_commission_rate
```

### Product Management
Add new affiliate products in `src/data/products.ts`:

```typescript
{
  id: 'unique-product-id',
  name: 'Product Name',
  description: 'Product description',
  price: '$XX.XX',
  originalPrice: '$XX.XX', // optional
  affiliateUrl: 'https://your-affiliate-link.com',
  category: 'meditation|beauty|sustainable|sacred-spaces',
  // ... other fields
}
```

## 📈 Analytics & Tracking

The platform includes comprehensive tracking for:
- **Affiliate Link Clicks**: Track which products generate interest
- **Product Views**: Monitor product page engagement
- **Newsletter Signups**: Measure email list growth
- **Section Navigation**: Understand user behavior patterns
- **Performance Metrics**: Site speed and user experience

Access analytics data through the browser console in development or integrate with your preferred analytics dashboard.

## 🎨 Customization

### Styling
- Colors and themes are defined in `tailwind.config.js`
- Custom CSS classes follow the existing green/earth-tone palette
- All components use Tailwind utility classes for consistency

### Content
- Update hero section text in `App.tsx`
- Modify product categories in `src/data/products.ts`
- Customize affiliate disclosure in `src/components/AffiliateDisclosure.tsx`

## 🌍 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### Custom Server
```bash
npm run build
# Serve dist/ folder with any static file server
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/sacred-feature`)
3. Commit your changes (`git commit -m 'Add sacred feature'`)
4. Push to the branch (`git push origin feature/sacred-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with love for the conscious living community
- Inspired by sustainable commerce and authentic connections
- Icons by [Lucide](https://lucide.dev/)
- Images from [Pexels](https://pexels.com)

---

**Peace, Love & Conscious Commerce** 🌿💚

*Spreading earth wisdom one click at a time*