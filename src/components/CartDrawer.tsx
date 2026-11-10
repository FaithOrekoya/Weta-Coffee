import React, { useState } from 'react';
import { X, Trash2, ArrowRight, ShieldCheck, Truck, Lock, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    subtotal,
    itemCount,
    freeShippingThreshold,
    freeShippingProgress,
    remainingForFreeShipping,
    setCurrentPage,
    openShopifyModal
  } = useCart();

  const [orderNote, setOrderNote] = useState('');
  const [showNoteField, setShowNoteField] = useState(false);

  if (!isCartOpen) return null;

  const handleCheckoutClick = () => {
    openShopifyModal();
  };

  const handleViewFullCart = () => {
    closeCart();
    setCurrentPage('cart');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true" aria-label="Shopping bag">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1F1612]/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FBF9F5] shadow-2xl flex flex-col border-l border-[#1F1612]/10 animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <div className="px-6 py-5 border-b border-[#1F1612]/10 flex items-center justify-between bg-[#F6F2EA]">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#243E36]" />
              <h2 className="font-serif text-lg font-bold text-[#1F1612]">
                Your Bag ({itemCount})
              </h2>
            </div>
            <button
              onClick={closeCart}
              className="p-1.5 text-[#1F1612]/70 hover:text-[#1F1612] hover:bg-[#EDE6D8] rounded-full transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Meter */}
          <div className="px-6 py-3.5 bg-[#EDE6D8]/60 border-b border-[#1F1612]/8">
            <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
              <span className="flex items-center gap-1.5 text-[#1F1612]">
                <Truck className="w-3.5 h-3.5 text-[#243E36]" />
                {remainingForFreeShipping === 0 ? (
                  <span className="text-[#243E36] font-bold">You've unlocked FREE NZ Metro Shipping!</span>
                ) : (
                  <span>
                    Add <strong className="tabular-nums font-bold text-[#C88A58]">${remainingForFreeShipping.toFixed(2)} NZD</strong> for Free Shipping
                  </span>
                )}
              </span>
              <span className="text-[11px] text-[#1F1612]/60 tabular-nums">
                ${freeShippingThreshold.toFixed(0)} Goal
              </span>
            </div>
            {/* Progress Bar Track */}
            <div className="w-full h-2 bg-[#1F1612]/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#243E36] transition-all duration-500 rounded-full"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-[#1F1612]/8">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#EDE6D8] flex items-center justify-center mb-4 text-[#1F1612]/40">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#1F1612]">Your bag is empty</h3>
                <p className="text-xs text-[#1F1612]/70 max-w-xs mt-1.5">
                  Explore our freshly roasted Auckland coffees, Swiss Water decaf, and Italian espresso equipment.
                </p>
                <button
                  onClick={() => {
                    closeCart();
                    setCurrentPage('shop');
                  }}
                  className="mt-6 px-5 py-2.5 bg-[#1F1612] text-[#FBF9F5] text-xs font-semibold tracking-wider uppercase rounded-lg hover:bg-[#243E36] transition-colors cursor-pointer"
                >
                  Explore Coffee Collection
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="py-4 flex gap-4 items-start">
                  {/* Thumbnail */}
                  <div className="w-20 h-20 bg-[#EDE6D8] rounded-lg overflow-hidden shrink-0 border border-[#1F1612]/10">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="text-sm font-bold text-[#1F1612] truncate">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-[#1F1612]/40 hover:text-red-700 transition-colors p-1"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Metadata */}
                    <div className="text-[11px] text-[#1F1612]/70 mt-0.5 space-y-0.5">
                      <p>
                        <span className="font-medium text-[#1F1612]/90">{item.size}</span>
                        {item.grind && item.product.category === 'coffee' && (
                          <span> · {item.grind}</span>
                        )}
                      </p>
                      {item.isSubscription && (
                        <p className="text-[#243E36] font-semibold text-[10px]">
                          Subscription ({item.frequency || 'Every 2 Weeks'}) · 5% Off
                        </p>
                      )}
                    </div>

                    {/* Quantity Stepper & Price */}
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#1F1612]/20 rounded-md bg-white">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-[#EDE6D8] text-[#1F1612] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-xs font-semibold text-[#1F1612] tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-[#EDE6D8] text-[#1F1612] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="text-xs font-bold text-[#1F1612] tabular-nums">
                          ${(item.price * item.quantity).toFixed(2)} NZD
                        </span>
                        {item.quantity > 1 && (
                          <span className="block text-[10px] text-[#1F1612]/50 tabular-nums">
                            ${item.price.toFixed(2)} each
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Area */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-[#1F1612]/10 bg-[#F6F2EA] space-y-4">
              {/* Order note toggle */}
              <div>
                {!showNoteField ? (
                  <button
                    onClick={() => setShowNoteField(true)}
                    className="text-[11px] text-[#1F1612]/70 hover:text-[#1F1612] underline cursor-pointer"
                  >
                    + Add delivery note or grind preference instruction
                  </button>
                ) : (
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-[#1F1612]">Special Instructions</label>
                    <textarea
                      value={orderNote}
                      onChange={(e) => setOrderNote(e.target.value)}
                      placeholder="e.g., Leave package in sheltered porch..."
                      rows={2}
                      className="w-full text-xs p-2 rounded-md border border-[#1F1612]/20 bg-white focus:outline-hidden focus:border-[#243E36]"
                    />
                  </div>
                )}
              </div>

              {/* Subtotal & Taxes */}
              <div className="space-y-1.5 pt-2 border-t border-[#1F1612]/10 text-xs">
                <div className="flex justify-between items-center text-[#1F1612]/80">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#1F1612] tabular-nums">
                    ${subtotal.toFixed(2)} NZD
                  </span>
                </div>
                <div className="flex justify-between items-center text-[#1F1612]/70 text-[11px]">
                  <span>Estimated Shipping</span>
                  <span>
                    {remainingForFreeShipping === 0 ? (
                      <span className="text-[#243E36] font-semibold">FREE (Metro)</span>
                    ) : (
                      'Calculated at checkout'
                    )}
                  </span>
                </div>
                <div className="flex justify-between items-center text-[#1F1612]/60 text-[10px]">
                  <span>GST (15% NZ standard)</span>
                  <span className="tabular-nums">${(subtotal * 0.15 / 1.15).toFixed(2)} NZD included</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <button
                  onClick={handleCheckoutClick}
                  className="w-full py-3.5 px-4 bg-[#1F1612] text-[#FBF9F5] text-xs font-semibold tracking-wider uppercase rounded-lg hover:bg-[#243E36] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md group"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Checkout — ${subtotal.toFixed(2)} NZD</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={handleViewFullCart}
                  className="w-full py-2.5 px-4 bg-transparent border border-[#1F1612]/20 text-[#1F1612] text-xs font-semibold tracking-wider uppercase rounded-lg hover:bg-[#EDE6D8] transition-colors cursor-pointer text-center"
                >
                  View Full Shopping Bag
                </button>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center justify-center gap-4 text-[10px] text-[#1F1612]/60 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#243E36]" />
                  Secure Shopify Bridge
                </span>
                <span>·</span>
                <span>Fresh Weekly Roast Guarantee</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
