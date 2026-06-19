# TrionForge Sports — Agent Build Specification
## Landing Page + Catalogue Page
**Version:** 1.0 | **Prepared for:** Coding Agent (Antigravity / Claude Code / Cursor)
**Project Type:** New project — zero prior files exist

---

## 0. OVERVIEW & CONTEXT

You are building two pages for **TrionForge Sports LLC**, a premium sports equipment manufacturer based in Sialkot, Pakistan that imports pickleball paddles and padel rackets to the US market. This is a **B2C/B2B hybrid brand** targeting US consumers, retailers, and wholesale buyers.

The website must feel like a **US-based premium sports brand** — think JOOLA, Selkirk Sport, Wilson Sporting Goods — not like a Pakistani export directory or manufacturer catalogue. Every design decision must serve that positioning.

**Pages to build (this sprint):**
1. `app/page.tsx` — Landing Page (Hero + Brand story + Product teaser + CTA)
2. `app/catalogue/page.tsx` — Catalogue Page (Full product browsing experience)

**Design philosophy:** Aggressive. Precise. Premium. Clean. American sports brand energy. No over-decoration. No glassmorphism overload. No cheap gradients. The kind of site that makes a buyer trust you before they read a word.

---

## 1. TECH STACK

### Core Framework
```
Next.js 15 (App Router)
TypeScript (strict mode)
```

### Styling
```
Tailwind CSS v4
CSS custom properties for design tokens
```

### Animation
```
motion (formerly Framer Motion) — import from "motion/react"
Lenis for smooth scrolling
```

### Fonts (via next/font or Google Fonts link)
```
Bebas Neue — headings, hero, section titles
Inter — body copy, UI labels, buttons
```

### Image Handling
```
next/image (all product images)
Sharp (installed as Next.js image optimization dependency)
```

### Icons
```
Lucide React
```

### Hosting-ready
```
Vercel-optimized (static + ISR where applicable)
No database needed for these two pages — static data
```

---

## 2. PROJECT STRUCTURE

```
trionforge-sports/
├── app/
│   ├── layout.tsx              # Root layout: fonts, Lenis, metadata
│   ├── page.tsx                # Landing Page
│   ├── catalogue/
│   │   └── page.tsx            # Catalogue Page
│   └── globals.css             # CSS tokens, base styles, Tailwind imports
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky nav with scroll state
│   │   └── Footer.tsx          # 4-col footer
│   ├── landing/
│   │   ├── Hero.tsx            # Full-screen hero
│   │   ├── TrustStrip.tsx      # 4-icon feature strip below hero
│   │   ├── AboutSection.tsx    # Two-col about with stats
│   │   ├── ProductTeaser.tsx   # 3-card product preview
│   │   └── CTABanner.tsx       # Full-width final CTA
│   ├── catalogue/
│   │   ├── CatalogueHero.tsx   # Page hero / header
│   │   ├── FilterBar.tsx       # Category filter tabs
│   │   ├── ProductGrid.tsx     # Responsive product grid
│   │   ├── ProductCard.tsx     # Individual product card
│   │   └── ProductModal.tsx    # Quick-view modal (optional enhancement)
│   └── ui/
│       ├── Button.tsx          # Reusable button variants
│       ├── SectionLabel.tsx    # Red eyebrow labels
│       └── AnimatedSection.tsx # Scroll-reveal wrapper
├── data/
│   └── products.ts             # Static product data array
├── public/
│   ├── images/
│   │   ├── logo.png            # TrionForge Sports logo (provided)
│   │   └── products/           # Agent: create placeholder; Suhayb will drop real images here
│   └── fonts/                  # (if self-hosting fonts)
├── lib/
│   └── lenis.ts                # Lenis smooth scroll setup
└── next.config.ts
```

---

## 3. DESIGN SYSTEM TOKENS

Define all tokens in `app/globals.css` as CSS custom properties. Tailwind v4 uses these natively.

```css
/* app/globals.css */
@import "tailwindcss";

:root {
  /* === BRAND COLORS === */
  --color-bg-primary:    #050505;
  --color-bg-secondary:  #0b0b0b;
  --color-bg-section:    #101010;
  --color-bg-card:       #141414;

  --color-red:           #D71920;
  --color-red-dark:      #b01218;
  --color-red-glow:      rgba(215, 25, 32, 0.25);

  --color-white:         #FFFFFF;
  --color-grey:          #9A9A9A;
  --color-grey-light:    #d0d0d0;

  --color-border:        rgba(255,255,255,0.08);
  --color-border-strong: rgba(255,255,255,0.15);

  /* === TYPOGRAPHY === */
  --font-display:  'Bebas Neue', sans-serif;
  --font-body:     'Inter', sans-serif;

  /* === SPACING === */
  --section-padding-y: 6rem;
  --container-max:     1280px;
  --container-pad:     1.5rem;

  /* === TRANSITIONS === */
  --ease-smooth: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --transition-base: 0.3s var(--ease-smooth);
}
```

