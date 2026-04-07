# Frontend Assessment - Deep Work Blueprint

A modern, responsive landing page built with Next.js 16, React 19, and Tailwind CSS v4. This project showcases a course landing page with beautiful UI components, dark mode support, and smooth animations.

## Features

- Modern UI with gradient borders and blur effects
- Dark/Light mode support
- Fully responsive design (mobile-first approach)
- Smooth scroll animations
- Countdown timer for promotional offers
- Testimonial carousel with scroll snap
- Optimized images with Next/Image
- TypeScript for type safety
- Tailwind CSS v4 for styling

## Tech Stack

| Technology | Version | Description |
|------------|---------|-------------|
| [Next.js](https://nextjs.org/) | 16.2.1 | React framework with App Router |
| [React](https://react.dev/) | 19.2.4 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Static type checking |
| [Tailwind CSS](https://tailwindcss.com/) | 4.x | Utility-first CSS framework |
| [Lucide React](https://lucide.dev/) | 1.7.0 | Icon library |
| [React Icons](https://react-icons.github.io/react-icons/) | 5.6.0 | Additional icon collection |

## Project Structure

```
frontend-assessment/
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Home page
│   └── not-found.tsx       # 404 page
├── components/
│   ├── home/
│   │   ├── HeroSection.tsx       # Hero with countdown timer
│   │   ├── MainContent.tsx       # Main content wrapper
│   │   ├── pain-point-sections.tsx
│   │   ├── benefits.tsx          # Benefits grid
│   │   ├── curriculum.tsx        # Course curriculum
│   │   ├── testimonial.tsx       # Testimonials carousel
│   │   └── cta.tsx               # Call-to-action section
│   ├── shared/
│   │   ├── Navbar.tsx            # Navigation bar
│   │   ├── Footer.tsx            # Footer component
│   │   └── Badge.tsx             # Badge component
│   ├── testimonials/
│   │   ├── text-card.tsx         # Text testimonial card
│   │   └── video-card.tsx        # Video testimonial card
│   └── ui/
│       ├── Button.tsx            # Reusable button
│       ├── GradientBorder.tsx    # Gradient border wrapper
│       └── IconCircle.tsx        # Icon in circle
├── lib/
│   ├── utils.ts                  # Utility functions (cn helper)
│   └── theme.ts                  # Theme configuration
├── public/
│   └── images/                   # Static images
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/frontend-assessment.git
cd frontend-assessment

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
# Run development server
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
# Create production build
npm run build

# Start production server
npm run start
```

## Component Overview

### HeroSection
- Animated countdown timer for promotional offers
- Responsive background images with blur effects
- Call-to-action buttons

### PainPointsSection
- Addresses common user challenges
- Uses responsive image grids

### Benefits
- Grid-based benefit cards
- Icon circles with gradient borders

### Curriculum
- Accordion-style course modules
- Lesson rows with expand/collapse

### Testimonials
- Horizontal scroll carousel with snap points
- Mixed content (text and video cards)
- Navigation arrows

### CTA
- Final call-to-action section
- Responsive layout

## Customization

### Theme Colors
Edit `lib/theme.ts` to customize theme colors and design tokens.

### Styling
The project uses Tailwind CSS v4. Modify styles directly in component files or update the global Tailwind config.

### Images
Replace images in `public/images/` with your own assets.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and confidential.

## Author

Built with ❤️ using Next.js and Tailwind CSS
