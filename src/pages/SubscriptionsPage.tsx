import React, { useState } from 'react';
import { Check, Repeat, Truck, ShieldCheck, ArrowRight, Star, Coffee, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';

export const SubscriptionsPage: React.FC = () => {
  const { addToCart, setCurrentPage } = useCart();

  const coffeeProducts = PRODUCTS.filter((p) => p.category === 'coffee');
  const [selectedProduct, setSelectedProduct] = useState(coffeeProducts[0] || PRODUCTS[0]);
  const [selectedSize, setSelectedSize] = useState('200g Bag');
  const [selectedGrind, setSelectedGrind] = useState('Whole Beans');
  const [frequency, setFrequency] = useState('Every 2 Weeks');

  const basePrice = selectedProduct.sizes?.find((s) => s.label === selectedSize)?.price || selectedProduct.price;
  const subscriberPrice = Number((basePrice * 0.95).toFixed(2));

  const handleStartSubscription = () => {
    addToCart(
      selectedProduct,
      selectedSize,
      selectedGrind,
      1,
      true,
      frequency
    );
  };

  return (
    <div className="py-12 sm:py-20 bg-[#FAF5E4] text-[#351D17]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-24">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7E5A9] border border-[#351D17]/10 text-[11px] font-bold tracking-widest uppercase text-[#351D17]">
            <Repeat className="w-3.5 h-3.5 text-[#351D17]" />
            <span>Never Run Out of Great Coffee</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#351D17]">
            Fresh Roast, On Your Schedule.
          </h1>

          <p className="text-base sm:text-lg text-[#351D17]/75 font-light leading-relaxed">
            Enjoy 5% savings on freshly drum-roasted specialty coffee delivered straight to your door from our Auckland roastery. Fully flexible—pause, skip, or cancel in one click.
          </p>
        </div>

        {/* 3 Step Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#351D17] text-[#F7E5A9] p-8 rounded-3xl border border-[#4B2920] space-y-3">
            <span className="font-serif text-3xl font-bold text-[#F7E5A9] tabular-nums block">01</span>
            <h3 className="font-serif text-xl font-bold text-white">Choose Your Roast</h3>
            <p className="text-xs text-[#F7E5A9]/80 leading-relaxed font-light">
              Select our iconic One Tree Hill House Blend, Swiss Water Rāwhiti Decaf, or single origin roasts.
            </p>
          </div>

          <div className="bg-[#351D17] text-[#F7E5A9] p-8 rounded-3xl border border-[#4B2920] space-y-3">
            <span className="font-serif text-3xl font-bold text-[#F7E5A9] tabular-nums block">02</span>
            <h3 className="font-serif text-xl font-bold text-white">Select Grind & Size</h3>
            <p className="text-xs text-[#F7E5A9]/80 leading-relaxed font-light">
              Order whole beans or precision-ground for espresso, plunger, Aeropress, or filter in 200g, 500g, or 1kg bags.
            </p>
          </div>

          <div className="bg-[#351D17] text-[#F7E5A9] p-8 rounded-3xl border border-[#4B2920] space-y-3">
            <span className="font-serif text-3xl font-bold text-[#F7E5A9] tabular-nums block">03</span>
            <h3 className="font-serif text-xl font-bold text-white">Set Your Frequency</h3>
            <p className="text-xs text-[#F7E5A9]/80 leading-relaxed font-light">
              Receive fresh deliveries every 1, 2, or 4 weeks. Save 5% on every bag with free shipping over $50 NZD.
            </p>
          </div>
        </div>

        {/* Interactive Subscription Configurator Card */}
        <div className="bg-white rounded-3xl border border-[#351D17]/15 p-8 sm:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Product Image & Highlights */}
          <div className="lg:col-span-5 space-y-5">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#FAF5E4] border border-[#351D17]/10">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#351D17] text-[#F7E5A9] text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full">
                Subscriber 5% Off
              </div>
            </div>

            <div className="p-4 bg-[#FAF5E4] rounded-2xl border border-[#351D17]/10 space-y-1">
              <p className="text-xs font-bold text-[#351D17]">Tasting Notes:</p>
              <p className="text-xs text-[#351D17]/80">
                {selectedProduct.tastingNotes ? selectedProduct.tastingNotes.join(' · ') : selectedProduct.tagline}
              </p>
            </div>
          </div>

          {/* Right: Interactive Controls */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#40543A]">
                Step 1: Select Coffee Roast
              </span>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {coffeeProducts.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      setSelectedProduct(p);
                      if (p.sizes && p.sizes[0]) setSelectedSize(p.sizes[0].label);
                    }}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedProduct.id === p.id
                        ? 'border-[#351D17] bg-[#351D17] text-[#F7E5A9] shadow-xs'
                        : 'border-[#351D17]/15 bg-[#FAF5E4] text-[#351D17] hover:bg-[#F7E5A9]/30'
                    }`}
                  >
                    <p className="font-serif font-bold text-xs truncate">{p.name}</p>
                    <p className="text-[10px] opacity-75">{p.badge || 'Specialty Arabica'}</p>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#40543A]">
                Step 2: Bag Size
              </span>
              <div className="grid grid-cols-3 gap-2 mt-2">
                {selectedProduct.sizes?.map((s) => (
                  <button
                    key={s.label}
                    onClick={() => setSelectedSize(s.label)}
                    className={`py-2 px-3 rounded-xl border text-center transition-all cursor-pointer ${
                      selectedSize === s.label
                        ? 'border-[#351D17] bg-[#351D17] text-[#F7E5A9]'
                        : 'border-[#351D17]/15 bg-[#FAF5E4] text-[#351D17] hover:bg-[#F7E5A9]/30'
                    }`}
                  >
                    <p className="font-bold text-xs">{s.weight}</p>
                    <p className="text-[10px] opacity-80 tabular-nums">
                      ${(s.price * 0.95).toFixed(2)} NZD
                    </p>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#40543A]">
                Step 3: Grind Style
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
                {['Whole Beans', 'Espresso / Stovetop', 'Plunger', 'Filter / Chemex'].map((grind) => (
                  <button
                    key={grind}
                    onClick={() => setSelectedGrind(grind)}
                    className={`py-2 px-3 rounded-xl border text-center text-xs transition-all cursor-pointer truncate ${
                      selectedGrind === grind
                        ? 'border-[#351D17] bg-[#351D17] text-[#F7E5A9] font-bold'
                        : 'border-[#351D17]/15 bg-[#FAF5E4] text-[#351D17] hover:bg-[#F7E5A9]/30'
                    }`}
                  >
                    {grind}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#40543A]">
                Step 4: Delivery Frequency
              </span>
              <div className="grid grid-cols-3 gap-2 mt-2">
                {['Every 1 Week', 'Every 2 Weeks', 'Every 4 Weeks'].map((freq) => (
                  <button
                    key={freq}
                    onClick={() => setFrequency(freq)}
                    className={`py-2 px-2 rounded-xl border text-center text-xs font-semibold transition-all cursor-pointer ${
                      frequency === freq
                        ? 'border-[#351D17] bg-[#351D17] text-[#F7E5A9]'
                        : 'border-[#351D17]/15 bg-[#FAF5E4] text-[#351D17] hover:bg-[#F7E5A9]/30'
                    }`}
                  >
                    {freq}
                  </button>
                ))}
              </div>
            </div>

            {/* Price & CTA */}
            <div className="pt-4 border-t border-[#351D17]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-[#351D17] tabular-nums font-serif">
                    ${subscriberPrice.toFixed(2)} NZD
                  </span>
                  <span className="text-xs text-[#351D17]/50 line-through tabular-nums">
                    ${basePrice.toFixed(2)}
                  </span>
                </div>
                <p className="text-[11px] text-[#40543A] font-semibold">
                  Delivered {frequency} · 5% Member Saving Included
                </p>
              </div>

              <button
                onClick={handleStartSubscription}
                className="w-full sm:w-auto px-8 py-4 bg-[#F7E5A9] hover:bg-[#FDF3C7] text-[#25130E] text-xs font-bold tracking-widest uppercase rounded-full transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer font-sans"
              >
                <span>Add Subscription to Bag</span>
                <ArrowRight className="w-4 h-4 text-[#25130E]" />
              </button>
            </div>

          </div>

        </div>

        {/* Subscriber Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-8 border-t border-[#351D17]/15 text-xs">
          <div className="flex items-start gap-3">
            <Check className="w-5 h-5 text-[#40543A] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-[#351D17]">Fresh Weekly Roast</h4>
              <p className="text-[#351D17]/70 mt-0.5">Roasted weekly in Auckland and shipped within 24 hours of roasting.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Check className="w-5 h-5 text-[#40543A] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-[#351D17]">5% Perpetual Savings</h4>
              <p className="text-[#351D17]/70 mt-0.5">Save on every single recurring order with no hidden fees or charges.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Check className="w-5 h-5 text-[#40543A] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-[#351D17]">1-Click Pause & Skip</h4>
              <p className="text-[#351D17]/70 mt-0.5">Going on holiday? Pause, advance, or cancel anytime from your portal.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Check className="w-5 h-5 text-[#40543A] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-[#351D17]">Free Shipping $50+</h4>
              <p className="text-[#351D17]/70 mt-0.5">Free courier delivery nationwide to all metro Auckland and NZ addresses.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
