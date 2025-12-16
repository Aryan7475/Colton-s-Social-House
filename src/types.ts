
export type Page = 'home' | 'menu' | 'reservations' | 'join' | 'about' | 'gift-cards' | 'beta-tasting' | 'ai-therapist';

export interface MenuItem {
  name: string;
  price: string;
  description?: string;
  tags?: ('spicy' | 'vegetarian' | 'new')[];
}

export interface MenuCategory {
  title: string;
  note?: string;
  items: MenuItem[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface Review {
  author: string;
  rating: number;
  text: string;
  relativeTime: string;
  source: string; // e.g., 'Local Guide'
}

export interface GalleryImage {
  url: string;
  alt: string;
  category: 'food' | 'interior' | 'patio' | 'drink';
}
