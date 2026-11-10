import React, { useState } from 'react';
import { ArrowRight, Star, Eye, ShoppingBag, ChevronDown, Sparkles, Quote, Coffee, Leaf, Award, Flame } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS, TESTIMONIALS } from '../data/products';
import { IMAGES } from '../assets/images';
import { InstagramFeed } from '../components/InstagramFeed';

export const HomePage: React.FC = () => {
  const { setCurrentPage, navigateToProduct, openQuickView, addToCart } = useCart();

  // Hero Video Background State
  const [videoLoaded, setVideoLoaded] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Verified products for Section 3
  const section3Products = [
    PRODUCTS[0], // One Tree Hill Blend
    PRODUCTS[1], // Rāwhiti Decaf
    PRODUCTS[5]  // Artisanal Hot Chocolate
  ];

  // FAQ Items (Section 9)
  const faqs = [
    {
      q: 'How fresh is Wētā Coffee when it arrives?',
      a: 'We roast weekly in small batches on our 15kg Has Garanti drum roaster in St Johns, Auckland. Every bag is stamped with its exact roast date and dispatched via courier within 24–48 hours of roasting for peak freshness.'
    },
    {
      q: 'What are your delivery times and shipping costs across New Zealand?',
      a: 'We offer FREE New Zealand shipping on all orders over $50 NZD to metro areas nationwide. Metro Auckland orders typically arrive within 1–2 business days. Regional and South Island addresses take 2–3 business days via tracked courier.'
    },
    {
      q: 'How do coffee subscriptions work?',
      a: 'Our subscriptions are 100% flexible. You choose your favourite blend (e.g., One Tree Hill or Rāwhiti Decaf), select your grind and delivery frequency (1, 2, or 4 weeks), and automatically receive 5% savings on every bag. You can pause, adjust, or cancel anytime with zero lock-in.'
    },
    {
      q: 'Which grind option should I choose for my brew method?',
      a: 'We grind on commercial precision grinders to order: choose "Whole Beans" if you have a home grinder; "Espresso / Stovetop" for espresso machines or Moka pots; "Plunger" for coarse French Press brewing; or "Filter" for Chemex, V60, and batch brewers.'
    },
    {
      q: 'Is Rāwhiti Decaf completely chemical-free?',
      a: 'Yes, absolutely. Rāwhiti Decaf is processed using the patented Swiss Water method, utilizing only pure mountain water to gently extract 99.9% of caffeine while preserving the rich chocolate and caramel terroir of the Arabica beans. No chemical solvents are ever used.'
    },
    {
      q: 'Do you supply cafes and workplaces with wholesale coffee and machinery?',
      a: 'Yes. We supply cafes, restaurants, boutique hotels, and offices with wholesale freshly roasted coffee, official Italian VBM espresso machinery, Mazzer grinders, and comprehensive staff barista training. Visit our Wholesale page to request a free tasting kit.'
    }
  ];

  return (
    <div className="space-y-0 bg-[#FAF5E4] text-[#351D17]">

      {/* SECTION 1 — HERO (Dark espresso-brown with content on left and vivid image on right) */}
      <section className="relative min-h-[90vh] lg:min-h-[95vh] flex items-center bg-[#25130E] text-[#F7E5A9] overflow-hidden pt-12 pb-20">
        {/* Background cinematic coffee video with high-res poster fallback */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={IMAGES.hero}
            onCanPlay={() => setVideoLoaded(true)}
            className={`w-full h-full object-cover object-[70%_center] lg:object-[78%_center] transition-opacity duration-1000 ${
              videoLoaded ? 'opacity-90' : 'opacity-0'
            }`}
          >
            <source src="https://res.cloudinary.com/byde2j9a/video/upload/v1794339876/Espresso_pouring_into_glass_cups_87f3f000_t0-3_gjfkjv.mp4" type="video/mp4" />
            <source src="/videos/hero_espresso_pouring.mp4" type="video/mp4" />
            <source src="/videos/hero_coffee.mp4" type="video/mp4" />
          </video>

          {/* High-resolution poster fallback image until video starts */}
          <img
            src={IMAGES.hero}
            alt="Artisanal flat white coffee and freshly roasted Arabica beans in Auckland roastery"
            className={`absolute inset-0 w-full h-full object-cover object-[75%_center] lg:object-[82%_center] transition-opacity duration-1000 ${
              videoLoaded ? 'opacity-0 pointer-events-none' : 'opacity-95'
            }`}
          />

          {/* Directional scrim: deep espresso solid on left for crisp readability, fading to transparent on right to showcase video */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#25130E] via-[#25130E]/95 sm:via-[#25130E]/85 lg:via-[#25130E]/75 lg:to-transparent to-[#25130E]/40 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Content moved to the left */}
            <div className="lg:col-span-8 xl:col-span-7 space-y-7">
              
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4B2920]/90 border border-white/10 text-[11px] font-bold tracking-[0.25em] uppercase text-[#F7E5A9] shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Auckland Specialty Coffee Roastery · Est. 2014</span>
                </div>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl xl:text-[68px] font-bold tracking-tight text-white leading-[1.1]">
                <span className="block">Wētā Coffee</span>
                <span className="block text-[#F7E5A9] whitespace-nowrap">Roasted with Passion.</span>
              </h1>

              <p className="text-base sm:text-xl text-[#FAF5E4]/90 font-light leading-relaxed max-w-xl">
                Exceptional specialty coffee, thoughtfully sourced and freshly roasted in Auckland, New Zealand.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => setCurrentPage('shop')}
                  className="px-8 py-4 bg-[#F7E5A9] hover:bg-[#FDF3C7] text-[#25130E] text-xs font-bold tracking-widest uppercase rounded-full transition-all shadow-xl flex items-center justify-center gap-2.5 cursor-pointer group"
                >
                  <span>Explore Our Coffee</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => setCurrentPage('story')}
                  className="px-7 py-4 bg-black/30 backdrop-blur-xs border border-white/30 hover:bg-white/10 text-white text-xs font-semibold tracking-widest uppercase rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Our Story</span>
                </button>
              </div>

              {/* Hero Proof Strip */}
              <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/15 text-xs text-[#FAF5E4]/85">
                <div>
                  <p className="font-serif text-2xl font-bold text-white tabular-nums">100%</p>
                  <p className="text-[11px] text-[#F7E5A9] uppercase tracking-wider font-semibold">Specialty Arabica</p>
                </div>
                <div>
                  <p className="font-serif text-2xl font-bold text-white tabular-nums">15kg</p>
                  <p className="text-[11px] text-[#F7E5A9] uppercase tracking-wider font-semibold">Has Garanti Roaster</p>
                </div>
                <div>
                  <p className="font-serif text-2xl font-bold text-white tabular-nums">Free</p>
                  <p className="text-[11px] text-[#F7E5A9] uppercase tracking-wider font-semibold">NZ Metro Ship $50+</p>
                </div>
                <div>
                  <p className="font-serif text-2xl font-bold text-white tabular-nums">4.9★</p>
                  <p className="text-[11px] text-[#F7E5A9] uppercase tracking-wider font-semibold">Verified Auckland Love</p>
                </div>
              </div>

            </div>

            {/* Right Column: Kept open so the background coffee video shines through unobstructed */}
            <div className="hidden lg:block lg:col-span-4 xl:col-span-5" />

          </div>
        </div>
      </section>

      {/* SECTION 2 — DISCOVER OUR SIGNATURE COFFEE (Caffevia Section 2 Layout) */}
      <section className="py-20 lg:py-28 bg-[#FAF5E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left-hand text block + small category cards */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#40543A]">
                  Artisanal Roasts
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#351D17]">
                  Discover Our Signature Coffee
                </h2>
                <p className="text-sm sm:text-base text-[#351D17]/80 font-light leading-relaxed">
                  Every blend at Wētā Coffee is developed to celebrate distinct origins and provide unforgettable richness. Explore our curated collections roasted weekly in Auckland.
                </p>
              </div>

              {/* 4 Small Category Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div
                  onClick={() => setCurrentPage('shop')}
                  className="p-5 rounded-2xl bg-white border border-[#351D17]/10 hover:border-[#351D17]/40 transition-all cursor-pointer group shadow-xs space-y-2"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#351D17] text-[#F7E5A9] flex items-center justify-center">
                    <Coffee className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#351D17] group-hover:text-[#40543A] transition-colors">
                    Signature Blends
                  </h3>
                  <p className="text-xs text-[#351D17]/70 font-light leading-relaxed">
                    Our iconic One Tree Hill blend crafted for rich crema, citrus zest, and chocolate sweetness.
                  </p>
                </div>

                <div
                  onClick={() => setCurrentPage('shop')}
                  className="p-5 rounded-2xl bg-white border border-[#351D17]/10 hover:border-[#351D17]/40 transition-all cursor-pointer group shadow-xs space-y-2"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#40543A] text-[#F7E5A9] flex items-center justify-center">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#351D17] group-hover:text-[#40543A] transition-colors">
                    Single Origin Coffee
                  </h3>
                  <p className="text-xs text-[#351D17]/70 font-light leading-relaxed">
                    Direct-trade micro-lots highlighting the terroir of Colombia, Ethiopia, and Papua New Guinea.
                  </p>
                </div>

                <div
                  onClick={() => setCurrentPage('shop')}
                  className="p-5 rounded-2xl bg-white border border-[#351D17]/10 hover:border-[#351D17]/40 transition-all cursor-pointer group shadow-xs space-y-2"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#4B2920] text-[#F7E5A9] flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#351D17] group-hover:text-[#40543A] transition-colors">
                    Decaf Coffee
                  </h3>
                  <p className="text-xs text-[#351D17]/70 font-light leading-relaxed">
                    100% chemical-free Swiss Water Rāwhiti Decaf. Full flavor with notes of caramel and cocoa biscuit.
                  </p>
                </div>

                <div
                  onClick={() => setCurrentPage('subscriptions')}
                  className="p-5 rounded-2xl bg-white border border-[#351D17]/10 hover:border-[#351D17]/40 transition-all cursor-pointer group shadow-xs space-y-2"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F7E5A9] text-[#25130E] border border-[#351D17]/15 flex items-center justify-center">
                    <Flame className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#351D17] group-hover:text-[#40543A] transition-colors">
                    Coffee Subscriptions
                  </h3>
                  <p className="text-xs text-[#351D17]/70 font-light leading-relaxed">
                    Save 5% on recurring orders. Flexible dispatch weekly, fortnightly, or monthly.
                  </p>
                </div>

              </div>

              <div>
                <button
                  onClick={() => setCurrentPage('shop')}
                  className="px-8 py-4 bg-[#351D17] hover:bg-[#4B2920] text-[#F7E5A9] text-xs font-bold tracking-widest uppercase rounded-full transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Our Coffee</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Large vertical coffee image composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-3/4 rounded-3xl overflow-hidden shadow-2xl border border-[#351D17]/10 bg-[#FAF5E4]">
                <img
                  src={IMAGES.productOneTreeHill}
                  alt="Wētā One Tree Hill Blend coffee pouch and roasted beans"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                  <div className="text-white space-y-1">
                    <span className="text-[11px] font-bold tracking-wider uppercase text-[#F7E5A9]">
                      Our Signature
                    </span>
                    <p className="font-serif text-2xl font-bold">One Tree Hill Blend</p>
                    <p className="text-xs text-[#FAF5E4]/85">From $14.20 NZD · Whole bean & custom grinds</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3 — EXPLORE OUR POPULAR PRODUCTS (Full-width Dark Background) */}
      <section className="py-20 lg:py-28 bg-[#351D17] text-[#FAF5E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F7E5A9]">
              Small-Batch Auckland Roasts
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Explore Our Coffee Collection
            </h2>
            <p className="text-xs sm:text-sm text-[#FAF5E4]/75 font-light">
              Hand-roasted on our Has Garanti drum roaster in St Johns and dispatched promptly nationwide.
            </p>
          </div>

          {/* Three horizontal product cards in row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {section3Products.map((product) => (
              <div
                key={product.id}
                className="group bg-[#25130E] rounded-3xl border border-[#4B2920] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5"
              >
                <div className="relative aspect-4/3 bg-[#351D17] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {product.badge && (
                    <div className="absolute top-3.5 left-3.5 bg-[#F7E5A9] text-[#25130E] text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full shadow-xs">
                      {product.badge}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                    <button
                      onClick={() => openQuickView(product)}
                      className="px-4 py-2 bg-white text-[#351D17] text-xs font-bold rounded-full shadow-md hover:bg-[#FDF3C7] flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Quick View</span>
                    </button>
                  </div>
                </div>

                <div className="p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#FAF5E4]/60 mb-2">
                      <span className="uppercase tracking-wider font-semibold text-[#F7E5A9]">{product.category}</span>
                      {product.rating && (
                        <span className="flex items-center gap-1 text-white font-medium">
                          <Star className="w-3.5 h-3.5 fill-[#F7E5A9] text-[#F7E5A9]" />
                          <span>{product.rating}</span>
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => navigateToProduct(product.slug)}
                      className="text-left font-serif text-2xl font-bold text-white group-hover:text-[#F7E5A9] transition-colors leading-tight cursor-pointer"
                    >
                      {product.name}
                    </button>

                    <p className="text-xs text-[#FAF5E4]/75 mt-2 line-clamp-2 font-light">
                      {product.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#4B2920] flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-white tabular-nums">
                        ${product.price.toFixed(2)} NZD
                      </span>
                      {product.sizes && product.sizes.length > 1 && (
                        <span className="block text-[10px] text-[#FAF5E4]/50">From 200g</span>
                      )}
                    </div>

                    <button
                      onClick={() => addToCart(product)}
                      className="px-5 py-2.5 bg-[#F7E5A9] hover:bg-[#FDF3C7] text-[#25130E] text-xs font-bold tracking-wider uppercase rounded-full transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Shop Now</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <button
              onClick={() => setCurrentPage('shop')}
              className="px-8 py-4 bg-transparent border border-white/20 hover:bg-white/10 text-white text-xs font-bold tracking-widest uppercase rounded-full transition-colors cursor-pointer"
            >
              View Complete Coffee Collection
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 4 — WHAT OUR CUSTOMERS SAY (Warm Butter Background) */}
      <section className="py-20 lg:py-28 bg-[#FAF5E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#40543A]">
              Testimonials
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#351D17]">
              What Our Customers Say
            </h2>
            <p className="text-xs sm:text-sm text-[#351D17]/70 font-light">
              Verified reviews from regulars who enjoy Wētā Coffee at home and in our Auckland cafes.
            </p>
          </div>

          {/* Testimonial Cards Grid (Mixed cream cards with dark feature card per Caffevia) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Cream card */}
            <div className="bg-white rounded-3xl border border-[#351D17]/10 p-8 flex flex-col justify-between space-y-6 shadow-xs">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="font-serif text-base italic text-[#351D17]/85 leading-relaxed">
                  "{TESTIMONIALS[0].text}"
                </p>
              </div>
              <div className="pt-4 border-t border-[#351D17]/10 flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-[#351D17]">{TESTIMONIALS[0].author}</p>
                  <p className="text-[11px] text-[#351D17]/60">{TESTIMONIALS[0].location}</p>
                </div>
                <span className="text-[10px] uppercase font-bold text-[#40543A] bg-[#40543A]/10 px-2.5 py-1 rounded-full">
                  {TESTIMONIALS[0].badge}
                </span>
              </div>
            </div>

            {/* Card 2: Dark Photographic Feature Card (Caffevia signature contrast) */}
            <div className="relative bg-[#351D17] text-[#F7E5A9] rounded-3xl border border-[#4B2920] p-8 flex flex-col justify-between space-y-6 shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Quote className="w-24 h-24 text-white" />
              </div>
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="font-serif text-base italic text-[#FAF5E4] leading-relaxed">
                  "{TESTIMONIALS[1].text}"
                </p>
              </div>
              <div className="relative z-10 pt-4 border-t border-[#4B2920] flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-white">{TESTIMONIALS[1].author}</p>
                  <p className="text-[11px] text-[#FAF5E4]/70">{TESTIMONIALS[1].location}</p>
                </div>
                <span className="text-[10px] uppercase font-bold text-[#25130E] bg-[#F7E5A9] px-2.5 py-1 rounded-full">
                  {TESTIMONIALS[1].badge}
                </span>
              </div>
            </div>

            {/* Card 3: Cream card */}
            <div className="bg-white rounded-3xl border border-[#351D17]/10 p-8 flex flex-col justify-between space-y-6 shadow-xs">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="font-serif text-base italic text-[#351D17]/85 leading-relaxed">
                  "{TESTIMONIALS[2].text}"
                </p>
              </div>
              <div className="pt-4 border-t border-[#351D17]/10 flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-[#351D17]">{TESTIMONIALS[2].author}</p>
                  <p className="text-[11px] text-[#351D17]/60">{TESTIMONIALS[2].location}</p>
                </div>
                <span className="text-[10px] uppercase font-bold text-[#40543A] bg-[#40543A]/10 px-2.5 py-1 rounded-full">
                  {TESTIMONIALS[2].badge}
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* SECTION 6 — A GLIMPSE OF WĒTĀ (Asymmetrical Editorial Image Collage) */}
      <section className="py-20 lg:py-28 bg-[#FAF5E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#40543A]">
              Visual Gallery
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#351D17]">
              A Glimpse of Wētā
            </h2>
          </div>

          {/* Asymmetrical Masonry Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5">
            
            {/* Tile 1: Tall vertical (4 cols) */}
            <div className="lg:col-span-4 relative aspect-3/4 rounded-3xl overflow-hidden shadow-lg border border-[#351D17]/10 group bg-[#FAF5E4]">
              <img
                src={IMAGES.teamHeadBarista}
                alt="Barista preparing coffee"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Tile 2: Wide roaster (8 cols) */}
            <div className="lg:col-span-8 relative aspect-16/10 rounded-3xl overflow-hidden shadow-lg border border-[#351D17]/10 group bg-[#FAF5E4]">
              <img
                src={IMAGES.roasteryCraftsmanship}
                alt="Turkish Has Garanti roaster in action"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Tile 3: Square One Tree Hill Cafe (4 cols) */}
            <div className="lg:col-span-4 relative aspect-square rounded-3xl overflow-hidden shadow-lg border border-[#351D17]/10 group bg-[#FAF5E4]">
              <img
                src={IMAGES.storeOneTreeHillCafe}
                alt="One Tree Hill Cafe outdoor patio"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Tile 4: Square Cupping Lab (4 cols) */}
            <div className="lg:col-span-4 relative aspect-square rounded-3xl overflow-hidden shadow-lg border border-[#351D17]/10 group bg-[#FAF5E4]">
              <img
                src={IMAGES.blogCoffeeCupping}
                alt="Coffee cupping table"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Tile 5: Square Reusable Bullet Cup (4 cols) */}
            <div className="lg:col-span-4 relative aspect-square rounded-3xl overflow-hidden shadow-lg border border-[#351D17]/10 group bg-[#FAF5E4]">
              <img
                src={IMAGES.productWetaBulletCup}
                alt="Weta Bullet ceramic tumbler"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

          </div>

        </div>
      </section>


      {/* SECTION 9 — EVERYTHING YOU NEED TO KNOW (Warm Butter Background, Two-Column Layout) */}
      <section className="py-20 lg:py-28 bg-[#FAF5E4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Heading, introduction, contact CTA */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#40543A]">
                Frequently Asked Questions
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#351D17] leading-tight">
                Everything You Need to Know
              </h2>
              <p className="text-sm text-[#351D17]/80 font-light leading-relaxed">
                Got questions about our roast dates, grind preferences, subscriptions, or cafe wholesale supply? Here are answers to the most common enquiries.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="px-7 py-3.5 bg-[#351D17] hover:bg-[#4B2920] text-[#F7E5A9] text-xs font-bold tracking-widest uppercase rounded-full transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Have Another Question? Contact Us</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Interactive Accordion */}
            <div className="lg:col-span-7 space-y-3.5">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#351D17]/10 overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-bold text-[#351D17] cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#351D17] shrink-0 transition-transform duration-200 ${
                        openFaq === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#351D17]/80 leading-relaxed font-light border-t border-[#351D17]/8 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>


      {/* SECTION 10 — INSTAGRAM SLIDESHOW (@weta_coffee) */}
      <InstagramFeed />

      {/* SECTION 11 — PROMOTIONAL CTA (Deep Roasted Espresso Gradient) */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#2D1610] via-[#3E2018] to-[#1B0C08] border-t border-[#351D17]/20 text-white relative overflow-hidden">
        {/* Decorative background lighting accents */}
        <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-[#F7E5A9]/10 blur-3xl pointer-events-none" />
        <div className="absolute -left-16 -top-16 w-80 h-80 rounded-full bg-[#C88A58]/15 blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F7E5A9] bg-[#F7E5A9]/10 border border-[#F7E5A9]/20 px-3.5 py-1.5 rounded-full inline-block backdrop-blur-xs">
            Freshly Roasted in Auckland
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Make Every Coffee Cup Special
          </h2>

          <p className="text-base sm:text-lg text-[#FAF5E4]/85 font-light max-w-xl mx-auto leading-relaxed">
            Discover exceptional coffee, thoughtfully roasted and delivered fresh to your door.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setCurrentPage('shop')}
              className="px-9 py-4 bg-[#F7E5A9] hover:bg-[#FDF3C7] text-[#25130E] text-xs font-bold tracking-widest uppercase rounded-full transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer group hover:scale-[1.02]"
            >
              <ShoppingBag className="w-4 h-4 transition-transform group-hover:scale-110" />
              <span>Shop Wētā Coffee</span>
            </button>

            <button
              onClick={() => setCurrentPage('subscriptions')}
              className="px-8 py-4 bg-white/10 hover:bg-white/15 text-white border border-white/20 text-xs font-bold tracking-widest uppercase rounded-full transition-all shadow-xs cursor-pointer backdrop-blur-xs hover:border-white/35"
            >
              Start a Subscription (5% Off)
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 12 is rendered globally by <Footer /> */}



    </div>
  );
};
