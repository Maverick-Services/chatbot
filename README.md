# AVA AI Landing Page

A modern, responsive landing page for AVA AI - Your AI Chatbot Assistant, built with Next.js and React.

## Features

- 🎨 Modern, responsive design with glass morphism effects
- 🚀 Smooth animations and transitions
- 📱 Mobile-first responsive layout
- 💬 Interactive contact modal
- 🎥 Video background with overlay effects
- 💰 Pricing section with multiple tiers
- ✨ Intersection Observer animations

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Custom CSS with Tailwind CSS utilities
- **Language**: TypeScript
- **Icons**: Font Awesome
- **Fonts**: Poppins (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd landing-page
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
landing-page/
├── src/
│   └── app/
│       ├── components/
│       │   └── ContactModal.tsx    # Contact form modal component
│       ├── globals.css             # Global styles and animations
│       ├── layout.tsx              # Root layout with metadata
│       └── page.tsx                # Main landing page component
├── public/
│   └── Ai video.mp4               # Hero section video
└── package.json
```

## Key Components

### Main Page (`page.tsx`)
- Hero section with animated text and video
- Features section with glass effect cards
- Pricing section with multiple tiers
- Intersection Observer for scroll animations

### Contact Modal (`ContactModal.tsx`)
- Form with validation
- Controlled inputs with React state
- Responsive design
- Form submission handling

### Styling (`globals.css`)
- Custom CSS variables for consistent theming
- Glass morphism effects
- Smooth animations and transitions
- Responsive design utilities

## Customization

### Colors
Update the CSS variables in `globals.css`:
```css
:root {
  --primary: #21e6c1;
  --primary-dark: #278ea5;
  --accent: #ffd700;
  --navy: #1a2238;
  --navy-dark: #0f3460;
  --glass-bg: rgba(255,255,255,0.10);
  --glass-border: rgba(33,230,193,0.15);
  --card-shadow: 0 8px 32px 0 rgba(26,34,56,0.25);
}
```

### Content
- Update text content in `page.tsx`
- Modify pricing tiers and features
- Change video source in the hero section

### Form Handling
Update the `handleSubmit` function in `ContactModal.tsx` to integrate with your backend API.

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
Build the project:
```bash
npm run build
```

The built files will be in the `.next` directory.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary to MatchBest.

---

Built with ❤️ by MatchBest