**Extend Tailwind config** (inline in CSS v4 style):
```css
@theme {
  --color-brand-red: #D71920;
  --color-brand-dark: #050505;
  --font-display: 'Bebas Neue', sans-serif;
}
```

---

## 4. TEXTURE SYSTEM

The brand uses **subtle industrial textures** — NOT heavy, NOT visible noise. These must feel like premium material surfaces viewed at distance.

Apply these as `::before` pseudo-elements or `background-image` with very low opacity:

```css
/* Forged steel / carbon fiber texture — subtle */
.texture-steel {
  background-image: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 1px,
    rgba(255,255,255,0.012) 1px,
    rgba(255,255,255,0.012) 2px
  );
}

/* Noise grain overlay — very subtle */
.texture-noise {
  background-image: url("data:image/svg+xml,..."); /* SVG noise */
  opacity: 0.03;
}
```

**Rule:** If you can clearly see the texture when looking at it directly, it's too strong. Reduce opacity until it's felt, not seen.

---

## 5. COMPONENT SPECIFICATIONS

---

### 5.1 NAVBAR (`components/layout/Navbar.tsx`)

**Behavior:**
- Fixed position, full width, `z-50`
- On mount: fully transparent (`bg-transparent`)
- On scroll > 60px: transitions to `bg-[#050505]/95 backdrop-blur-md border-b border-white/8`
- Smooth CSS transition on background change

**Layout:**
```
[TF Logo]    HOME  ABOUT US  PRODUCTS  CAPABILITIES  QUALITY  BLOG  CONTACT    [GET A QUOTE]
```

**Logo:** Use `next/image` with the provided `logo.png`. Width ~160px desktop, ~120px mobile.

**Nav links:**
- Font: Inter, 13px, `font-medium`, `tracking-widest`, uppercase
- Color: `#9A9A9A` default → `#FFFFFF` hover
- Active: `#FFFFFF` with subtle red underline `2px solid #D71920`
- Transition: `color 0.2s ease`

**GET A QUOTE button:**
- Background: `#D71920`
- Text: `#FFFFFF`, uppercase, `font-semibold`, 13px
- Padding: `12px 24px`
- Border-radius: `0` (sharp edges — no rounded corners on brand buttons)
- Hover: `background: #b01218`, scale `1.02`
- No box shadow

**Mobile:**
- Hamburger menu (3 lines → X)
- Full-screen overlay menu, dark background
- Links stack vertically, large, centered
- GET A QUOTE button at bottom

---

### 5.2 HERO SECTION (`components/landing/Hero.tsx`)

**Layout:** 100vh, split — 45% left content / 55% right product visual

**Left panel:**
```
[Red eyebrow label] "PRECISION BUILT. PERFORMANCE DRIVEN."

[H1 — Bebas Neue, 88px desktop / 56px mobile, white, line-height 0.95]
FORGED FOR
CHAMPIONS.
BUILT IN
SIALKOT.

[Subtitle — Inter, 18px, #9A9A9A, max-width 420px, line-height 1.6]
We manufacture premium pickleball paddles and padel rackets
for brands that demand the best. Direct from factory to your market.

[Two buttons side by side]
[OUR PRODUCTS — red filled] [GET A QUOTE — white outline, sharp]
```

**Right panel:**
- Background: `#0b0b0b` with very subtle radial gradient at center
- Position a hero product image (padel racket or pickleball paddle) centered
- Image: `object-fit: contain`, drop shadow via `filter: drop-shadow(0 40px 80px rgba(215,25,32,0.15))`
- Subtle ambient red glow behind product: `radial-gradient(ellipse 60% 40% at 50% 60%, rgba(215,25,32,0.08) 0%, transparent 70%)`
- DO NOT use heavy lighting effects — subtle is the rule

