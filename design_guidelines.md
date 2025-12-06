# Design Guidelines: Educational Technology E-Commerce Platform

## Design Approach

**Reference-Based Approach**: Drawing inspiration from Shopify's clean product presentation, Apple Store's minimalist professionalism, and AWS Marketplace's B2B trust signals. This platform serves educational institutions requiring both visual appeal and detailed technical information.

## Core Design Principles

1. **Professional Trust**: Clean, authoritative design that instills confidence in institutional buyers
2. **Information Clarity**: Easy navigation between 15+ product categories with clear specifications
3. **Efficient Purchasing**: Streamlined cart and checkout optimized for bulk educational orders
4. **Product Showcase**: Visual hierarchy that balances imagery with technical details

---

## Typography System

**Primary Font**: Inter or DM Sans via Google Fonts CDN
- Headings (H1): 3xl-4xl (desktop), 2xl-3xl (mobile), font-bold
- Headings (H2): 2xl-3xl (desktop), xl-2xl (mobile), font-semibold
- Headings (H3): xl-2xl, font-semibold
- Body Text: base (16px), font-normal, leading-relaxed
- Product Titles: lg-xl, font-semibold
- Prices: xl-2xl, font-bold
- Category Labels: sm-base, font-medium, uppercase tracking-wide
- Specifications: sm, font-normal

**Secondary Font**: System UI for data-heavy tables and technical specifications

---

## Layout System

**Spacing Units**: Tailwind utilities - 2, 4, 6, 8, 12, 16, 20, 24, 32
- Standard section padding: py-16 to py-24 (desktop), py-12 (mobile)
- Component spacing: gap-6 to gap-8
- Card padding: p-6 to p-8
- Container max-width: max-w-7xl with px-4 to px-8

**Grid Systems**:
- Product Grid: grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6
- Category Grid: grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4
- Feature Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
- Checkout Layout: 2-column split (cart summary + form) on desktop, stacked mobile

---

## Component Library

### Navigation
- **Top Bar**: Sticky header with logo (left), category dropdown, search bar (center), cart icon with badge (right)
- **Category Navigation**: Horizontal scrollable pill buttons or mega-dropdown with all categories and subcategories
- **Breadcrumbs**: Show navigation path on product and category pages

### Homepage
- **Hero Section** (80vh): Full-width hero image showing modern classroom/campus technology with overlaid heading "Empowering Education Through Technology" and dual CTAs ("Browse Software" / "Explore Hardware") with backdrop-blur-sm backgrounds
- **Category Showcase**: 8-column grid (4 on tablet, 2 on mobile) with icon, category name, and product count
- **Featured Products**: 4-column carousel/grid highlighting bestsellers with image, title, price, category tag
- **Value Propositions**: 3-column grid with icons - "Certified for Education", "Bulk Pricing Available", "Expert Support"
- **Trust Section**: Customer logos, testimonials from schools/colleges, certification badges

### Product Listing Pages
- **Filter Sidebar** (desktop) / **Collapsible Drawer** (mobile): Category tree, price ranges, brand filters, product type filters
- **Product Cards**: Vertical cards with product image (4:3 ratio), category badge, title, short description, price, "Add to Cart" button, "View Details" link
- **Sorting Options**: Dropdown for price, popularity, newest, alphabetical
- **Pagination**: Numbered pages with prev/next at bottom

### Product Detail Pages
- **Image Gallery**: Large primary image with thumbnail strip below, zoom on hover
- **Product Information Panel**: Title, category breadcrumb, price (large, prominent), stock status, quantity selector, "Add to Cart" CTA
- **Tabs Section**: Specifications (table format), Description, Compatibility, Reviews
- **Related Products**: "Similar Products" carousel at bottom
- **Sticky Add to Cart**: Button follows scroll on mobile

### Shopping Cart
- **Cart Page Layout**: 2-column (desktop) - Items list (left, 2/3 width) + Order summary (right, 1/3 width, sticky)
- **Cart Items**: Horizontal cards with thumbnail, product name, category, price, quantity controls (+/-), remove button, subtotal
- **Empty Cart State**: Icon, message "Your cart is empty", "Continue Shopping" button
- **Order Summary Card**: Subtotal, estimated tax, shipping info, total (emphasized), "Proceed to Checkout" button

### Checkout Flow
- **Progress Indicator**: Steps - Customer Info → Payment → Confirmation
- **Form Layout**: Single column form with grouped sections, clear labels, helper text for institutional details
- **Order Review Panel**: Sticky sidebar showing cart contents and total
- **Payment Integration**: Stripe Elements embedded form
- **Security Badges**: Trust indicators near payment section

### Order Confirmation
- **Success State**: Large checkmark icon, order number (prominent), confirmation message
- **Order Details**: Itemized list, shipping address, order total, estimated delivery
- **Next Steps**: Email confirmation notice, "Track Order" and "Continue Shopping" CTAs

### Forms & Inputs
- **Text Inputs**: Consistent height (h-12), rounded corners (rounded-md), visible borders, focus states with ring
- **Buttons**: Primary (solid), Secondary (outline), sizes - sm, md (default), lg
- **Dropdowns**: Custom styled select elements or combobox pattern
- **Quantity Controls**: Number input with +/- buttons, minimum width for accessibility

### Cards & Containers
- **Product Cards**: Rounded corners (rounded-lg), subtle shadow (shadow-sm), hover elevation (shadow-md transition)
- **Info Cards**: Minimal borders or subtle backgrounds, adequate padding (p-6)
- **Category Cards**: Square aspect ratio with icon, overlay gradient on hover

### Icons
**Library**: Heroicons via CDN
- Shopping cart, search, user profile, filter, grid/list view toggles, plus/minus for quantity, heart for wishlist, truck for shipping, shield for security, check for success states

### Data Display
- **Price Display**: Consistent formatting, strike-through for discounts, "Starting at" for variable pricing
- **Badges**: Pill-shaped tags for categories, stock status ("In Stock", "Limited"), "New Arrival"
- **Tables**: Zebra striping for specifications, responsive scroll on mobile
- **Empty States**: Friendly illustrations/icons with clear messaging

### Trust Elements
- **Security Badges**: Payment icons (Visa, Mastercard, etc.), SSL certificate indicator
- **Social Proof**: Star ratings, review counts, "X schools trust us" counters
- **Certifications**: Educational compliance badges, ISO certifications

---

## Images

**Hero Image**: Wide panoramic shot of modern educational environment - smart classroom with interactive displays, students using tablets, or campus technology infrastructure. Professional photography style, bright, inspiring. Position: Full-width background on homepage hero.

**Category Images**: Icon-based illustrations for each category (simple, flat style for consistency) displayed in category grid cards.

**Product Images**: High-quality, consistent product photography on white backgrounds for hardware. Software products use screenshot mockups or interface previews in device frames.

**Trust Section**: Logos of educational institutions (grayscale treatment), authentic testimonial photos if available.

---

## Accessibility & Interactions

- **Keyboard Navigation**: Full support for tab navigation, visible focus indicators
- **Screen Readers**: Proper ARIA labels on interactive elements, semantic HTML structure
- **Touch Targets**: Minimum 44x44px for mobile buttons and links
- **Contrast**: Ensure all text meets WCAG AA standards
- **Loading States**: Skeleton screens for product grids, spinners for actions
- **Error States**: Inline validation messages, clear error indicators for forms
- **Animations**: Minimal, purposeful - subtle hover elevations, smooth transitions (200-300ms), loading spinners only

---

This design creates a professional, trustworthy e-commerce platform optimized for institutional buyers while maintaining visual appeal and ease of use across all device sizes.