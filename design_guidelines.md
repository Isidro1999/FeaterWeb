# Design Guidelines for Bordeaux Gradient Landing Page

## Design Approach
**Reference-Based Approach**: Inspired by Wix Studio's "Penh" template - premium technology branding with dark, sophisticated aesthetic featuring black-to-bordeaux gradient treatment.

## Core Design Elements

### A. Color Palette

**Background Gradients:**
- Primary: `from-black via-[#1a0008] to-[#730028]`
- Bordeaux accent: `#730028`
- Bordeaux hover: `#ff3d6f`

**Text Colors:**
- Primary: `text-white`
- Secondary: `text-gray-400`

**Borders & Accents:**
- Default border: `border-gray-700`
- Hover border: `border-[#ff3d6f]`

### B. Typography
- Font Family: Inter or Work Sans (sans-serif, clean, elegant)
- Italic text for testimonials
- White text on dark backgrounds throughout

### C. Layout System
- Mobile-first responsive design
- Two-column layouts for key sections
- Tailwind spacing: Consistent use of standard Tailwind spacing units

### D. Component Library

**Navigation:**
- Fixed navbar with blur background (`backdrop-blur`)
- Centered logo
- Horizontal navigation links: About, Solutions, Insights, Contact
- Social media icons aligned right
- Transparent background with blur effect

**Hero Section:**
- Full-width background (video or image placeholder)
- Dark overlay for contrast
- Centered content: title, subtitle, white-bordered CTA button
- Fade-in animation on load

**Content Sections:**

1. **Who We Are**: Two-column layout (image left, text + button right)

2. **Industries**: Text content left, circular image right, list items including Financial, Tech, Manufacturing

3. **Explore Our Solutions**: Centered title/subtitle, 2×2 card grid with white borders, smooth hover effects

4. **Stay Ahead With Expert Knowledge**: 2-column grid with image + text combinations

5. **Our Clients**: Horizontally centered logo display, lighter background than other sections

6. **Testimonials**: Three bordered cards with italic testimonial text

**Footer:**
- Black background
- Large centered logo
- Navigation links
- Social media icons
- Newsletter subscription form (input + button)

### E. Animations & Interactions

**Transitions:**
- Use `transition-all duration-500 ease-in-out` for smooth effects
- Scroll reveal with simple fade-in on section entry
- Smooth scrolling behavior enabled

**Hover States:**
- Cards: `hover:-translate-y-1 hover:border-[#ff3d6f]`
- Text links: `hover:text-[#ff3d6f]`

**No External Animation Libraries**: Use only Tailwind and React's built-in capabilities

## Images

**Hero Section:**
- Large background image or video (placeholder supported)
- Dark overlay for text legibility
- Full viewport height recommended

**Who We Are:**
- Feature image on left side of two-column layout

**Industries:**
- Circular image on right side

**Expert Knowledge:**
- Images paired with text content in grid layout

**Client Logos:**
- Horizontal arrangement of client brand logos

## Technical Requirements
- Routing: Wouter for pages (/, /platform, /methodology, /value, /cases, /contact)
- Organized folder structure: /components and /pages
- Intersection Observer API for scroll reveals (no external libraries)