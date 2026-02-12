# HerbalHub Technical Specification

## Component Inventory

### shadcn/ui Components (Built-in)
- `accordion` - FAQ section
- `button` - CTAs throughout
- `card` - Pricing, team, strain cards
- `input` - Chat input field
- `badge` - Package labels, role badges
- `separator` - Visual dividers
- `scroll-area` - Custom scrollbars
- `sheet` - Mobile navigation drawer

### Custom Components to Build

| Component | Purpose | Location |
|-----------|---------|----------|
| `Navbar` | Fixed navigation with scroll effect | `src/sections/Navbar.tsx` |
| `Hero` | Landing section with animations | `src/sections/Hero.tsx` |
| `Pricing` | Three-tier pricing cards | `src/sections/Pricing.tsx` |
| `Timeline` | Vertical timeline with milestones | `src/sections/Timeline.tsx` |
| `Strains` | Interactive wheel + strain info | `src/sections/Strains.tsx` |
| `StrainWheel` | SVG spinning wheel component | `src/components/StrainWheel.tsx` |
| `RadarChart` | Terpene profile visualization | `src/components/RadarChart.tsx` |
| `QualityGrowth` | Stats section with parallax | `src/sections/QualityGrowth.tsx` |
| `AISommelier` | Chat interface | `src/sections/AISommelier.tsx` |
| `Games` | Games section with 3D illustration | `src/sections/Games.tsx` |
| `Team` | Team member grid | `src/sections/Team.tsx` |
| `FAQ` | Accordion FAQ | `src/sections/FAQ.tsx` |
| `Footer` | Site footer | `src/sections/Footer.tsx` |
| `AnimatedCounter` | Number count-up animation | `src/components/AnimatedCounter.tsx` |
| `FadeInView` | Scroll-triggered fade animation | `src/components/FadeInView.tsx` |

---

## Animation Implementation Table

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| **Page load fade-in** | Framer Motion | `AnimatePresence` + `motion.div` with initial/animate | Low |
| **Navbar scroll effect** | React hooks | `useScroll` hook + conditional classes | Low |
| **Scroll-triggered reveals** | Framer Motion | `whileInView` with viewport settings | Medium |
| **Staggered card reveals** | Framer Motion | `staggerChildren` in parent variants | Medium |
| **Timeline line draw** | CSS/Framer | SVG path animation or height transition | Medium |
| **Strain wheel spin** | Framer Motion | `animate` rotation with spring physics | High |
| **Radar chart animate** | Custom SVG | Path drawing with stroke-dasharray | Medium |
| **Stats count-up** | Custom hook | `useCountUp` with requestAnimationFrame | Medium |
| **Parallax background** | Framer Motion | `useScroll` + `useTransform` | Medium |
| **Accordion expand** | Framer Motion | `AnimatePresence` + height animation | Low |
| **Button hover effects** | Tailwind/CSS | `hover:scale-102` + transition | Low |
| **Card hover lift** | Tailwind/CSS | `hover:-translate-y-1` + shadow | Low |
| **Chat message appear** | Framer Motion | Staggered fade + slide from bottom | Medium |
| **Team card expand** | Framer Motion | Height animation on hover | Medium |

---

## Animation Library Choices

### Primary: Framer Motion
- Best for React component animations
- Excellent `whileInView` for scroll triggers
- Built-in gesture support
- AnimatePresence for mount/unmount

### Secondary: CSS/Tailwind
- Simple hover effects
- Transitions and transforms
- Performance-critical micro-interactions

### Custom Hooks
- `useScroll` - Track scroll position
- `useCountUp` - Animated number counting
- `useInView` - Intersection observer wrapper

---

## Project File Structure

```
/mnt/okcomputer/output/app/
├── public/
│   ├── images/
│   │   ├── team/
│   │   │   ├── lenni.jpg
│   │   │   ├── ruben.jpg
│   │   │   ├── joshua.jpg
│   │   │   └── darius.jpg
│   │   ├── grow-room.jpg
│   │   ├── tv-tower.png
│   │   └── game-illustration.png
│   └── fonts/
├── src/
│   ├── sections/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Pricing.tsx
│   │   ├── Timeline.tsx
│   │   ├── Strains.tsx
│   │   ├── QualityGrowth.tsx
│   │   ├── AISommelier.tsx
│   │   ├── Games.tsx
│   │   ├── Team.tsx
│   │   ├── FAQ.tsx
│   │   └── Footer.tsx
│   ├── components/
│   │   ├── StrainWheel.tsx
│   │   ├── RadarChart.tsx
│   │   ├── AnimatedCounter.tsx
│   │   ├── FadeInView.tsx
│   │   └── PricingCard.tsx
│   ├── hooks/
│   │   ├── useScroll.ts
│   │   ├── useCountUp.ts
│   │   └── useInView.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── components/ui/          # shadcn components
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

---

## Dependencies to Install

### Core (via init script)
- react
- react-dom
- typescript
- vite
- tailwindcss
- @radix-ui/* (shadcn dependencies)

### Additional
```bash
npm install framer-motion lucide-react
```

### shadcn Components
```bash
npx shadcn add accordion button card input badge separator scroll-area sheet
```

---

## Color Configuration (tailwind.config.js)

```javascript
colors: {
  background: '#1a1f16',
  foreground: '#f5f5f0',
  card: '#1e2419',
  'card-foreground': '#f5f5f0',
  primary: {
    DEFAULT: '#e85a2d',
    foreground: '#ffffff',
  },
  secondary: {
    DEFAULT: '#2d3328',
    foreground: '#f5f5f0',
  },
  muted: {
    DEFAULT: '#3d4a35',
    foreground: '#b8b8a8',
  },
  accent: {
    DEFAULT: '#e85a2d',
    foreground: '#ffffff',
  },
  border: '#3d4a35',
}
```

---

## Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

Key responsive changes:
- Navigation: hamburger menu on mobile
- Pricing: single column on mobile, 3 columns on desktop
- Team: 2 columns on tablet, 4 on desktop
- Strains: stacked on mobile, side-by-side on desktop

---

## Performance Considerations

1. **Image optimization**: Use WebP format, lazy loading
2. **Animation performance**: Use `transform` and `opacity` only
3. **Code splitting**: Lazy load below-fold sections
4. **Font loading**: Use `font-display: swap`
5. **Reduced motion**: Respect `prefers-reduced-motion`
