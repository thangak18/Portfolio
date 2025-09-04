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
- **IP-based tracking** - only counts unique visitors
- **Fixed position** at bottom-right corner
- **Beautiful animations** with pulse and ping effects
- **Real-time updates** via API
- **Persistent storage** in JSON file
- **Backdrop blur** glass effect

## 🚀 How Visitor Counter Works

The visitor counter uses a smart IP-based tracking system:

1. **API Endpoint**: `/api/visitors`
   - `GET`: Returns current visitor count
   - `POST`: Increments count only for new IP addresses

2. **IP Detection**: 
   - Checks `x-forwarded-for` header
   - Falls back to `x-real-ip` and `cf-connecting-ip`
   - Handles proxy and CDN scenarios

3. **Data Storage**:
   - Stores in `data/visitors.json`
   - Tracks both count and IP addresses
   - Prevents duplicate counting from same IP

4. **UI Features**:
   - Fixed position at bottom-right
   - Glass morphism effect
   - Pulse animation on icon
   - Ping animation for attention
   - Hover effects

## 🛠️ Technology Stack

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Context API** - State management
- **File System** - Data persistence

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

## 📊 Visitor Counter API

### GET `/api/visitors`
Returns current visitor count:
```json
{
  "count": 42
}
```

### POST `/api/visitors`
Increments count for new IP addresses:
```json
{
  "count": 43
}
```

## 🎨 Customization

- **Colors**: Modify CSS variables in `globals.css`
- **Animations**: Add new keyframes in `globals.css`
- **Translations**: Update `lib/contexts.tsx`
- **Visitor Counter**: Modify `components/visitor-counter.tsx`

## 📝 License

MIT License - feel free to use this code for your own portfolio!
# Portfolio-Thang
