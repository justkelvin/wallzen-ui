<div align="center">
  <h1>✨ Wallzen Frontend</h1>
  <p>A modern, responsive wallpaper discovery platform built with Next.js and Tailwind CSS</p>

  <p>
    <a href="#features">Features</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#getting-started">Getting Started</a> •
    <a href="#folder-structure">Structure</a> •
    <a href="#components">Components</a>
  </p>
</div>

---

## ⭐ Features

- 🎨 Modern, responsive design
- 🖼️ Dynamic image grid layout
- 🔍 Real-time search functionality
- 💻 Image preview and zoom
- 📱 Mobile-first approach
- ❤️ Favorites management
- 🌙 Dark mode support
- 🚀 Fast image loading

## 🛠️ Tech Stack

- **Framework**: Next.js 13 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **HTTP Client**: Axios
- **State Management**: React Hooks
- **Typography**: Inter font
- **Build Tool**: Vite
- **Package Manager**: npm

## 🚀 Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/justkelvin/wallzen-ui.git
cd wallzen-ui
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

4. **Start the development server**
```bash
npm run dev
```

Visit `http://localhost:3000` to see the application.

## 📁 Folder Structure

```
src/
├── app/           # App router pages
├── components/    # React components
│   ├── ui/       # Reusable UI components
│   └── layout/   # Layout components
├── lib/          # Utilities and helpers
│   ├── api/      # API client
│   └── types/    # TypeScript types
├── styles/       # Global styles
└── public/       # Static assets
```

## 🧩 Components

### Core Components
- `WallpaperGrid` - Masonry grid layout for wallpapers
- `SearchBar` - Search interface with suggestions
- `ImageModal` - Full-screen image preview
- `Pagination` - Page navigation component

### UI Components
- `Button` - Customizable button component
- `Input` - Form input elements
- `Loading` - Loading states and spinners
- `Icons` - Custom icon components

## 🎨 Styling

We use Tailwind CSS for styling with a custom configuration:

```typescript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a1a',
        secondary: '#2a2a2a',
        accent: '#3a3a3a',
      },
    },
  },
  plugins: [],
}
```

## 🔧 Environment Variables

```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 📱 Responsive Design

- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

## 🏃 Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

## 🌟 Best Practices

- ✅ Component-based architecture
- ✅ TypeScript for type safety
- ✅ Responsive images with next/image
- ✅ SEO optimization
- ✅ Accessibility standards
- ✅ Performance optimization

## 📝 License

MIT © [Kelvin]

---

<div align="center">
  <p>Built with 💖 and Next.js</p>
  <p>
    <a href="https://github.com/justkelvin">GitHub</a> •
    <a href="https://X.com/alias_notfound">X</a>
  </p>
</div>