**Animation (on mount):**
```
Left panel: fade up + slight X translate from left, delay 0ms
H1 words: stagger reveal, each word fades up 80ms apart
Subtitle: fade up, delay 300ms
Buttons: fade up, delay 500ms
Right panel product: fade in + slight scale from 0.95 to 1.0, delay 200ms
```
Use `motion` (motion/react) with `initial`, `animate`, `transition`.

**Bottom of hero — Trust Strip:**
```
[4 items horizontal, dark strip, thin white separators]
  ⬤ OEM & ODM Manufacturing
  ⬤ Premium Materials
  ⬤ US Market Ready
  ⬤ Direct Factory Pricing
```
Icons: white line icons (Lucide). Strip background: `#0b0b0b`. Height: 64px. No card elevation.

---

### 5.3 ABOUT SECTION (`components/landing/AboutSection.tsx`)

**Layout:** Two equal columns, `gap-16`, section padding `py-24`

**Left column:**
```
[Red eyebrow] "ABOUT TRIONFORGE SPORTS"

[H2 — Bebas Neue, 56px] YOUR EDGE STARTS
AT THE SOURCE.

[Body — Inter, 16px, #9A9A9A, line-height 1.7, max 480px]
TrionForge Sports is a direct-to-market sports equipment brand
manufacturing in Sialkot — the city that supplies 70% of the
world's surgical instruments and sporting goods. We bring factory
precision to premium pickleball paddles and padel rackets,
serving US brands and retailers with OEM and private label solutions.

[Red button] EXPLORE OUR PRODUCTS →
```

**Right column:**
- Large product/brand lifestyle image (800x600, `rounded-none`, no border-radius)
- Stat overlay card — positioned bottom-left of image, slight offset outward:
  ```
  White background card (sharp corners), padding 24px
  4 stats in 2x2 grid:
  [10+]     [300+]
  Years     Happy
  Mfg.      Clients

  [50+]     [1M+]
  Countries Products
  Reached   Built
  ```
- Stat numbers: Bebas Neue, 42px, `#D71920`
- Stat labels: Inter, 12px, uppercase, `#101010`, `tracking-wider`

**Animation:** Section fades up on scroll entry using `AnimatedSection` wrapper with `whileInView`.

---

### 5.4 PRODUCT TEASER (`components/landing/ProductTeaser.tsx`)

**Purpose:** Shows 3 hero products on landing page to drive traffic to catalogue.

**Layout:**
- Section title: Bebas Neue 52px — "OUR SIGNATURE LINE"
- Red eyebrow: "WHAT WE MAKE"
- Subtitle: Inter 16px, grey — "Precision-built paddles and rackets for every level of play."
- 3-column grid, equal width cards

**Product Card:**
```
Background: #141414
Border: 1px solid rgba(255,255,255,0.08)
Border-radius: 0 (sharp)
Padding: 0 (image fills top)

[Product image — 16:10 ratio, object-cover]
[Bottom content area padding 24px]
  [Category tag — red, 11px, uppercase, tracking-widest]
  [Product name — Bebas Neue, 28px, white]
  [Short descriptor — Inter 13px, grey]
  [→ View Details link — white, underline on hover]
```

**Hover state:**
- Image: scale `1.04` (overflow hidden on card)
- Border-color: `rgba(215,25,32,0.5)` (red glow border)
- Card: `translateY(-4px)` with subtle `box-shadow: 0 20px 60px rgba(0,0,0,0.5)`
- All transitions: `0.3s ease`

**Below cards:**
```
[VIEW ALL PRODUCTS — outlined red button, centered]
→ links to /catalogue
```

---

### 5.5 CTA BANNER (`components/landing/CTABanner.tsx`)

**Layout:** Full width, `min-h-[380px]`, dark background with product lifestyle imagery

**Background:** Dark overlay `rgba(5,5,5,0.85)` over background image (padel/pickleball cinematic shot)

**Content (centered):**
```
[Bebas Neue, 64px, white] READY TO STOCK PREMIUM PADDLES?

[Inter, 18px, #9A9A9A] Let's talk manufacturing, private label, and wholesale.

[Red button] GET A QUOTE TODAY   [White outline button] VIEW CATALOGUE
```

---

### 5.6 FOOTER (`components/layout/Footer.tsx`)

Background: `#050505`, top border: `1px solid rgba(255,255,255,0.08)`

**4 columns:**

| Column 1 | Column 2 | Column 3 | Column 4 |
|---|---|---|---|
| Logo + 2-line brand desc | Quick Links | Products | Contact |
| Social icons row | Home, About, Products, Capabilities, Blog, Contact | Pickleball Paddles, Padel Rackets, OEM/ODM | Sialkot, Pakistan / info@trionforgesports.com / +1 (xxx) xxx-xxxx |

