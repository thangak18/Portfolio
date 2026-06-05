# Thang's Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## ✨ Features

### 🎨 Beautiful Animations
- **Fade-in animations** for smooth page loading
- **Slide-up animations** with staggered delays
- **Float animation** for avatar
- **Pulse-glow effects** for important buttons
- **Hover effects** with scale and shadow
- **Staggered animations** for technology badges

### 🌐 Multi-language Support (EN/VI)
- **Language switcher** in navigation with beautiful animations
- **Translation system** using Context API
- **English and Vietnamese** support for all text
- **Smooth transitions** when switching languages

### 👥 Smart Visitor Counter
- **Profile view tracking** - every page load increments the counter
- **Fixed position** at bottom-right corner
- **Beautiful animations** with pulse and ping effects
- **Real-time updates** via CounterAPI
- **Persistent storage** for static deployments
- **Backdrop blur** glass effect

## 🚀 How Visitor Counter Works

The visitor counter increments once per page load, including visits from the site owner:

1. **Counter Endpoint**:
   - Uses CounterAPI at `https://api.counterapi.dev/v1`
   - The `/up` endpoint increments the profile view count by 1

2. **Static Deployment Support**:
   - Works on GitHub Pages and other static hosts
   - Does not require a Next.js API route

3. **Local UI Cache**:
   - Saves the latest count in `localStorage`
   - Avoids flashing back to zero after a refresh

4. **UI Features**:
   - Fixed position at bottom-right
   - Glass morphism effect
   - Pulse animation on icon
   - Ping animation for attention
   - Hover effects

## 🛠️ Technology Stack

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Context API** - State management
- **CounterAPI** - Static-friendly data persistence

## 📱 Responsive Design

- Mobile-first approach
- Dark/Light mode support
- Smooth transitions
- Optimized performance

## 🎯 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## 🎨 Customization

- **Colors**: Modify CSS variables in `globals.css`
- **Animations**: Add new keyframes in `globals.css`
- **Translations**: Update `lib/contexts.tsx`
- **Visitor Counter**: Modify `lib/contexts.tsx`

## 📝 License

MIT License - feel free to use this code for your own portfolio!
# Portfolio-Thang
