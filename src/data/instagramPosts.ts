// Reusable Content Management Architecture for Wētā Coffee Instagram Feed
// Official Instagram Account: https://www.instagram.com/weta_coffee/
//
// HOW TO UPDATE OR REPLACE IMAGES:
// 1. To replace any post with client-supplied high-res originals, place the files in
//    `/public/images/instagram/` (e.g. `post-1.jpg`, `post-2.jpg`, etc.)
// 2. Update the `image` path below, or update the specific Instagram post URL in `originalUrl`.
// 3. To connect the live Instagram Graph API in the future, populate access tokens in environment.

import { IMAGES } from '../assets/images';

export type InstagramCategory = 'all' | 'products' | 'roastery' | 'cafe' | 'craft' | 'community' | 'sustainability';

export interface InstagramPostItem {
  id: string;
  image: string;
  originalUrl: string;
  caption: string;
  publishedAt: string;
  formattedDate: string;
  category: InstagramCategory;
  categoryLabel: string;
  contentType: 'image' | 'carousel' | 'video';
  likes: number;
  comments: number;
  alt: string;
  isPlaceholder?: boolean;
}

export const INSTAGRAM_ACCOUNT = {
  handle: '@weta_coffee',
  name: 'Wētā Coffee Auckland',
  url: 'https://www.instagram.com/weta_coffee/',
  bio: 'Specialty Coffee Roasters · Auckland, New Zealand. Roasting weekly in St Johns · One Tree Hill Espresso Bar at 1a Rāwhiti Rd.',
  verified: false,
};