**Social icons:** Facebook, Instagram, LinkedIn, YouTube — white, 20px, hover → red
**Bottom bar:** `© 2025 TrionForge Sports LLC. All Rights Reserved. | Privacy Policy | Terms & Conditions`
**Font sizes:** Column headers Inter 11px uppercase tracking-widest white. Links Inter 14px grey → white on hover.

---

## 6. CATALOGUE PAGE

**Route:** `/catalogue` → `app/catalogue/page.tsx`

### 6.1 Catalogue Hero / Header

```
Background: #0b0b0b
Height: 240px
Center-aligned

[Eyebrow — red] "OUR PRODUCTS"
[H1 — Bebas Neue 72px] THE FULL LINEUP
[Subtitle — Inter 16px grey] Premium pickleball paddles and padel rackets.
Factory-direct. Pro-grade. US-ready.
```

Subtle breadcrumb: `Home / Products` in grey top-left

---

### 6.2 Filter Bar (`components/catalogue/FilterBar.tsx`)

**Sticky below navbar** when scrolling catalogue. Position: `sticky top-[64px] z-40`.
Background: `#0b0b0b`, bottom border: `1px solid rgba(255,255,255,0.08)`.

**Filter tabs:**
```
ALL PRODUCTS  |  PICKLEBALL PADDLES  |  PADEL RACKETS  |  ACCESSORIES
```

- Tab style: Inter 13px uppercase tracking-widest
- Inactive: `#9A9A9A`
- Active: `#FFFFFF` with `2px solid #D71920` bottom border
- Hover: `#FFFFFF`
- Transition: smooth

**Right side of filter bar:** Optional sort dropdown — "Sort: Featured ▾" — Inter 13px, grey

---

### 6.3 Product Data (`data/products.ts`)

Create a typed array. Agent: use these placeholder entries and expand as needed.

