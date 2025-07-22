/**
 * Asset import utilities for HiveElla hotel website
 *
 * This file provides helper functions and constants for importing
 * and managing static assets like images and icons.
 */

// Asset base paths
export const ASSET_PATHS = {
  images: "/src/assets/images",
  icons: "/src/assets/icons",
  rooms: "/src/assets/images/rooms",
  amenities: "/src/assets/images/amenities",
  gallery: "/src/assets/images/gallery",
  socialIcons: "/src/assets/icons/social",
  amenityIcons: "/src/assets/icons/amenities",
  uiIcons: "/src/assets/icons/ui",
} as const;

// Helper function to get asset URL
export function getAssetUrl(path: string): string {
  return new URL(path, import.meta.url).href;
}

// Helper function to get image URL
export function getImageUrl(
  category: keyof typeof ASSET_PATHS,
  filename: string
): string {
  return `${ASSET_PATHS[category]}/${filename}`;
}

// Pre-defined placeholder image URLs (using Unsplash)
export const PLACEHOLDER_IMAGES = {
  hero: "src/assets/nineArch.jpeg",
  rooms: {
    deluxe:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
    suite:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    standard:
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80",
  },
  amenities: {
    pool: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    spa: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    restaurant:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    gym: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
  },
} as const;

// Icon components (can be used directly in templates)
export const ICONS = {
  menu: "/src/assets/icons/ui/menu.svg",
  close: "/src/assets/icons/ui/close.svg",
} as const;

// Example usage:
// import { getImageUrl, PLACEHOLDER_IMAGES } from './assets/index.ts';
// const roomImage = getImageUrl('rooms', 'deluxe-room-1.jpg');
// const heroImage = PLACEHOLDER_IMAGES.hero;