export const INSTAGRAM_POSTS: InstagramPostItem[] = [
  {
    id: 'weta-ig-01',
    image: IMAGES.productOneTreeHill,
    originalUrl: 'https://www.instagram.com/weta_coffee/',
    caption: 'Fresh roast Tuesday! The iconic One Tree Hill blend cooling down at our St Johns roastery. Tasting notes of rich dark chocolate, vibrant citrus zest, and toasted caramel. Hand-roasted weekly in Auckland and courier-dispatched nationwide within 24 hours. ☕️✨ #wetacoffee #onetreehill #aucklandcoffee #specialtycoffee #smallbatchroaster',
    publishedAt: '2026-11-04',
    formattedDate: '4 Nov 2026',
    category: 'products',
    categoryLabel: 'Signature Blends',
    contentType: 'image',
    likes: 384,
    comments: 31,
    alt: 'Wētā Coffee One Tree Hill Blend pouch with roasted coffee beans and dark chocolate on stone'
  },
  {
    id: 'weta-ig-02',
    image: IMAGES.storeOneTreeHillCafe,
    originalUrl: 'https://www.instagram.com/weta_coffee/',
    caption: 'Saturday morning rituals in One Tree Hill 🌿 Dogs welcome on the deck at 1a Rāwhiti Road, sunny outdoor tables open, and the grinders are humming. See you for a flat white and warm cheese scone before your park walk! 🐾☀️ #wetacoffee #aucklandcafes #onetreehill #weekendritual #dogfriendlyauckland',
    publishedAt: '2026-11-02',
    formattedDate: '2 Nov 2026',
    category: 'cafe',
    categoryLabel: 'One Tree Hill Cafe',
    contentType: 'image',
    likes: 492,
    comments: 44,
    alt: 'Sunny exterior of Wētā Coffee cottage cafe at 1a Rāwhiti Road One Tree Hill with outdoor seating'
  },
  {
    id: 'weta-ig-03',
    image: IMAGES.teamHeadBarista,
    originalUrl: 'https://www.instagram.com/weta_coffee/',
    caption: 'Sarah dialling in the morning espresso shots and pouring silky flat whites all morning long. What’s your go-to brew today—oat flat white, classic double shot, or batch brew? Pop in and say hi! 🤎 #baristacraft #wetacoffee #aucklandbarista #flatwhite #coffeeculture',
    publishedAt: '2026-10-30',
    formattedDate: '30 Oct 2026',
    category: 'craft',
    categoryLabel: 'Barista Craft',
    contentType: 'image',
    likes: 561,
    comments: 48,
    alt: 'Head barista Sarah in embroidered Wētā Coffee apron crafting espresso at the commercial machine'
  },
  {
    id: 'weta-ig-04',
    image: IMAGES.roasteryCraftsmanship,
    originalUrl: 'https://www.instagram.com/weta_coffee/',
    caption: 'Mid-week drum roasting at 66B Morrin Road. That intoxicating aroma of 100% specialty Arabica batch-roasted on our Turkish Has Garanti roaster. Hand-crafted profiles and stamped roast dates on every single bag shipping nationwide today 📦✨ #nzcoffee #smallbatchroaster #stjohns #hasgaranti #coffeecraft',
    publishedAt: '2026-10-27',
    formattedDate: '27 Oct 2026',
    category: 'roastery',
    categoryLabel: 'St Johns Roastery',
    contentType: 'image',
    likes: 328,
    comments: 23,
    alt: 'Master roaster inspecting freshly roasted coffee beans in the circular cooling tray at Wētā Roastery'
  },
  {
    id: 'weta-ig-05',
    image: IMAGES.productRawhitiDecaf,
    originalUrl: 'https://www.instagram.com/weta_coffee/',
    caption: 'Decaf, but make it specialty. Our Rāwhiti Decaf uses 100% chemical-free Swiss Water processing—preserving pure cocoa, salted caramel, and vanilla notes with zero chemical solvents. For peaceful afternoons and evening brews without compromise 🌙✨ #swisswaterdecaf #chemicalfree #decafcoffee #wetacoffee',
    publishedAt: '2026-10-24',
    formattedDate: '24 Oct 2026',
    category: 'products',
    categoryLabel: 'Swiss Water Decaf',
    contentType: 'image',
    likes: 305,
    comments: 26,
    alt: 'Wētā Coffee Rāwhiti Decaf pouch with caramel squares and vanilla beans on linen'
  },
  {
    id: 'weta-ig-06',
    image: IMAGES.teamFounderMiles,
    originalUrl: 'https://www.instagram.com/weta_coffee/',
    caption: 'Over a decade of roasting Auckland’s favourite beans! Co-founder Miles inspecting today’s Colombian micro-lot cooling tray. Honest coffee, sourced thoughtfully, roasted with heart since 2014 🙌 #wetacoffee #founderstories #aucklandbusiness #specialtycoffee #passionforcoffee',
    publishedAt: '2026-10-20',
    formattedDate: '20 Oct 2026',
    category: 'craft',
    categoryLabel: 'Founder Stories',
    contentType: 'image',
    likes: 479,
    comments: 38,
    alt: 'Co-founder Miles in Wētā Coffee leather apron smiling by the drum roaster with fresh coffee beans'
  },
  {
    id: 'weta-ig-07',
    image: IMAGES.productWetaBulletCup,
    originalUrl: 'https://www.instagram.com/weta_coffee/',
    caption: 'Coffee tastes even better when you take care of the planet. Bring your reusable Wētā Bullet cup in-store for your morning refill and save 50c on every cup. Double-wall insulated ceramic interior keeps every sip tasting pure ♻️🌱 #ecoware #sustainablecoffee #wetacoffee #bulletcup #reuse',
    publishedAt: '2026-10-16',
    formattedDate: '16 Oct 2026',
    category: 'sustainability',
    categoryLabel: 'Sustainability',
    contentType: 'image',
    likes: 412,
    comments: 29,
    alt: 'Wētā Coffee laser-engraved reusable bullet travel cup sitting on cafe wooden table'
  },
  {
    id: 'weta-ig-08',
    image: IMAGES.productHotChocolate,
    originalUrl: 'https://www.instagram.com/weta_coffee/',
    caption: 'Crafted for chocolate lovers. Our Artisanal Luxury Dark Hot Chocolate is made with single-origin cocoa and blended right here in Auckland for velvety decadence on chilly mornings 🍫🥄 A spoonful of comfort in every tin. Available in-store and online #hotchocolate #wetacoffee #singleorigincocoa #artisanal',
    publishedAt: '2026-10-12',
    formattedDate: '12 Oct 2026',
    category: 'products',
    categoryLabel: 'Artisanal Pantry',
    contentType: 'image',
    likes: 367,
    comments: 21,
    alt: 'Wētā Coffee luxury dark hot chocolate tin with cocoa scoop and cinnamon sticks'
  },
  {
    id: 'weta-ig-09',
    image: IMAGES.blogCoffeeCupping,
    originalUrl: 'https://www.instagram.com/weta_coffee/',
    caption: 'Weekly origin cupping in the lab! Tasting fresh micro-lot arrivals from Colombia Huila and Ethiopia Guji. Evaluating fragrance, acidity, body, and sweetness before selecting next season’s offerings 🔬🥄 #coffeecupping #singleorigin #wetacoffee #specialtycoffeeroaster',
    publishedAt: '2026-10-08',
    formattedDate: '8 Oct 2026',
    category: 'roastery',
    categoryLabel: 'Cupping Lab',
    contentType: 'image',
    likes: 345,
    comments: 18,
    alt: 'Artisanal cupping table with single origin bowls and evaluation cards at Wētā Coffee'
  },
  {
    id: 'weta-ig-10',
    image: IMAGES.teamFounderSandra,
    originalUrl: 'https://www.instagram.com/weta_coffee/',
    caption: 'Founder Sandra catching up with regulars at the bar counter. From our humble beginnings in One Tree Hill to sharing our roasts across New Zealand and the Pacific, community has always been at the center of Wētā Coffee ☕️💛 #wetacoffee #communityfirst #aucklandroasters',
    publishedAt: '2026-10-03',
    formattedDate: '3 Oct 2026',
    category: 'community',
    categoryLabel: 'Community',
    contentType: 'image',
    likes: 512,
    comments: 42,
    alt: 'Co-founder Sandra smiling with flat white cup at Wētā Coffee cafe counter'
  },
  {
    id: 'weta-ig-11',
    image: IMAGES.vbmDomobarEspresso,
    originalUrl: 'https://www.instagram.com/weta_coffee/',
    caption: 'Bring cafe-quality Italian espresso home. As official New Zealand distributors of Vibiemme (VBM) Italian machines, we pair the iconic Domobar Super with our One Tree Hill blend for true barista-grade crema in your kitchen 🇮🇹☕️ #vbmdomobar #espressomachine #wetacoffee',
    publishedAt: '2026-09-28',
    formattedDate: '28 Sep 2026',
    category: 'products',
    categoryLabel: 'Italian Machinery',
    contentType: 'image',
    likes: 423,
    comments: 34,
    alt: 'Italian VBM Domobar Super polished chrome espresso machine with espresso shot on slate counter'
  },
  {
    id: 'weta-ig-12',
    image: IMAGES.hero,
    originalUrl: 'https://www.instagram.com/weta_coffee/',
    caption: 'Good morning Auckland! Fresh beans roasted, machines warmed up, and the espresso grinder ready for your first cup of the day. Stop by 1a Rāwhiti Road or 66B Morrin Road for your morning fix ☕️ #wetacoffee #morningritual #aucklandcoffee #specialtycoffee',
    publishedAt: '2026-09-22',
    formattedDate: '22 Sep 2026',
    category: 'cafe',
    categoryLabel: 'Morning Ritual',
    contentType: 'image',
    likes: 488,
    comments: 36,
    alt: 'Artisanal flat white coffee with latte art and fresh coffee beans on Wētā Coffee roastery bar'
  }
];

export default INSTAGRAM_POSTS;