```typescript
export interface Product {
  id: string;
  name: string;
  category: 'pickleball' | 'padel' | 'accessories';
  tagline: string;
  description: string;
  specs: { label: string; value: string }[];
  badge?: string; // e.g. "NEW", "BESTSELLER", "PRO"
  imagePath: string; // relative to /public/images/products/
  price?: string; // e.g. "From $89" — optional for B2B context
  moq?: string;  // minimum order quantity for wholesale
}

export const products: Product[] = [
  // PICKLEBALL PADDLES
  {
    id: 'tf-alpha-16mm',
    name: 'TF Alpha Carbon 16mm',
    category: 'pickleball',
    tagline: 'Power meets precision.',
    description: 'Our flagship pickleball paddle engineered with T700 carbon fiber face for maximum spin and control. 16mm polypropylene honeycomb core delivers the perfect balance of power and feel.',
    specs: [
      { label: 'Core Thickness', value: '16mm' },
      { label: 'Face Material', value: 'T700 Carbon Fiber' },
      { label: 'Weight', value: '7.8 - 8.2 oz' },
      { label: 'Grip Length', value: '5.25"' },
      { label: 'Grip Circumference', value: '4.25"' },
      { label: 'Surface', value: 'Textured Carbon' },
    ],
    badge: 'BESTSELLER',
    imagePath: '/images/products/tf-alpha-16mm.jpg',
    moq: '50 units',
  },
  {
    id: 'tf-pro-14mm',
    name: 'TF Pro Series 14mm',
    category: 'pickleball',
    tagline: 'Built for the competitive player.',
    description: 'Mid-weight performance paddle with fiberglass face and 14mm polypropylene core. Designed for players who want touch without sacrificing pop.',
    specs: [
      { label: 'Core Thickness', value: '14mm' },
      { label: 'Face Material', value: 'Fiberglass' },
      { label: 'Weight', value: '7.5 - 7.9 oz' },
      { label: 'Grip Length', value: '5"' },
      { label: 'Grip Circumference', value: '4.25"' },
      { label: 'Surface', value: 'Textured Fiberglass' },
    ],
    badge: 'PRO',
    imagePath: '/images/products/tf-pro-14mm.jpg',
    moq: '50 units',
  },
  {
    id: 'tf-strike-13mm',
    name: 'TF Strike 13mm',
    category: 'pickleball',
    tagline: 'Speed. Control. Consistency.',
    description: 'Entry-to-intermediate paddle with carbon face and 13mm core. The go-to option for brand private label programs targeting recreational players.',
    specs: [
      { label: 'Core Thickness', value: '13mm' },
      { label: 'Face Material', value: 'Carbon Composite' },
      { label: 'Weight', value: '7.3 - 7.7 oz' },
      { label: 'Grip Length', value: '5"' },
      { label: 'Grip Circumference', value: '4.25"' },
      { label: 'Surface', value: 'Textured Composite' },
    ],
    imagePath: '/images/products/tf-strike-13mm.jpg',
    moq: '100 units',
  },
  {
    id: 'tf-apex-elongated',
    name: 'TF Apex Elongated',
    category: 'pickleball',
    tagline: 'Reach further. Hit harder.',
    description: 'Elongated shape with extended reach and leverage. T700 carbon face, 16mm core. Favored by singles players and power hitters.',
    specs: [
      { label: 'Core Thickness', value: '16mm' },
      { label: 'Face Material', value: 'T700 Carbon Fiber' },
      { label: 'Weight', value: '8.0 - 8.4 oz' },
      { label: 'Grip Length', value: '5.5"' },
      { label: 'Shape', value: 'Elongated' },
      { label: 'Surface', value: 'Raw Carbon' },
    ],
    badge: 'NEW',
    imagePath: '/images/products/tf-apex-elongated.jpg',
    moq: '50 units',
  },

  // PADEL RACKETS
  {
    id: 'tf-forge-padel-round',
    name: 'TF Forge Round',
    category: 'padel',
    tagline: 'Classic control. Modern build.',
    description: 'Round-shaped padel racket with EVA foam core and carbon fiber frame. Designed for consistent play and superior touch at the net.',
    specs: [
      { label: 'Shape', value: 'Round' },
      { label: 'Frame', value: 'Carbon Fiber' },
      { label: 'Core', value: 'EVA Foam' },
      { label: 'Weight', value: '360-370g' },
      { label: 'Balance', value: 'Low (Control)' },
      { label: 'Level', value: 'All levels' },
    ],
    badge: 'BESTSELLER',
    imagePath: '/images/products/tf-forge-padel-round.jpg',
    moq: '24 units',
  },
  {
    id: 'tf-forge-padel-diamond',
    name: 'TF Forge Diamond',
    category: 'padel',
    tagline: 'Power from the top.',
    description: 'Diamond-shaped padel racket built for aggressive players who want maximum power. Carbon fiber surface with HR3 rubber core.',
    specs: [
      { label: 'Shape', value: 'Diamond' },
      { label: 'Frame', value: 'Carbon Fiber' },
      { label: 'Core', value: 'HR3 Rubber' },
      { label: 'Weight', value: '375-385g' },
      { label: 'Balance', value: 'High (Power)' },
      { label: 'Level', value: 'Advanced' },
    ],
    badge: 'PRO',
    imagePath: '/images/products/tf-forge-padel-diamond.jpg',
    moq: '24 units',
  },
  {
    id: 'tf-forge-padel-teardrop',
    name: 'TF Forge Teardrop',
    category: 'padel',
    tagline: 'The balance seekers choice.',
    description: 'Teardrop shape bridging control and power. Fiberglass face with EVA core. Perfect for intermediate to advanced players.',
    specs: [
      { label: 'Shape', value: 'Teardrop' },
      { label: 'Frame', value: 'Aluminum / Carbon Hybrid' },
      { label: 'Core', value: 'EVA Foam' },
      { label: 'Weight', value: '365-375g' },
      { label: 'Balance', value: 'Medium' },
      { label: 'Level', value: 'Intermediate+' },
    ],
    imagePath: '/images/products/tf-forge-padel-teardrop.jpg',
    moq: '24 units',
  },
];
```

---

### 6.4 Product Grid (`components/catalogue/ProductGrid.tsx`)

**Layout:** CSS Grid — `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`, `gap-6`

**Product Card (`components/catalogue/ProductCard.tsx`):**

```
┌─────────────────────────┐
│                         │
│    [PRODUCT IMAGE]      │  ← 16:10 aspect ratio, object-cover
│    [BADGE top-right]    │  ← "NEW" / "BESTSELLER" / "PRO"
│                         │
├─────────────────────────┤
│ [CATEGORY — red, tiny]  │
│ [Product Name — Bebas]  │
│ [Tagline — Inter grey]  │
│                         │
│ ─── KEY SPECS ─────────│
│ Core: 16mm              │
│ Face: T700 Carbon       │
│ Weight: 7.8-8.2oz       │
│                         │
│ [MOQ label if B2B mode] │
│                         │
│ [VIEW DETAILS] [INQUIRE]│
└─────────────────────────┘
```

