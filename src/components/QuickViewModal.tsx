import React, { useState } from 'react';
import { X, Check, Star, ArrowRight, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const QuickViewModal: React.FC = () => {
  const { quickViewProduct, closeQuickView, addToCart, navigateToProduct } = useCart();

  if (!quickViewProduct) return null;

  const product = quickViewProduct;

  const [selectedSize, setSelectedSize] = useState(
    product.sizes && product.sizes[0] ? product.sizes[0].label : 'Standard'
  );
  const [selectedGrind, setSelectedGrind] = useState(
    product.grindOptions && product.grindOptions[0] ? product.grindOptions[0] : 'Whole Beans'
  );
  const [isSubscription, setIsSubscription] = useState(false);
  const [subscriptionFrequency, setSubscriptionFrequency] = useState('Every 2 Weeks');
  const [quantity, setQuantity] = useState(1);

  // Compute price based on size
  let currentPrice = product.price;
  if (product.sizes) {
    const match = product.sizes.find(s => s.label === selectedSize);
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
    closeQuickView();
  };

  const handleGoToFullDetails = () => {
    closeQuickView();
    navigateToProduct(product.slug);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1F1612]/70 backdrop-blur-xs transition-opacity"
        onClick={closeQuickView}
      />

      <div className="min-h-screen px-4 text-center flex items-center justify-center py-8">
        <div className="inline-block w-full max-w-3xl bg-[#FBF9F5] rounded-2xl text-left overflow-hidden shadow-2xl transform transition-all relative border border-[#1F1612]/10 z-10 animate-in fade-in zoom-in-95 duration-200">
          
          {/* Close button */}
          <button
            onClick={closeQuickView}
            className="absolute top-4 right-4 z-20 p-2 text-[#1F1612]/60 hover:text-[#1F1612] bg-[#EDE6D8]/60 hover:bg-[#EDE6D8] rounded-full transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left: Product Image */}
            <div className="relative bg-[#EDE6D8] aspect-4/3 md:aspect-auto flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-[#1F1612]/10">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-xl shadow-xs"
              />
              {product.badge && (
                <div className="absolute top-4 left-4 bg-[#1F1612] text-[#FBF9F5] text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-sm">
                  {product.badge}
                </div>
              )}
            </div>

            {/* Right: Details & Purchase Options */}
            <div className="p-6 sm:p-8 flex flex-col justify-between">
              <div>
                {/* Clean unboxed category & rating metadata per §1.A */}
                <div className="flex items-center gap-2 text-xs text-[#1F1612]/60 mb-1.5">
                  <span className="uppercase tracking-wider font-semibold text-[#243E36]">{product.category}</span>
                  <span aria-hidden="true">·</span>
                  {product.rating && (
                    <span className="flex items-center gap-1 font-medium text-[#1F1612]">
                      <Star className="w-3.5 h-3.5 fill-[#C88A58] text-[#C88A58]" />
                      <span>{product.rating}</span>
                      <span className="text-[#1F1612]/50">({product.reviewCount} reviews)</span>
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#1F1612] leading-tight">
                  {product.name}
                </h3>

                <p className="text-xs text-[#1F1612]/70 mt-1 italic font-serif">
                  {product.tagline}
                </p>

                {/* Price display */}
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-[#1F1612] tabular-nums">
                    ${currentPrice.toFixed(2)} NZD
                  </span>
                  {isSubscription && (
                    <span className="text-xs text-[#243E36] font-semibold">
                      Save 5% with recurring roast
                    </span>
                  )}
                </div>

                {/* Tasting notes as unboxed metadata */}
                {product.tastingNotes && product.tastingNotes.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-[#1F1612]/10 text-xs">
                    <span className="text-[#1F1612]/60 font-medium">Tasting Notes: </span>
                    <span className="text-[#1F1612] font-semibold">
                      {product.tastingNotes.join(' · ')}
                    </span>
                  </div>
                )}

                {/* Size options */}
                {product.sizes && product.sizes.length > 1 && (
                  <div className="mt-4 space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#1F1612]/70">
                      Select Size:
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {product.sizes.map((s) => (
                        <button
                          key={s.label}
                          type="button"
                          onClick={() => setSelectedSize(s.label)}
                          className={`py-2 px-2 text-xs font-semibold rounded-lg border transition-all text-center cursor-pointer ${
                            selectedSize === s.label
                              ? 'border-[#243E36] bg-[#243E36] text-white shadow-xs'
                              : 'border-[#1F1612]/15 bg-white text-[#1F1612] hover:bg-[#EDE6D8]'
                          }`}
                        >
                          <span className="block truncate">{s.weight}</span>
                          <span className="text-[10px] opacity-80 block tabular-nums">${s.price.toFixed(2)}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Grind options */}
                {product.grindOptions && product.grindOptions.length > 1 && (
                  <div className="mt-4 space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#1F1612]/70">
                      Grind Style:
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {product.grindOptions.map((grind) => (
                        <button
                          key={grind}
                          type="button"
                          onClick={() => setSelectedGrind(grind)}
                          className={`py-1.5 px-3 text-xs font-medium rounded-lg border transition-all text-left cursor-pointer truncate ${
                            selectedGrind === grind
                              ? 'border-[#243E36] bg-[#243E36]/10 text-[#243E36] font-semibold'
                              : 'border-[#1F1612]/15 bg-white text-[#1F1612]/80 hover:bg-[#EDE6D8]'
                          }`}
                        >
                          {grind}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Subscription toggle for coffee */}
                {product.category === 'coffee' && (
                  <div className="mt-4 p-3 rounded-xl bg-[#EDE6D8]/50 border border-[#1F1612]/10 space-y-2">
                    <label className="flex items-center gap-2.5 cursor-pointer text-xs font-semibold text-[#1F1612]">
                      <input
                        type="checkbox"
                        checked={isSubscription}
                        onChange={(e) => setIsSubscription(e.target.checked)}
                        className="rounded text-[#243E36] focus:ring-[#243E36]"
                      />
                      <span>Subscribe & Save 5% (Fresh dispatch)</span>
                    </label>
                    {isSubscription && (
                      <div className="pl-6 pt-1 flex items-center gap-2 text-xs">
                        <span className="text-[#1F1612]/60">Deliver:</span>
                        <select
                          value={subscriptionFrequency}
                          onChange={(e) => setSubscriptionFrequency(e.target.value)}
                          className="bg-white border border-[#1F1612]/20 rounded-md px-2 py-1 text-xs"
                        >
                          <option>Every 1 Week</option>
                          <option>Every 2 Weeks</option>
                          <option>Every 4 Weeks</option>
                        </select>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Bottom Actions */}
              <div className="mt-6 pt-4 border-t border-[#1F1612]/10 space-y-3">
                <div className="flex items-center gap-3">
                  {/* Quantity selector */}
                  <div className="flex items-center border border-[#1F1612]/20 rounded-lg bg-white h-11 px-1">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-2.5 text-[#1F1612] hover:bg-[#EDE6D8] rounded-md transition-colors"
                    >
                      -
                    </button>
                    <span className="w-8 text-center text-xs font-semibold tabular-nums">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-2.5 text-[#1F1612] hover:bg-[#EDE6D8] rounded-md transition-colors"
                    >
                      +
                    </button>
                  </div>

                  {/* Add to cart button */}
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 h-11 px-4 bg-[#1F1612] text-[#FBF9F5] text-xs font-semibold tracking-wider uppercase rounded-lg hover:bg-[#243E36] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <Check className="w-4 h-4" />
                    <span>Add to Bag · ${(currentPrice * quantity).toFixed(2)} NZD</span>
                  </button>
                </div>

                {/* View Full Product link */}
                <button
                  onClick={handleGoToFullDetails}
                  className="w-full text-center text-xs font-semibold text-[#243E36] hover:text-[#1F1612] flex items-center justify-center gap-1.5 cursor-pointer py-1"
                >
                  <span>Explore full specifications & origin story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
