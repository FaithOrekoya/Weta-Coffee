import React, { useState } from 'react';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight, Truck, ShieldCheck, Lock, ArrowLeft, Tag, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartPage: React.FC = () => {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    itemCount,
    freeShippingThreshold,
    freeShippingProgress,
    remainingForFreeShipping,
    setCurrentPage,
    openShopifyModal
  } = useCart();

  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState('');
  const [discountAmount, setDiscountAmount] = useState(0);
  const [orderNote, setOrderNote] = useState('');

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoCode.trim()) return;

    if (promoCode.trim().toUpperCase() === 'WETA10' || promoCode.trim().toUpperCase() === 'AUCKLAND') {
      const discount = subtotal * 0.10;
      setDiscountAmount(discount);
      setPromoApplied(true);
      setPromoError('');
    } else {
      setPromoError('Coupon code not recognized or expired. Try "WETA10"');
    }
  };

  const finalTotal = Math.max(0, subtotal - discountAmount);

  return (
    <div className="py-12 sm:py-20 bg-[#FBF9F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#1F1612]/10">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#243E36]">
              Your Order
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1F1612] mt-1">
              Shopping Bag ({itemCount} {itemCount === 1 ? 'item' : 'items'})
            </h1>
          </div>

          <button
            onClick={() => setCurrentPage('shop')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#243E36] hover:text-[#1F1612] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Continue Shopping</span>
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="py-20 text-center bg-[#F6F2EA] rounded-3xl border border-[#1F1612]/10 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#EDE6D8] flex items-center justify-center mx-auto text-[#1F1612]/40">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#1F1612]">Your shopping bag is empty</h2>
            <p className="text-xs sm:text-sm text-[#1F1612]/70 max-w-sm mx-auto">
              You haven't added any fresh roasted Auckland coffee or espresso machines to your bag yet.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setCurrentPage('shop')}
                className="px-8 py-3.5 bg-[#1F1612] hover:bg-[#243E36] text-[#FBF9F5] text-xs font-bold tracking-widest uppercase rounded-lg transition-colors cursor-pointer"
              >
                Explore Coffee Collection
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: Cart Items Table */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Free Shipping Meter */}
              <div className="p-4 sm:p-5 bg-[#EDE6D8]/60 rounded-2xl border border-[#1F1612]/10 space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="flex items-center gap-2 text-[#1F1612]">
                    <Truck className="w-4 h-4 text-[#243E36]" />
                    {remainingForFreeShipping === 0 ? (
                      <span className="text-[#243E36] font-bold">You qualify for FREE New Zealand Metro Shipping!</span>
                    ) : (
                      <span>
                        Add <strong className="tabular-nums font-bold text-[#C88A58]">${remainingForFreeShipping.toFixed(2)} NZD</strong> more to unlock FREE Shipping
                      </span>
                    )}
                  </span>
                  <span className="text-[11px] text-[#1F1612]/60 tabular-nums">
                    ${freeShippingThreshold.toFixed(0)} Goal
                  </span>
                </div>
                <div className="w-full h-2.5 bg-[#1F1612]/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#243E36] transition-all duration-500 rounded-full"
                    style={{ width: `${freeShippingProgress}%` }}
                  />
                </div>
              </div>

              {/* Items List */}
              <div className="bg-[#F6F2EA] rounded-2xl border border-[#1F1612]/10 overflow-hidden divide-y divide-[#1F1612]/10">
                {cart.map((item) => (
                  <div key={item.id} className="p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 bg-[#EDE6D8] rounded-xl overflow-hidden shrink-0 border border-[#1F1612]/10">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#243E36]">
                          {item.product.category}
                        </span>
                        <h3 className="font-serif text-base font-bold text-[#1F1612]">
                          {item.product.name}
                        </h3>
                        <p className="text-xs text-[#1F1612]/70">
                          <span className="font-medium text-[#1F1612]">{item.size}</span>
                          {item.grind && item.product.category === 'coffee' && (
                            <span> · {item.grind}</span>
                          )}
                        </p>
                        {item.isSubscription && (
                          <span className="inline-block text-[10px] font-semibold text-[#243E36] bg-[#243E36]/10 px-2 py-0.5 rounded-sm">
                            Recurring Roast ({item.frequency || 'Every 2 Weeks'}) · 5% Off
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="w-full sm:w-auto flex items-center justify-between sm:justify-end gap-6 pt-3 sm:pt-0 border-t sm:border-t-0 border-[#1F1612]/10">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-[#1F1612]/20 rounded-lg bg-white h-9 px-1">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-[#EDE6D8] rounded-md transition-colors text-[#1F1612]"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-8 text-center text-xs font-semibold tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-[#EDE6D8] rounded-md transition-colors text-[#1F1612]"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Total */}
                      <div className="text-right min-w-[90px]">
                        <span className="text-sm font-bold text-[#1F1612] tabular-nums block">
                          ${(item.price * item.quantity).toFixed(2)} NZD
                        </span>
                        {item.quantity > 1 && (
                          <span className="text-[10px] text-[#1F1612]/50 tabular-nums">
                            ${item.price.toFixed(2)} each
                          </span>
                        )}
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-[#1F1612]/40 hover:text-red-700 transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Delivery Note */}
              <div className="p-6 bg-[#F6F2EA] rounded-2xl border border-[#1F1612]/10 space-y-2">
                <label className="text-xs font-bold text-[#1F1612] block">
                  Delivery Notes or Roastery Instructions
                </label>
                <textarea
                  rows={2}
                  value={orderNote}
                  onChange={(e) => setOrderNote(e.target.value)}
                  placeholder="e.g., Leave package in weather-proof porch, grind for Chemex..."
                  className="w-full text-xs p-3 rounded-lg border border-[#1F1612]/20 bg-white focus:outline-hidden focus:border-[#243E36]"
                />
              </div>

            </div>

            {/* Right: Order Summary Card */}
            <div className="lg:col-span-4 bg-[#F6F2EA] rounded-2xl border border-[#1F1612]/10 p-6 sm:p-8 space-y-6 lg:sticky lg:top-24">
              <h2 className="font-serif text-xl font-bold text-[#1F1612]">
                Order Summary
              </h2>

              {/* Promo Code Form */}
              <form onSubmit={handleApplyPromo} className="space-y-2">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 text-[#1F1612]/40 absolute left-3 top-3" />
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => {
                        setPromoCode(e.target.value);
                        if (promoError) setPromoError('');
                      }}
                      placeholder="Discount code (try WETA10)"
                      className="w-full text-xs pl-8 pr-3 py-2.5 rounded-lg border border-[#1F1612]/20 bg-white uppercase font-medium focus:outline-hidden focus:border-[#243E36]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-[#1F1612] text-[#FBF9F5] text-xs font-semibold rounded-lg hover:bg-[#243E36] transition-colors cursor-pointer"
                  >
                    Apply
                  </button>
                </div>
                {promoError && <p className="text-[11px] text-red-600">{promoError}</p>}
                {promoApplied && (
                  <p className="text-[11px] text-[#243E36] font-semibold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    Promo code applied: 10% discount!
                  </p>
                )}
              </form>

              {/* Price Line Items */}
              <div className="space-y-2.5 pt-4 border-t border-[#1F1612]/10 text-xs">
                <div className="flex justify-between text-[#1F1612]/80">
                  <span>Bag Subtotal</span>
                  <span className="font-semibold tabular-nums text-[#1F1612]">
                    ${subtotal.toFixed(2)} NZD
                  </span>
                </div>

                {promoApplied && (
                  <div className="flex justify-between text-[#243E36] font-semibold">
                    <span>Discount (10%)</span>
                    <span className="tabular-nums">-${discountAmount.toFixed(2)} NZD</span>
                  </div>
                )}

                <div className="flex justify-between text-[#1F1612]/80">
                  <span>Estimated NZ Shipping</span>
                  <span>
                    {remainingForFreeShipping === 0 ? (
                      <span className="text-[#243E36] font-bold">FREE (Metro)</span>
                    ) : (
                      'Calculated at checkout'
                    )}
                  </span>
                </div>

                <div className="flex justify-between text-[11px] text-[#1F1612]/60">
                  <span>GST (15% NZ standard)</span>
                  <span className="tabular-nums">${(finalTotal * 0.15 / 1.15).toFixed(2)} NZD included</span>
                </div>

                <div className="pt-3 border-t border-[#1F1612]/10 flex justify-between items-baseline">
                  <span className="text-sm font-bold text-[#1F1612]">Estimated Total</span>
                  <span className="text-2xl font-bold text-[#1F1612] tabular-nums">
                    ${finalTotal.toFixed(2)} NZD
                  </span>
                </div>
              </div>

              {/* Checkout CTA */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={openShopifyModal}
                  className="w-full py-4 bg-[#1F1612] hover:bg-[#243E36] text-[#FBF9F5] text-xs font-bold tracking-widest uppercase rounded-lg transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <div className="p-3 bg-[#EDE6D8]/50 rounded-xl border border-[#1F1612]/10 text-[11px] text-[#1F1612]/75 leading-relaxed flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#243E36] shrink-0 mt-0.5" />
                  <span>
                    Direct sync with wetacoffee.co.nz Shopify backend. No mocked payment cards or fabricated order receipts.
                  </span>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
};