**Card specs:**
- Background: `#141414`
- Border: `1px solid rgba(255,255,255,0.08)`
- Border-radius: `0`
- Image area: background `#0b0b0b`
- Category label: Inter 11px `#D71920` uppercase tracking-widest
- Name: Bebas Neue 26px white
- Tagline: Inter 13px `#9A9A9A`
- Specs section: `border-t border-white/8`, padding-top 12px, grid 2-col, Inter 12px
- Spec label: `#9A9A9A` | Spec value: `#FFFFFF`

**Badge:**
- Position: `absolute top-3 right-3`
- Background: `#D71920` (BESTSELLER) / `#101010 border border-white/20` (NEW) / `#D71920` (PRO)
- Font: Inter 10px uppercase tracking-widest bold
- Padding: `4px 10px`
- Border-radius: `0`

**Hover:**
- Image: scale 1.04 (card overflow hidden)
- Border: `rgba(215,25,32,0.4)`
- Card: `translateY(-4px)`, shadow `0 20px 50px rgba(0,0,0,0.6)`
- "INQUIRE" button fades in from opacity 0

**Buttons:**
- VIEW DETAILS: text link, Inter 13px, `#9A9A9A` → `#FFFFFF` on hover, with `→`
- INQUIRE: small red button, sharp, `12px 20px` padding

**Animation:** Cards animate in with stagger on page load — use `motion` with `variants` pattern, delay each card 60ms.

---

### 6.5 Product Modal / Detail Drawer (Optional Enhancement)

When clicking "VIEW DETAILS," open a right-side drawer (mobile: full screen) with:
- Large product image left / Details right
- Full spec table
- Description paragraphs
- INQUIRE NOW button → opens mailto or contact form
- Close with Escape or overlay click

Use `motion/react` `AnimatePresence` for enter/exit animation.

---

## 7. ANIMATION SYSTEM

### Principles
- **Purposeful only** — every animation must serve comprehension or feel premium
- **No flashy loops** — no infinite animations except subtle ambient glow
- **Performance first** — use CSS transforms and opacity only (GPU-composited)
- **Respect reduced motion** — wrap all animations: `@media (prefers-reduced-motion: reduce)`

### AnimatedSection wrapper (`components/ui/AnimatedSection.tsx`)
```typescript
// Reusable scroll-reveal wrapper
// Props: children, delay (ms), direction ('up' | 'left' | 'none')
// Default: fade up 30px, 0.6s ease-out
```

### Standard animation variants
```typescript
// Define these in a lib/animations.ts file for reuse
export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
};
```

### Specific animations
| Element | Animation |
|---|---|
| Hero H1 | Word-by-word stagger reveal, 80ms apart |
| Hero product image | Scale 0.97→1.0 + fade in, 0.8s |
| Section entries | `fadeUp` via `whileInView`, `once: true` |
| Product cards | Stagger grid, 60ms delay per card |
| Navbar transition | CSS transition on background/border, 0.3s |
| Button hover | Scale 1.02 + background darken |
| Card hover | translateY -4px + border glow |
| Filter tab switch | Grid reflow — wrap with `AnimatePresence` + `layout` |

---

## 8. RESPONSIVE BREAKPOINTS

Use Tailwind's standard breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

### Key responsive rules
| Element | Mobile | Desktop |
|---|---|---|
| Hero H1 | 48px | 88px |
| Hero layout | Stack (img above content) | Split 45/55 |
| About section | Stack | 2-col |
| Product grid | 1 col | 3 col |
| Navbar | Hamburger | Full links |
| Filter bar | Horizontal scroll | Full row |
| Section padding Y | 4rem | 6rem |
| Container padding X | 1.25rem | 1.5rem |

---

## 9. SEO & METADATA

In `app/layout.tsx`:
```typescript
export const metadata = {
  title: 'TrionForge Sports — Premium Pickleball Paddles & Padel Rackets',
  description: 'Factory-direct premium pickleball paddles and padel rackets manufactured in Sialkot. OEM, ODM, and private label programs for US brands and retailers.',
  keywords: ['pickleball paddles wholesale', 'padel rackets manufacturer', 'OEM pickleball', 'Sialkot sports manufacturer', 'private label pickleball'],
  openGraph: {
    title: 'TrionForge Sports',
    description: 'Premium factory-direct pickleball and padel equipment for US brands.',
    images: ['/images/og-image.jpg'],
  }
};
```

