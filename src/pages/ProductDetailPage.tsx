import React, { useState } from 'react';
import { Star, Truck, ShieldCheck, Check, ShoppingBag, ArrowLeft, Heart, RotateCcw, Flame, Coffee, Info } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';

export const ProductDetailPage: React.FC = () => {
  const { selectedProductSlug, setCurrentPage, navigateToProduct, addToCart } = useCart();

  // Find product or fallback to One Tree Hill Blend
  const product = PRODUCTS.find((p) => p.slug === selectedProductSlug) || PRODUCTS[0];

  const [activeImage, setActiveImage] = useState<string>(product.image);
  const [selectedSize, setSelectedSize] = useState<string>(
    product.sizes && product.sizes[0] ? product.sizes[0].label : 'Standard'
  );
  const [selectedGrind, setSelectedGrind] = useState<string>(
    product.grindOptions && product.grindOptions[0] ? product.grindOptions[0] : 'Whole Beans'
  );
  const [isSubscription, setIsSubscription] = useState<boolean>(false);
  const [subscriptionFrequency, setSubscriptionFrequency] = useState<string>('Every 2 Weeks');
  const [quantity, setQuantity] = useState<number>(1);
  const [addedAnimation, setAddedAnimation] = useState<boolean>(false);

  // Sync image when product changes
  React.useEffect(() => {
    setActiveImage(product.image);
    if (product.sizes && product.sizes[0]) {
      setSelectedSize(product.sizes[0].label);
    }
    if (product.grindOptions && product.grindOptions[0]) {
      setSelectedGrind(product.grindOptions[0]);
    }
  }, [product]);

  // Calculate dynamic unit price
  let currentPrice = product.price;
  if (product.sizes) {
    const match = product.sizes.find((s) => s.label === selectedSize);
    if (match) currentPrice = match.price;
  }
  if (isSubscription) {
    currentPrice = Number((currentPrice * 0.95).toFixed(2));
  }

  const handleAddToCart = () => {
    addToCart(
      product,
      selectedSize,
      selectedGrind,
      quantity,
      isSubscription,
      subscriptionFrequency
    );
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 2000);
  };

  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id && (p.category === product.category || p.featured)).slice(0, 3);

  return (
    <div className="py-10 sm:py-16 bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back button */}
        <div className="mb-8">
          <button
            onClick={() => setCurrentPage('shop')}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1F1612]/70 hover:text-[#1F1612] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Products</span>
          </button>
        </div>

        {/* Contiguous PDP Grid per §2.A */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Gallery (Sticky on desktop) */}
          <div className="lg:col-span-7 space-y-4 lg:sticky lg:top-24">
            <div className="relative aspect-4/3 bg-[#EDE6D8] rounded-2xl overflow-hidden shadow-md border border-[#1F1612]/10">
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-300"
              />
              {product.badge && (
                <div className="absolute top-4 left-4 bg-[#1F1612] text-[#FBF9F5] text-xs font-bold tracking-wider uppercase px-3 py-1.5 rounded-xs">
                  {product.badge}
                </div>
              )}
            </div>

            {/* Thumbnail selector */}
            {product.secondaryImage && (
              <div className="flex gap-3">
                <button
                  onClick={() => setActiveImage(product.image)}
                  className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all cursor-pointer bg-[#EDE6D8] ${
                    activeImage === product.image ? 'border-[#243E36] shadow-sm' : 'border-transparent opacity-70'
                  }`}
                >
                  <img src={product.image} alt="Thumbnail 1" className="w-full h-full object-cover" />
                </button>
                <button
                  onClick={() => setActiveImage(product.secondaryImage!)}
                  className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all cursor-pointer bg-[#EDE6D8] ${
                    activeImage === product.secondaryImage ? 'border-[#243E36] shadow-sm' : 'border-transparent opacity-70'
                  }`}
                >
                  <img src={product.secondaryImage} alt="Thumbnail 2" className="w-full h-full object-cover" />
                </button>
              </div>
            )}

            {/* Roasting & Origin Callout */}
            <div className="p-6 bg-[#F6F2EA] rounded-2xl border border-[#1F1612]/10 space-y-3 mt-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#243E36]">
                <Coffee className="w-4 h-4" />
                <span>The Story Behind This Roast</span>
              </div>
              <p className="text-xs sm:text-sm text-[#1F1612]/80 leading-relaxed font-light">
                {product.detailedStory}
              </p>
            </div>
          </div>

          {/* Right: Contiguous Purchase Module */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Header info */}
            <div>
              {/* Clean unboxed metadata per §1.A */}
              <div className="flex items-center gap-2 text-xs text-[#1F1612]/60 mb-2">
                <span className="uppercase tracking-wider font-bold text-[#243E36]">
                  {product.category}
                </span>
                <span aria-hidden="true">·</span>
                {product.rating && (
                  <span className="flex items-center gap-1 font-semibold text-[#1F1612]">
                    <Star className="w-3.5 h-3.5 fill-[#C88A58] text-[#C88A58]" />
                    <span>{product.rating}</span>
                    <span className="text-[#1F1612]/50 font-normal">({product.reviewCount} verified reviews)</span>
                  </span>
                )}
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F1612] leading-tight">
                {product.name}
              </h1>

              <p className="text-sm text-[#1F1612]/70 font-serif italic mt-1">
                {product.tagline}
              </p>

              {/* Price display */}
              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-3xl font-bold text-[#1F1612] tabular-nums">
                  ${currentPrice.toFixed(2)} NZD
                </span>
                {isSubscription && (
                  <span className="text-xs font-bold text-[#243E36] bg-[#243E36]/10 px-2 py-0.5 rounded-sm">
                    Subscribers Save 5%
                  </span>
                )}
                <span className="text-xs text-[#1F1612]/60">GST included</span>
              </div>
            </div>

            {/* Tasting Notes */}
            {product.tastingNotes && product.tastingNotes.length > 0 && (
              <div className="p-4 bg-[#EDE6D8]/60 rounded-xl border border-[#1F1612]/10 space-y-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#1F1612]/60">
                  Tasting Profile:
                </span>
                <p className="text-sm font-semibold text-[#1F1612]">
                  {product.tastingNotes.join(' · ')}
                </p>
                {product.roastLevel && (
                  <p className="text-xs text-[#1F1612]/70 flex items-center gap-1.5 pt-1">
                    <Flame className="w-3.5 h-3.5 text-[#C88A58]" />
                    <span>Roast Profile: <strong>{product.roastLevel}</strong></span>
                  </p>
                )}
              </div>
            )}

            {/* Size Selector */}
            {product.sizes && product.sizes.length > 1 && (
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-[#1F1612]/70">
                  <span>Bag Size / Weight:</span>
                  <span className="text-[#243E36] font-semibold">{selectedSize}</span>
                </div>
                <div className="grid grid-cols-3 gap-2.5">
                  {product.sizes.map((s) => (
                    <button
                      key={s.label}
                      onClick={() => setSelectedSize(s.label)}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        selectedSize === s.label
                          ? 'border-[#243E36] bg-[#243E36] text-white shadow-xs'
                          : 'border-[#1F1612]/15 bg-white text-[#1F1612] hover:bg-[#EDE6D8]'
                      }`}
                    >
                      <span className="block text-xs font-bold">{s.weight}</span>
                      <span className="block text-[11px] opacity-80 mt-0.5 tabular-nums">
                        ${s.price.toFixed(2)} NZD
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Grind Selector */}
            {product.grindOptions && product.grindOptions.length > 1 && (
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-[#1F1612]/70">
                  <span>Grind Preference:</span>
                  <span className="text-[#243E36] font-semibold">{selectedGrind}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {product.grindOptions.map((grind) => (
                    <button
                      key={grind}
                      onClick={() => setSelectedGrind(grind)}
                      className={`py-2 px-3 rounded-lg border text-xs transition-all text-left truncate cursor-pointer ${
                        selectedGrind === grind
                          ? 'border-[#243E36] bg-[#243E36]/10 text-[#243E36] font-bold'
                          : 'border-[#1F1612]/15 bg-white text-[#1F1612]/85 hover:bg-[#EDE6D8]'
                      }`}
                    >
                      {grind}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Subscription vs One-Time Choice */}
            {product.category === 'coffee' && (
              <div className="space-y-2 pt-2">
                <div
                  onClick={() => setIsSubscription(false)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    !isSubscription
                      ? 'border-[#1F1612] bg-white shadow-xs'
                      : 'border-[#1F1612]/15 bg-[#F6F2EA] opacity-80'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      checked={!isSubscription}
                      onChange={() => setIsSubscription(false)}
                      className="text-[#243E36]"
                    />
                    <div>
                      <p className="text-xs font-bold text-[#1F1612]">One-Time Purchase</p>
                      <p className="text-[11px] text-[#1F1612]/60">Standard single order</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#1F1612] tabular-nums">
                    ${(product.sizes?.find(s => s.label === selectedSize)?.price || product.price).toFixed(2)} NZD
                  </span>
                </div>

                <div
                  onClick={() => setIsSubscription(true)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer space-y-2.5 ${
                    isSubscription
                      ? 'border-[#243E36] bg-[#243E36]/5 shadow-xs'
                      : 'border-[#1F1612]/15 bg-[#F6F2EA] opacity-80'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        checked={isSubscription}
                        onChange={() => setIsSubscription(true)}
                        className="text-[#243E36]"
                      />
                      <div>
                        <p className="text-xs font-bold text-[#243E36] flex items-center gap-1.5">
                          <span>Subscribe & Save 5%</span>
                          <span className="text-[10px] bg-[#243E36] text-white px-1.5 py-0.2 rounded-xs">
                            Recommended
                          </span>
                        </p>
                        <p className="text-[11px] text-[#1F1612]/60">Pause or cancel anytime in 1-click</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#243E36] tabular-nums">
                      ${currentPrice.toFixed(2)} NZD
                    </span>
                  </div>

                  {isSubscription && (
                    <div className="pt-2 pl-7 flex items-center gap-2 text-xs">
                      <span className="text-[#1F1612]/70 font-medium">Deliver frequency:</span>
                      <select
                        value={subscriptionFrequency}
                        onChange={(e) => setSubscriptionFrequency(e.target.value)}
                        className="bg-white border border-[#1F1612]/20 rounded-md px-2 py-1 text-xs font-semibold"
                      >
                        <option>Every 1 Week</option>
                        <option>Every 2 Weeks (Most Popular)</option>
                        <option>Every 3 Weeks</option>
                        <option>Every 4 Weeks</option>
                      </select>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Quantity and Primary Add-to-Bag Button */}
            <div className="pt-2 flex items-center gap-3">
              <div className="flex items-center border border-[#1F1612]/20 rounded-lg bg-white h-12 px-2 shrink-0">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-2.5 text-[#1F1612] hover:bg-[#EDE6D8] rounded-md transition-colors font-bold text-sm"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="w-8 text-center text-xs font-bold tabular-nums">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-2.5 text-[#1F1612] hover:bg-[#EDE6D8] rounded-md transition-colors font-bold text-sm"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex-1 h-12 px-6 bg-[#1F1612] hover:bg-[#243E36] text-[#FBF9F5] text-xs font-bold tracking-widest uppercase rounded-lg transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer group"
              >
                {addedAnimation ? (
                  <>
                    <Check className="w-4 h-4 text-[#C88A58]" />
                    <span>Added to Bag!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 transition-transform group-hover:scale-110" />
                    <span>Add to Bag · ${(currentPrice * quantity).toFixed(2)} NZD</span>
                  </>
                )}
              </button>
            </div>

            {/* Trust and Policy markers */}
            <div className="pt-4 border-t border-[#1F1612]/10 space-y-2 text-xs text-[#1F1612]/75">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#243E36] shrink-0" />
                <span>Free NZ Metro Shipping on orders $50+</span>
              </div>
              <div className="flex items-center gap-2">
                <Coffee className="w-4 h-4 text-[#C88A58] shrink-0" />
                <span>Roasted weekly in St Johns, Auckland & stamped with roast date</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#243E36] shrink-0" />
                <span>100% Satisfaction Guarantee — Freshness protected</span>
              </div>
            </div>

            {/* Technical Specifications Table */}
            {product.specifications && (
              <div className="pt-4 border-t border-[#1F1612]/10 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1F1612]">
                  Roast & Technical Specifications
                </h4>
                <div className="divide-y divide-[#1F1612]/8 text-xs">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="py-2 flex justify-between gap-4">
                      <span className="text-[#1F1612]/60 font-medium">{key}</span>
                      <span className="text-[#1F1612] font-semibold text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-24 pt-16 border-t border-[#1F1612]/10">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#243E36]">
                  Pairs Well Together
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1612] mt-1">
                  You Might Also Enjoy
                </h3>
              </div>
              <button
                onClick={() => setCurrentPage('shop')}
                className="text-xs font-bold uppercase tracking-wider text-[#243E36] hover:underline"
              >
                View All →
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => navigateToProduct(rel.slug)}
                  className="group bg-[#F6F2EA] rounded-xl border border-[#1F1612]/10 overflow-hidden cursor-pointer p-4 transition-all hover:shadow-md"
                >
                  <div className="aspect-4/3 rounded-lg overflow-hidden bg-[#EDE6D8] mb-3">
                    <img
                      src={rel.image}
                      alt={rel.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#243E36] mb-1">
                    {rel.category}
                  </p>
                  <h4 className="font-serif text-base font-bold text-[#1F1612] group-hover:text-[#243E36]">
                    {rel.name}
                  </h4>
                  <p className="text-xs text-[#1F1612] font-bold mt-2 tabular-nums">
                    ${rel.price.toFixed(2)} NZD
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
