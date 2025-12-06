# 🎓 Learn-Loop - Educational Technology E-Commerce Platform

> **Empowering Education Through Technology**

A modern, full-stack e-commerce platform designed for educational institutions to discover, purchase, and implement cutting-edge technology solutions.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)
![TypeScript](https://img.shields.io/badge/typescript-5.6.3-blue.svg)

## ✨ Features

### 🛒 E-Commerce Core
- Product catalog with hardware & software listings
- Advanced search and filtering
- Shopping cart with quantity controls
- Stripe-powered secure checkout
- Order tracking and history

### 🎯 Educational Focus
- Tailored for schools, colleges & universities
- Bulk pricing for institutional purchases
- Category organization (Hardware, Software, Services, Training)
- Educational procurement compliance

### 🔐 Security
- Secure user authentication
- Session management
- Role-based access control

### 📱 Modern UI/UX
- Responsive mobile-first design
- Dark/Light mode support
- WCAG compliant accessibility
- Radix UI + Tailwind CSS components

## 🚀 Tech Stack

**Frontend:**
- React 18 with TypeScript
- Vite build tool
- Tailwind CSS + Radix UI
- Wouter routing
- TanStack Query

**Backend:**
- Express.js + TypeScript
- PostgreSQL database
- Drizzle ORM
- Stripe payments

## 📦 Installation

```bash
# Clone repository
git clone https://github.com/prateek1756/Learn-Loop.git
cd Learn-Loop

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env

# Push database schema
npm run db:push

# Start development server
npm run dev
```

## 🔧 Environment Variables

Create a `.env` file:

```env
DATABASE_URL=your_postgresql_url
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
SESSION_SECRET=your_session_secret
```

## 📜 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run check        # TypeScript type checking
npm run db:push      # Push database schema
```

## 🏗️ Project Structure

```
Learn-Loop/
├── client/              # React frontend
│   ├── src/
│   │   ├── components/  # UI components
│   │   ├── pages/       # Route pages
│   │   ├── hooks/       # Custom hooks
│   │   └── lib/         # Utilities
├── server/              # Express backend
│   ├── db.ts           # Database connection
│   ├── routes.ts       # API routes
│   └── index.ts        # Server entry
├── shared/             # Shared types
│   └── schema.ts       # Database schemas
└── README.md
```

## 🌟 Key Pages

- **Home** - Hero section, featured products, categories
- **Software** - Educational software catalog
- **Hardware** - Technology hardware listings
- **Training** - Professional development programs
- **Services** - Installation & support
- **Checkout** - Secure payment processing

## 💰 Currency

All prices displayed in **Indian Rupees (₹)** for the Indian educational market.

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

- **Email**: info@learnloop.com
- **Issues**: [GitHub Issues](https://github.com/prateek1756/Learn-Loop/issues)

---

**Built with ❤️ for Education**
