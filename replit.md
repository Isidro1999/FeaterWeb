# PENH - Premium Landing Page

## Overview
A modern, elegant landing page inspired by Wix Studio's "Penh" template, featuring a sophisticated dark gradient theme (black to bordeaux) for a premium technology consulting brand. Built with React, TypeScript, TailwindCSS, and Wouter.

## Purpose
To showcase a technology consulting company's services, methodology, and value proposition through a visually stunning, professional website with smooth animations and responsive design.

## Current State
**All Phases Complete**: The PENH landing page is fully implemented and functional:
- ✅ Complete landing page with all sections (Hero, WhoWeAre, Industries, Solutions, Knowledge, Clients, Testimonials)
- ✅ Multiple route pages (Platform, Methodology, Value, Cases, Contact)
- ✅ Smooth scroll reveal animations using Intersection Observer
- ✅ Responsive mobile-first design
- ✅ Dark bordeaux gradient theme throughout
- ✅ Newsletter subscription backend with validation
- ✅ Fully integrated frontend and backend
- ✅ All components with proper data-testid attributes for testing
- ✅ Comprehensive error handling and loading states

**Ready for**: User testing and deployment

## Recent Changes (October 22, 2025)
- ✅ Created comprehensive design system with bordeaux gradient colors (#730028)
- ✅ Built all page components (Home, Platform, Methodology, Value, Cases, Contact)
- ✅ Implemented Navbar with mobile menu and blur effect
- ✅ Created Hero section with fade-in animation
- ✅ Built WhoWeAre, Industries, Solutions, Knowledge sections
- ✅ Added Clients showcase and Testimonials cards
- ✅ Implemented Footer with newsletter subscription form
- ✅ Set up routing with Wouter for all pages
- ✅ Added smooth scroll behavior and scroll reveal animations using Intersection Observer
- ✅ Generated professional images for all sections
- ✅ Implemented newsletter subscription backend with email validation
- ✅ Connected newsletter form to backend API with TanStack Query
- ✅ Fixed nested anchor tag issues in Navbar and Footer
- ✅ Added comprehensive error handling and loading states
- ✅ Added data-testid attributes to all interactive elements

## Project Architecture

### Tech Stack
- **Frontend**: React 18 + TypeScript
- **Routing**: Wouter
- **Styling**: TailwindCSS with custom bordeaux gradient theme
- **UI Components**: Shadcn/ui
- **Animations**: CSS transitions + Intersection Observer API
- **Backend**: Express.js (minimal - for newsletter subscription)
- **State Management**: TanStack Query v5

### Color Palette
- Background gradient: `from-black via-bordeaux-dark to-black`
- Bordeaux colors:
  - Default: `#730028`
  - Dark: `#1a0008`
  - Hover: `#ff3d6f`
  - Light: `#a0003a`
- Text: White primary, gray-300 secondary, gray-400 tertiary
- Borders: gray-700 default, bordeaux-hover on hover

### Pages & Routes
- `/` - Home (complete landing page with all sections)
- `/platform` - Platform features and capabilities
- `/methodology` - Our approach and process
- `/value` - Value propositions and metrics
- `/cases` - Case studies and success stories
- `/contact` - Contact form and information

### Key Components
- **Navbar**: Fixed navigation with blur effect, mobile menu, social links
- **Hero**: Full-screen hero with background image, fade-in animation
- **WhoWeAre**: Two-column layout with image and content
- **Industries**: Circular image with industry list
- **Solutions**: 2x2 card grid with hover effects
- **Knowledge**: Article grid with images
- **Clients**: Logo showcase
- **Testimonials**: Three testimonial cards with quotes
- **Footer**: Newsletter form, links, social media

### Animations & Interactions
- Smooth scroll behavior enabled globally
- Scroll reveal animations using `useScrollReveal` hook
- Fade-in and translate-y transitions on scroll
- Hover effects: translate-y, border color changes, scale transforms
- Transition timing: `duration-500 ease-in-out` for smooth effects
- Hero fade-in on initial load

### Design System
- Font: Inter (primary), Work Sans (secondary)
- Border radius: `rounded-md` for all cards and containers
- Spacing: Consistent padding and gaps using Tailwind utilities
- Responsive breakpoints: Mobile-first with md and lg breakpoints
- Component pattern: Shadcn components for Cards, Buttons, Inputs

## User Preferences
- Premium, elegant, professional aesthetic
- Dark theme with bordeaux accents
- Smooth, subtle animations (no external libraries)
- Mobile-first responsive design
- Clean, modern typography
- White borders with bordeaux hover effects

## Development Notes

### Images
All images stored in `attached_assets/generated_images/`:
- `Dark_tech_hero_background_dbdb8358.png` - Hero background
- `Professional_team_collaboration_image_8419cb3a.png` - Who We Are
- `Advanced_manufacturing_technology_5545e766.png` - Industries
- `Business_analytics_dashboard_d0e456ad.png` - Knowledge article 1
- `Business_consultation_presentation_658279a9.png` - Knowledge article 2

### Custom Hooks
- `useScrollReveal` - Intersection Observer for scroll animations

### Styling Approach
- Tailwind utility classes for all styling
- Custom bordeaux colors in `tailwind.config.ts`
- Smooth scroll enabled in `index.html`
- No custom CSS beyond Tailwind configuration

## Next Steps
1. Implement newsletter subscription backend endpoint
2. Add form validation for contact form
3. Connect forms to backend
4. Test all user journeys
5. Final polish and optimization
