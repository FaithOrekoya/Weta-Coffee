export interface Product {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  detailedStory: string;
  category: 'coffee' | 'machines' | 'chocolate' | 'merch' | 'vouchers';
  price: number; // in NZD
  salePrice?: number;
  image: string;
  secondaryImage?: string;
  rating?: number;
  reviewCount?: number;
  inStock: boolean;
  featured?: boolean;
  badge?: string;
  tastingNotes?: string[];
  roastLevel?: 'Light' | 'Medium' | 'Medium-Dark' | 'Dark';
  origins?: string[];
  process?: string;
  sizes?: { label: string; weight: string; price: number }[];
  grindOptions?: string[];
  specifications?: Record<string, string>;
}

export interface CartItem {
  id: string; // unique composite key (productId-size-grind-isSubscription)
  product: Product;
  size: string;
  grind: string;
  price: number;
  quantity: number;
  isSubscription?: boolean;
  frequency?: string;
}

export type PageView =
  | 'home'
  | 'shop'
  | 'product-detail'
  | 'subscriptions'
  | 'story'
  | 'sustainability'
  | 'wholesale'
  | 'contact'
  | 'cart';
