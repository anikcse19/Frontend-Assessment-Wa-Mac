# Frontend Assessment - Deep Work Blueprint

A modern, responsive landing page built with Next.js 16, React 19, and Tailwind CSS v4. This project showcases a course landing page with beautiful UI components, dark mode support, and smooth animations.

## 🚀 Live Demo

**[View Live Site](https://anik-deb-frontend.vercel.app/)**

## Features

- Modern UI with gradient borders and blur effects
- Dark/Light mode support
- Fully responsive design (mobile-first approach)
- **GSAP scroll-triggered animations** for engaging user experience
- Parallax effects on background elements
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
| [GSAP](https://gsap.com/) | Latest | Scroll-triggered animations |
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
│   │   ├── HeroSection.tsx       # Hero with countdown & parallax
│   │   ├── MainContent.tsx       # Main content wrapper
│   │   ├── pain-point-sections.tsx
│   │   ├── benefits.tsx          # Benefits with stagger animations
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
├── hooks/
│   └── useScrollAnimation.ts     # GSAP animation hooks
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
git clone https://github.com/anikcse19/Frontend-Assessment-Wa-Mac.git
cd frontend-assessment

# Install dependencies
npm install
```

### Development

```bash
# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
# Create production build
npm run build

# Start production server
npm run start
```

## Animations

This project uses GSAP with ScrollTrigger for smooth, scroll-triggered animations:

### Animation Types
- **fadeInUp** - Elements fade in while moving up
- **fadeInDown** - Elements fade in while moving down
- **fadeInLeft/Right** - Elements slide in from sides
- **scaleIn** - Elements scale up with a bounce effect
- **stagger** - Child elements animate sequentially
- **parallax** - Background elements move at different speeds

### Usage Example

```tsx
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const MyComponent = () => {
  const ref = useScrollAnimation<HTMLDivElement>("fadeInUp", { delay: 0.2 });

  return (
    <div ref={ref}>
      This content animates when scrolled into view
    </div>
  );
};
```

## Component Overview

### HeroSection
- GSAP-powered entrance animations
- Parallax background effects
- Animated countdown timer
- Responsive background images with blur

### PainPointsSection
- Scroll-triggered fade animations
- Staggered image grid reveals

### Benefits
- Staggered left-slide animations for benefit cards
- Icon circles with gradient borders

### Curriculum
- Accordion-style course modules
- Left/right panel entrance animations
- Sticky pricing card on desktop

### Testimonials
- Scroll-snap carousel
- Staggered card animations
- Mixed content (text and video cards)

### CTA
- Split-panel animations (left/right)
- Pricing card with gradient border

## Customization

### Theme Colors
Edit `lib/theme.ts` to customize theme colors and design tokens.

### Animation Timing
Modify animation options in component files:
```tsx
useScrollAnimation("fadeInUp", {
  delay: 0.2,    // Start delay
  duration: 0.8, // Animation duration
  threshold: 0.1 // Trigger point
});
```

### Styling
The project uses Tailwind CSS v4. Modify styles directly in component files.

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

Built with ❤️ using Next.js, Tailwind CSS, and GSAP
