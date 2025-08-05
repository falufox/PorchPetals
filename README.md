# 🌸 Porch Petals

A micro flower delivery web app for same-day bouquet drops to neighbors. Built with React, TypeScript, and love.

## ✨ Features

- **📱 Mobile-first design** - Optimized for smartphone ordering
- **🚪 Door preview visualization** - See how bouquets look on different door styles
- **💳 Stripe payment processing** - Secure checkout with Stripe Elements
- **📊 Notion inventory sync** - Real-time inventory from Notion database
- **🎵 Spotify playlist integration** - Curated music for flower lovers
- **🎨 Apple-inspired design** - Beautiful, whimsical, and professional

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/falufox/PorchPetals.git
   cd PorchPetals
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Add your Stripe and Notion API keys
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## 🔧 Configuration

### Stripe Setup
1. Create a [Stripe account](https://stripe.com)
2. Get your publishable key from the Stripe Dashboard
3. Add to `.env`:
   ```
   VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
   ```

### Notion Integration (Optional)
1. Create a [Notion integration](https://developers.notion.com/)
2. Create a database with these properties:
   - **Name** (Title) - Bouquet name
   - **Available** (Number) - Current stock
   - **Total** (Number) - Maximum capacity
3. Add to `.env`:
   ```
   VITE_NOTION_TOKEN=secret_your_token_here
   VITE_NOTION_DATABASE_ID=your_database_id_here
   ```

*Note: The app works with mock data if Notion isn't configured.*

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx       # Main navigation
│   ├── DoorPreview.tsx  # Door visualization
│   └── StripeCheckout.tsx # Payment processing
├── pages/               # Route pages
│   ├── HomePage.tsx     # Landing page
│   ├── OrderPage.tsx    # Bouquet selection
│   ├── CheckoutPage.tsx # Customer info & payment
│   └── ConfirmationPage.tsx # Order success
├── services/            # External API integrations
│   └── notionService.ts # Notion inventory management
├── hooks/               # Custom React hooks
│   └── useInventory.ts  # Inventory state management
└── types/               # TypeScript definitions
    └── index.ts         # Shared types
```

## 🎨 Design System

### Brand Colors
- **Petal Pink**: Primary brand color for CTAs and highlights
- **Sage Green**: Secondary color for nature-inspired elements  
- **Kraft Brown**: Warm earth tones for packaging feel
- **Cream**: Soft backgrounds and cards

### Typography
- **Headings**: Caveat (handwritten feel)
- **Body**: Inter (clean and readable)
- **Accent**: Crimson Text (serif elegance)

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository at [vercel.com](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### Manual Build
```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## 📱 Mobile Optimization

- Touch-friendly button sizes (minimum 44px)
- Responsive grid layouts
- Optimized images and loading states
- Progressive Web App ready

## 🎵 Integrations

- **Stripe**: Secure payment processing
- **Notion**: Inventory management
- **Spotify**: Playlist sharing (confirmation page)
- **Instagram**: Social media integration

## 🤝 Contributing

This is a personal project, but feel free to:
- Report bugs via GitHub Issues
- Suggest features for neighbor-to-neighbor delivery
- Share your own flower delivery implementations

## 📄 License

Built with ❤️ for the flower community

---

*🌸 Generated with Claude Code*
