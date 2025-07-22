# HiveElla Hotel Website

A modern, responsive hotel website built with the Lit framework, featuring elegant design and comprehensive booking functionality.

![HiveElla Logo](https://via.placeholder.com/200x100/8B7355/FFFFFF?text=HiveElla)

## 🌟 Features

- **Modern Web Components**: Built with Lit 3.x for fast, efficient rendering
- **Responsive Design**: Optimized for all devices and screen sizes
- **Booking System**: Interactive contact forms for room reservations
- **Room Showcase**: Beautiful galleries with detailed room information
- **Amenities Display**: Comprehensive overview of hotel facilities
- **Contact Integration**: Easy-to-use contact forms and information
- **SEO Optimized**: Semantic HTML and proper meta tags
- **Performance Focused**: Optimized loading and minimal bundle size

## 🏨 Hotel Sections

### Homepage Hero

- Stunning hero section with call-to-action buttons
- Professional hotel photography
- Mobile-optimized layout

### Rooms & Suites

- **Deluxe Room** - $150/night
- **Executive Suite** - $250/night
- **Family Room** - $200/night

### Amenities

- Swimming Pool with mountain views
- Full-service Spa & Wellness center
- Fine dining restaurant
- Modern fitness center
- 24/7 concierge service
- Complimentary Wi-Fi

### Contact & Booking

- Interactive booking form
- Hotel contact information
- Location details
- Map integration (placeholder)

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/hiveella.git
   cd hiveella
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🛠️ Technology Stack

- **Framework**: [Lit](https://lit.dev/) - Fast web components
- **Build Tool**: [Vite](https://vitejs.dev/) - Lightning fast build tool
- **Language**: TypeScript for type safety
- **Styling**: CSS-in-JS with Lit's styling system
- **Icons**: Unicode emojis for universal compatibility

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Design System

### Colors

- **Primary**: #8B7355 (Warm Brown)
- **Secondary**: #6B5D4F (Dark Brown)
- **Background**: #F8F8F8 (Light Gray)
- **Text**: #333333 (Dark Gray)

### Typography

- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Weight**: 300, 400, 500, 600, 700

### Spacing

- Base unit: 1rem (16px)
- Section padding: 4rem
- Component gap: 2rem

## 📂 Project Structure

```
hiveella/
├── src/
│   ├── components/          # Web Components
│   │   ├── hotel-app.ts    # Main app component
│   │   ├── hotel-header.ts # Navigation header
│   │   ├── hero-section.ts # Hero banner
│   │   ├── rooms-section.ts # Room listings
│   │   ├── amenities-section.ts # Hotel amenities
│   │   ├── contact-section.ts # Contact & booking
│   │   └── hotel-footer.ts # Site footer
│   └── main.ts             # Entry point
├── index.html              # Main HTML file
├── vite.config.js         # Vite configuration
├── tsconfig.json          # TypeScript config
└── package.json           # Dependencies
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Component Development

Each component follows Lit conventions:

```typescript
import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-component")
export class MyComponent extends LitElement {
  @property() title = "";

  static styles = css`
    :host {
      display: block;
    }
  `;

  render() {
    return html`<h1>${this.title}</h1>`;
  }
}
```

## 🚀 Deployment

### Deploy to Netlify

1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Deploy to Vercel

1. Import your GitHub repository
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**HiveElla Hotel**

- 📍 123 Mountain View Road, Ella, Sri Lanka 90090
- 📞 +94 (0) 57 222 8888
- ✉️ reservations@hiveella.com

---

Built with ❤️ using [Lit](https://lit.dev/) and [Vite](https://vitejs.dev/)
