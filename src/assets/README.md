# HiveElla Assets

This folder contains all the static assets for the HiveElla hotel website.

## Structure

```
src/assets/
├── images/
│   ├── rooms/          # Room photos and room-specific images
│   ├── amenities/      # Hotel amenities and facilities photos
│   ├── gallery/        # General hotel gallery images
│   ├── hero.jpg        # Main hero section background
│   ├── logo.png        # Hotel logo
│   └── favicon.ico     # Website favicon
├── icons/
│   ├── social/         # Social media icons
│   ├── amenities/      # Amenity icons (spa, pool, etc.)
│   └── ui/             # UI icons (menu, close, etc.)
└── README.md
```

## Image Guidelines

### Image Formats

- **Photos**: Use `.jpg` or `.webp` for photos
- **Graphics/Logos**: Use `.png` for graphics with transparency
- **Icons**: Use `.svg` for scalable icons

### Image Sizes

- **Hero Images**: 1920x1080px or larger
- **Room Images**: 800x600px minimum
- **Thumbnails**: 400x300px
- **Icons**: 24x24px, 48x48px (SVG preferred)

### Naming Convention

- Use kebab-case: `deluxe-room-1.jpg`
- Be descriptive: `swimming-pool-sunset.jpg`
- Include size if needed: `logo-large.png`

## Usage in Components

```typescript
// Import images
import heroImage from '../assets/images/hero.jpg';
import logo from '../assets/images/logo.png';

// Use in CSS
background-image: url('/src/assets/images/hero.jpg');

// Use in templates
<img src="/src/assets/images/logo.png" alt="HiveElla Logo" />
```

## Optimization Tips

1. **Compress images** before adding them
2. **Use appropriate formats** (.webp for modern browsers)
3. **Provide alt text** for accessibility
4. **Consider lazy loading** for large images
5. **Use responsive images** with different sizes