Each page should have its own `generateMetadata` or page-level metadata exports.

---

## 10. LENIS SMOOTH SCROLLING

```typescript
// app/layout.tsx or a client wrapper
'use client';
import Lenis from 'lenis';
import { useEffect } from 'react';

export function SmoothScrollProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);
  return <>{children}</>;
}
```

Wrap the root layout body content with this provider.

---

## 11. PLACEHOLDER IMAGES

**Agent instruction:** The client (Suhayb) will drop real product images into `public/images/products/`. Until then:

1. Use solid dark backgrounds (`#141414`) with the TrionForge logo mark centered as placeholder
2. OR use gradient placeholders that match the brand: `linear-gradient(135deg, #101010 0%, #1a1a1a 100%)`
3. DO NOT use any third-party placeholder image services
4. Add a comment in code: `// TODO: Replace with real product image — place file at /public/images/products/{filename}.jpg`

For the logo: it is available at `/public/images/logo.png` (agent: copy from the uploaded file the client has provided).

---

## 12. UI COMPONENT: BUTTON (`components/ui/Button.tsx`)

```typescript
// Variants: 'primary' | 'outline' | 'ghost'
// Sizes: 'sm' | 'md' | 'lg'

// primary: red fill, white text, sharp corners
// outline: transparent fill, 1px white border, white text → red on hover
// ghost: no border, text only with arrow

// All uppercase, tracking-widest, Inter font, font-semibold
// No border-radius on any variant — brand uses sharp edges
// Hover transitions: 0.2s ease
```

---

## 13. SECTION LABEL (`components/ui/SectionLabel.tsx`)

```typescript
// Small red eyebrow label above section titles
// e.g. "ABOUT TRIONFORGE" / "OUR PRODUCTS" / "WHY US"
// Style: Inter 11px, #D71920, uppercase, tracking-[0.2em]
// Optional: small red dash before text — "— ABOUT TRIONFORGE"
```

---

## 14. IMPORTANT DESIGN RULES (DO NOT VIOLATE)

1. **Zero border-radius on brand elements** — buttons, cards, image containers. Hard edges throughout.
2. **No glassmorphism** — no `backdrop-filter: blur` on cards or overlays (only navbar is exception)
3. **No gradients on text** — never gradient text clips
4. **No neon glow** — the red glow effects must be subtle (max 20% opacity in shadows)
5. **Typography hierarchy strict** — Bebas Neue for display/titles only. Inter for everything else.
6. **Product images on dark backgrounds only** — always `#0b0b0b` or `#141414` behind product images
7. **Consistent section rhythm** — every section has identical y-padding (`var(--section-padding-y)`)
8. **No stock icon packs that look clipart-like** — use Lucide only
9. **CTA buttons are always red** — no grey or white primary CTAs
10. **No carousel/sliders on desktop** — use grids instead; carousels only acceptable on mobile for products

---

## 15. FILES TO CREATE (CHECKLIST)

Agent: create all of these files. Do not skip any.

- [ ] `package.json` — with all dependencies listed
- [ ] `next.config.ts` — image domains, etc.
- [ ] `app/globals.css` — all CSS tokens + Tailwind import
- [ ] `app/layout.tsx` — root layout with fonts, Lenis, metadata
- [ ] `app/page.tsx` — landing page (imports all landing components)
- [ ] `app/catalogue/page.tsx` — catalogue page
- [ ] `lib/animations.ts` — animation variants
- [ ] `lib/lenis.ts` — Lenis smooth scroll setup
- [ ] `data/products.ts` — product data array with all 7 products above
- [ ] `components/layout/Navbar.tsx`
- [ ] `components/layout/Footer.tsx`
- [ ] `components/ui/Button.tsx`
- [ ] `components/ui/SectionLabel.tsx`
- [ ] `components/ui/AnimatedSection.tsx`
- [ ] `components/landing/Hero.tsx`
- [ ] `components/landing/TrustStrip.tsx`
- [ ] `components/landing/AboutSection.tsx`
- [ ] `components/landing/ProductTeaser.tsx`
- [ ] `components/landing/CTABanner.tsx`
- [ ] `components/catalogue/CatalogueHero.tsx`
- [ ] `components/catalogue/FilterBar.tsx`
- [ ] `components/catalogue/ProductGrid.tsx`
- [ ] `components/catalogue/ProductCard.tsx`
- [ ] `public/images/logo.png` — (agent: copy from provided file)
- [ ] `.gitignore`
- [ ] `README.md`

