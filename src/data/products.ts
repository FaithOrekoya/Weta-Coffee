import { Product } from '../types';
import { IMAGES } from '../assets/images';

export const PRODUCTS: Product[] = [
  {
    id: 'one-tree-hill-blend',
    name: 'One Tree Hill Blend',
    slug: 'one-tree-hill-blend',
    tagline: 'Signature Auckland House Blend',
    description: 'Our celebrated signature house blend, carefully crafted from premium Arabica beans sourced across three continents. Bold, velvety, and memorable.',
    detailedStory: 'Crafted since 2014 in our original One Tree Hill roastery, this is the blend Auckland fell in love with. It starts with a vibrant, zesty citrus top note, evolving into a sumptuous, full-bodied chocolate and toasted caramel finish that cuts beautifully through milk while remaining extraordinarily smooth as a black espresso.',
    category: 'coffee',
    price: 14.20,
    image: IMAGES.productOneTreeHill,
    secondaryImage: IMAGES.hero,
    rating: 4.9,
    reviewCount: 142,
    inStock: true,
    featured: true,
    badge: 'Signature House Blend',
    tastingNotes: ['Zesty Citrus', 'Dark Chocolate', 'Toasted Caramel', 'Blackberry'],
    roastLevel: 'Medium-Dark',
    origins: ['South America (Colombia)', 'East Africa (Ethiopia)', 'Asia-Pacific (Papua New Guinea)'],
    process: 'Washed & Sun-Dried Natural',
    sizes: [
      { label: '200g Bag', weight: '200g', price: 14.20 },
      { label: '500g Bag', weight: '500g', price: 27.50 },
      { label: '1kg Roaster Bag', weight: '1kg', price: 48.00 }
    ],
    grindOptions: ['Whole Beans', 'Espresso / Stovetop', 'Plunger / French Press', 'Filter / Chemex', 'Aeropress'],
    specifications: {
      'Roast Date': 'Freshly roasted weekly in St Johns, Auckland',
      'Bean Variety': '100% Specialty Arabica',
      'Altitude': '1,400 – 1,950 MASL',
      'Body': 'Heavy & Syrupy',
      'Acidity': 'Bright & Balanced'
    }
  },
  {
    id: 'rawhiti-decaf',
    name: 'Rāwhiti Decaf',
    slug: 'rawhiti-decaf',
    tagline: '100% Chemical-Free Swiss Water Decaf',
    description: 'Decaf without compromise. Gently extracted using pure Swiss Water to preserve all the nuanced richness of fine Arabica beans.',
    detailedStory: 'Named in honour of our founding café street in One Tree Hill, Rāwhiti Decaf proves you never have to sacrifice depth for serenity. We use only 100% chemical-free Swiss Water processing, allowing the natural terroir of Brazilian, Ethiopian, and Peruvian origins to shine with comforting notes of molten cocoa and sweet vanilla biscuit.',
    category: 'coffee',
    price: 14.20,
    image: IMAGES.productRawhitiDecaf,
    secondaryImage: IMAGES.hero,
    rating: 4.8,
    reviewCount: 88,
    inStock: true,
    featured: true,
    badge: 'Swiss Water Decaf',
    tastingNotes: ['Dutch Cocoa', 'Salted Caramel', 'Vanilla Biscuit', 'Nutty Warmth'],
    roastLevel: 'Medium',
    origins: ['Brazil Cerrado', 'Peru Chanchamayo', 'Ethiopia Sidamo'],
    process: 'Swiss Water Process (100% Chemical Free)',
    sizes: [
      { label: '200g Bag', weight: '200g', price: 14.20 },
      { label: '500g Bag', weight: '500g', price: 27.50 },
      { label: '1kg Roaster Bag', weight: '1kg', price: 48.00 }
    ],
    grindOptions: ['Whole Beans', 'Espresso / Stovetop', 'Plunger / French Press', 'Filter / Chemex', 'Aeropress'],
    specifications: {
      'Decaffeination': 'Swiss Water Method (99.9% caffeine free)',
      'Bean Variety': '100% Specialty Arabica',
      'Roast Style': 'Gentle drum roast',
      'Best Suited For': 'Evening espresso, flat whites, late night brew'
    }
  },
  {
    id: 'vbm-domobar-super-digitale',
    name: 'VBM Domobar Super Digitale',
    slug: 'vbm-domobar-super-digitale',
    tagline: 'Precision Dual Boiler Italian Masterpiece',
    description: 'The pinnacle of home espresso machinery. Features a 3.5" touch screen, programmable pressure profiling, and twin insulated boilers.',
    detailedStory: 'Manufactured in Milan, Italy by Vibiemme (VBM), the creators of the legendary E61 group head. The Domobar Super Digitale gives serious home baristas total tactile and digital mastery over temperature and pressure profiling. Includes dual boilers for simultaneous shot pulling and commercial-grade steam pressure, plus an extra set of custom magnetic side panels and 1kg of fresh Wētā One Tree Hill beans.',
    category: 'machines',
    price: 5150.00,
    image: IMAGES.vbmDomobarEspresso,
    rating: 5.0,
    reviewCount: 19,
    inStock: true,
    featured: true,
    badge: 'Italian Handcrafted',
    tastingNotes: ['Dual Boiler', '3.5" Touch Display', 'Pressure Profiling', 'E61 Group Head'],
    sizes: [
      { label: 'Standard Configuration + 1kg Beans + Custom Panels', weight: '33kg', price: 5150.00 }
    ],
    grindOptions: ['Complete Machine Unit with Accessory Kit'],
    specifications: {
      'Boiler Type': 'Dual Boiler (Coffee 0.5L + Steam 2.0L)',
      'Group Head': 'Commercial E61 Thermosyphon',
      'Pump': 'Commercial Rotary Vane Pump with variable speed',
      'Display': '3.5" Capacitive Colour Touchscreen',
      'Origin': 'Handcrafted in Milan, Italy',
      'Bonus': 'Free in-store setup or Auckland delivery + 1kg Wētā Coffee'
    }
  },
  {
    id: 'vbm-domobar-super-classic',
    name: 'VBM Domobar Super Classic',
    slug: 'vbm-domobar-super-classic',
    tagline: 'Authentic Heat Exchange Italian Espresso Machine',
    description: 'Classic E61 mechanical levers with heat exchange technology and a robust rotary pump for uncompromising home or boutique office espresso.',
    detailedStory: 'The Domobar Super Classic combines timeless Italian industrial beauty with heavy-duty commercial internals. With its massive copper boiler and thermo-compensated E61 group, it delivers rock-solid temperature stability and microfoam milk texturing at cafe speed.',
    category: 'machines',
    price: 4590.00,
    image: IMAGES.vbmDomobarEspresso,
    rating: 4.9,
    reviewCount: 14,
    inStock: true,
    featured: false,
    badge: 'Heat Exchange',
    tastingNotes: ['E61 Lever Action', 'Rotary Pump', 'Commercial Steam', 'Milan Engineering'],
    sizes: [
      { label: 'Classic Stainless Steel + 1kg Beans', weight: '28kg', price: 4590.00 }
    ],
    grindOptions: ['Complete Machine Unit'],
    specifications: {
      'Boiler': '2.7L Copper Heat Exchange (HX)',
      'Group Head': 'Manual E61 Leva',
      'Pump': 'Rotary Vane Commercial',
      'Origin': 'Milan, Italy'
    }
  },
  {
    id: 'vbm-domobar-junior-classic',
    name: 'VBM Domobar Junior Classic',
    slug: 'vbm-domobar-junior-classic',
    tagline: 'Compact Footprint, Genuine E61 Performance',
    description: 'A genuine commercial espresso experience engineered into a compact benchtop form factor for kitchen connoisseurs.',
    detailedStory: 'The Junior Classic gives you genuine Vibiemme heritage with a minimal kitchen footprint. Features an authentic E61 brass group head, stainless steel mirror chassis, and powerful dry steam for silky lattes and flat whites.',
    category: 'machines',
    price: 2950.00,
    image: IMAGES.vbmDomobarEspresso,
    rating: 4.8,
    reviewCount: 22,
    inStock: true,
    featured: false,
    badge: 'Compact E61',
    tastingNotes: ['Compact Footprint', 'E61 Brass Group', 'Vibration Pump', 'Stainless Steel'],
    sizes: [
      { label: 'Junior Classic Mirror Finish', weight: '20kg', price: 2950.00 }
    ],
    grindOptions: ['Complete Machine Unit'],
    specifications: {
      'Boiler': '1.3L Copper Boiler',
      'Group Head': 'E61 58mm Brass',
      'Water Tank': '2.0L Removable Reservoir'
    }
  },
  {
    id: 'weta-award-winning-hot-chocolate',
    name: 'Artisanal Drinking Hot Chocolate',
    slug: 'weta-award-winning-hot-chocolate',
    tagline: 'Award-Winning Single-Origin Ivory Coast Cocoa',
    description: 'Rich, bittersweet dark drinking chocolate crafted from ethically sourced West African cocoa and subtle organic vanilla.',
    detailedStory: 'Our award-winning hot chocolate is served in both our Auckland cafes and throughout our Pacific partner venues. Blended with single-origin Ivory Coast cocoa powder, raw cane sugar, and a hint of vanilla, it melts into velvety, comforting decadence with milk or as our famous house mocha.',
    category: 'chocolate',
    price: 18.50,
    image: IMAGES.productHotChocolate,
    rating: 4.9,
    reviewCount: 64,
    inStock: true,
    featured: true,
    badge: 'Award Winning',
    tastingNotes: ['Bittersweet Cocoa', 'Bourbon Vanilla', 'Velvety Molten Texture', 'Dark Molasses'],
    sizes: [
      { label: '350g Tin', weight: '350g', price: 18.50 },
      { label: '1kg Foodservice Bag', weight: '1kg', price: 38.00 }
    ],
    grindOptions: ['Fine Drinking Powder'],
    specifications: {
      'Cocoa Content': '40% Premium West African Cocoa',
      'Dietary': 'Gluten-Free, Dairy-Free recipe (mixes with any dairy or oat/almond milk)',
      'Storage': 'Store airtight in cool, dry pantry'
    }
  },
  {
    id: 'weta-bullet-ceramic-cup',
    name: 'Wētā Bullet Reusable Tumbler',
    slug: 'weta-bullet-ceramic-cup',
    tagline: '12oz Ceramic-Lined Thermal Travel Cup',
    description: 'Designed to eliminate single-use waste without altering the delicate flavours of your espresso. Double-wall insulated with genuine ceramic interior.',
    detailedStory: 'Standard travel mugs taint the flavour of specialty coffee with metallic or plastic aftertastes. The Wētā Bullet features a pure ceramic inner coating that preserves the bright citrus notes and smooth chocolate finish of your brew exactly as the roaster intended. Keeps hot drinks piping for 4+ hours.',
    category: 'merch',
    price: 38.00,
    image: IMAGES.productWetaBulletCup,
    rating: 4.9,
    reviewCount: 51,
    inStock: true,
    featured: true,
    badge: 'Eco Reusable',
    tastingNotes: ['Ceramic Core', 'Vacuum Insulated', 'Spill-Resistant Lid', 'Barista Standard 12oz'],
    sizes: [
      { label: '12oz / 355ml Matte Espresso', weight: '12oz', price: 38.00 }
    ],
    grindOptions: ['Barista Standard 12oz Tumbler'],
    specifications: {
      'Materials': 'Food-Grade Stainless Steel & German Ceramic Lining',
      'Lid': 'BPA-Free Splash-Resistant Slider',
      'Thermal Performance': '4 hrs hot / 8 hrs cold',
      'Café Perk': 'Get 50c off every takeaway coffee at Wētā One Tree Hill & St Johns'
    }
  },
  {
    id: 'pezzetti-stovetop-espresso-maker',
    name: 'Pezzetti Italexpress 6-Cup Stovetop',
    slug: 'pezzetti-stovetop-espresso-maker',
    tagline: 'Authentic Italian Moka Pot Brewing',
    description: 'Crafted in Italy with cast aluminium for rich, syrupy stovetop espresso. The quintessential morning ritual.',
    detailedStory: 'The Pezzetti Italexpress is the timeless Italian stove brewer. Designed for optimal thermal conduction and thick crema, paired perfectly with our One Tree Hill blend ground for stovetop.',
    category: 'merch',
    price: 59.00,
    image: IMAGES.productWetaBulletCup,
    rating: 4.7,
    reviewCount: 33,
    inStock: true,
    featured: false,
    badge: 'Made in Italy',
    sizes: [
      { label: '6-Cup Model (300ml)', weight: '6-Cup', price: 59.00 }
    ],
    grindOptions: ['Brewing Equipment'],
    specifications: {
      'Material': 'Food-safe certified cast aluminium with heat-proof handle',
      'Origin': 'Bergamo, Italy',
      'Heat Source': 'Gas, Electric, Ceramic hobs'
    }
  },
  {
    id: 'weta-coffee-gift-voucher',
    name: 'Wētā Roastery Gift Voucher',
    slug: 'weta-coffee-gift-voucher',
    tagline: 'The Perfect Present for Coffee Lovers',
    description: 'Digital gift cards redeemable online for fresh roasted beans, hot chocolate, brewing equipment, or at our Auckland cafes.',
    detailedStory: 'Delivered instantly by email with personalized redemption instructions. Never expires. Can be applied across any product in our webstore or scanned in-person at our One Tree Hill and St Johns espresso bars.',
    category: 'vouchers',
    price: 25.00,
    image: IMAGES.hero,
    rating: 5.0,
    reviewCount: 42,
    inStock: true,
    featured: false,
    badge: 'Instant Delivery',
    sizes: [
      { label: '$25 NZD Voucher', weight: 'Digital', price: 25.00 },
      { label: '$50 NZD Voucher', weight: 'Digital', price: 50.00 },
      { label: '$100 NZD Voucher', weight: 'Digital', price: 100.00 }
    ],
    grindOptions: ['Digital Delivery via Email'],
    specifications: {
      'Format': 'Instant digital gift code sent via email',
      'Validity': 'No expiry date',
      'Redeemable': 'Online & in Auckland cafes'
    }
  }
];