---

## 16. DEPENDENCIES (`package.json`)

```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "motion": "^12.0.0",
    "lenis": "^1.1.0",
    "lucide-react": "^0.400.0",
    "sharp": "^0.33.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "@types/node": "^22.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "tailwindcss": "^4.0.0",
    "@tailwindcss/postcss": "^4.0.0",
    "postcss": "^8.0.0"
  }
}
```

---

## 17. INITIALIZATION COMMANDS

Agent: run these in sequence to set up the project.

```bash
# 1. Create Next.js project
npx create-next-app@latest trionforge-sports --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*"

# 2. Install additional dependencies
cd trionforge-sports
npm install motion lenis lucide-react sharp

# 3. Verify Tailwind v4 is installed (create-next-app may install v3)
# If v3 installed, upgrade:
npm install tailwindcss@^4.0.0 @tailwindcss/postcss

# 4. Remove default Next.js boilerplate
# Clear app/page.tsx, app/globals.css of defaults
# Remove public/vercel.svg, public/next.svg
```

---

## 18. BRAND STORY COPY (Use These Exact Lines)

Agent: use these copy lines throughout the website. Do not make up other copy.

**Hero headline options (pick one):**
- `FORGED FOR CHAMPIONS. BUILT IN SIALKOT.`
- `WHERE PRECISION MEETS PERFORMANCE.`
- `BUILT BY CRAFTSMEN. TRUSTED BY BRANDS.`

**Taglines:**
- "Factory-direct premium sports equipment for US brands and retailers."
- "From Sialkot's legendary workshops to your customers' hands."
- "OEM, ODM, and private label programs for pickleball and padel."

**About paragraph:**
> TrionForge Sports manufactures premium pickleball paddles and padel rackets in Sialkot — Pakistan's sporting goods capital and the source of 70% of the world's hand-stitched footballs. We combine decades of craftsmanship with modern carbon fiber and composite technology to deliver pro-grade equipment at factory-direct pricing. We work with US brands, retailers, and wholesalers who want quality without compromise.

**Trust strip items:**
1. OEM & ODM Programs
2. Carbon Fiber & Premium Materials
3. US Safety Standards Compliant
4. Direct Factory Pricing

---

## 19. QUALITY CHECKLIST BEFORE DELIVERY

Agent: verify each of these before considering the task complete.

- [ ] No TypeScript errors (`npx tsc --noEmit` passes)
- [ ] No Tailwind class conflicts or redundant styles
- [ ] All placeholder images render (no broken image icons)
- [ ] Navbar transparent on load → dark on scroll — works correctly
- [ ] Filter tabs on catalogue page filter products correctly
- [ ] All motion animations trigger on scroll (not just on page load)
- [ ] Mobile layouts render correctly at 375px viewport
- [ ] No horizontal overflow at any breakpoint
- [ ] Lenis smooth scrolling works without conflicts with motion scroll hooks
- [ ] Logo renders correctly from `/public/images/logo.png`
- [ ] All buttons have hover states
- [ ] `prefers-reduced-motion` respected in AnimatedSection
- [ ] Console is clean (no warnings or errors)

---

## 20. NOTES FOR SUHAYB (MANUAL STEPS)

> These steps are for Suhayb to do manually — the agent cannot do these.

**⚠️ MANUAL STEP 1 — Add your logo:**
Copy `TrionForge_Sports_LLC_logo.png` to `/public/images/logo.png` in your project.

**⚠️ MANUAL STEP 2 — Add product images:**
Once you have real product photography, drop the files into `/public/images/products/` using the exact filenames listed in `data/products.ts`.

**⚠️ MANUAL STEP 3 — Update contact info:**
In `Footer.tsx` and any contact sections, replace placeholder phone/email with your actual business contacts.

**⚠️ MANUAL STEP 4 — Google Fonts:**
Either add the Google Fonts import to your `app/layout.tsx` head, or self-host Bebas Neue and Inter by downloading from Google Fonts and placing in `public/fonts/`.

**⚠️ MANUAL STEP 5 — Deploy to Vercel:**
Push to GitHub, connect repo in Vercel dashboard, deploy. No environment variables needed for this sprint (no backend).

---

*End of Agent Specification v1.0*
*Prepared by Claude for TrionForge Sports LLC*