export const TESTIMONIALS = [
  {
    id: 'rev-1',
    author: 'Hamish Henderson',
    location: 'One Tree Hill, Auckland',
    rating: 5,
    text: 'Wētā has been our morning pilgrimage for nearly a decade. The One Tree Hill blend has that rare combination of a clean citrus top note and a deep, decadent chocolate body that cuts through milk like nothing else. Miles and the team are legends.',
    badge: 'Verified Regular',
    date: 'February 2026'
  },
  {
    id: 'rev-2',
    author: 'Rebecca Thorne',
    location: 'Remuera, Auckland',
    rating: 5,
    text: 'Finding authentic Swiss Water decaf that actually tastes like a rich specialty coffee was nearly impossible until I tried Rāwhiti Decaf. The vanilla biscuit and caramel notes are unbelievable. Plus their Morrin Road roastery team are the friendliest baristas in town.',
    badge: 'Verified Customer',
    date: 'January 2026'
  },
  {
    id: 'rev-3',
    author: 'David & Aroha Mitchell',
    location: 'St Johns, Auckland',
    rating: 5,
    text: 'We bought our VBM Domobar Super through Wētā and had Miles personally walk us through dialling in our shots. Outstanding service, ethical roasting, and consistently the freshest beans delivered to our door.',
    badge: 'Equipment & Subscription Member',
    date: 'November 2025'
  }
];
