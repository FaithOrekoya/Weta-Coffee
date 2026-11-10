import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, closeSearch, navigateToProduct } = useCart();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const filteredProducts = query.trim() === ''
    ? []
    : PRODUCTS.filter((product) => {
        const text = `${product.name} ${product.tagline} ${product.description} ${product.tastingNotes?.join(' ') || ''} ${product.category}`.toLowerCase();
        return text.includes(query.toLowerCase());
      });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1F1612]/75 backdrop-blur-xs transition-opacity"
        onClick={closeSearch}
      />

      <div className="min-h-screen px-4 pt-16 sm:pt-24 text-center">
        <div className="inline-block w-full max-w-2xl bg-[#FBF9F5] rounded-2xl text-left shadow-2xl overflow-hidden border border-[#1F1612]/15 animate-in fade-in slide-in-from-top-4 duration-200">
          
          {/* Search Input Bar */}
          <div className="p-4 sm:p-5 border-b border-[#1F1612]/10 flex items-center gap-3 bg-[#F6F2EA]">
            <Search className="w-5 h-5 text-[#243E36] shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search coffee beans, tasting notes (citrus, chocolate), VBM machines..."
              className="w-full bg-transparent text-sm sm:text-base font-medium text-[#1F1612] placeholder-[#1F1612]/40 focus:outline-hidden"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="text-xs text-[#1F1612]/50 hover:text-[#1F1612] p-1"
              >
                Clear
              </button>
            )}
            <button
              onClick={closeSearch}
              className="p-1.5 text-[#1F1612]/60 hover:text-[#1F1612] rounded-full hover:bg-[#EDE6D8]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search Content */}
          <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6">
            {query.trim() === '' ? (
              <div>
                <p className="text-xs uppercase font-bold tracking-wider text-[#1F1612]/60 mb-3">
                  Popular Searches & Signature Roasts
                </p>
                <div className="flex flex-wrap gap-2">
                  {['One Tree Hill Blend', 'Rāwhiti Decaf', 'VBM Domobar', 'Hot Chocolate', 'Whole Beans', 'Swiss Water'].map((term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="text-xs px-3 py-1.5 bg-[#EDE6D8]/80 hover:bg-[#EDE6D8] text-[#1F1612] rounded-lg transition-colors cursor-pointer"
                    >
                      {term}
                    </button>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-[#1F1612]/10">
                  <p className="text-xs uppercase font-bold tracking-wider text-[#1F1612]/60 mb-3">
                    Featured Products
                  </p>
                  <div className="space-y-2">
                    {PRODUCTS.filter(p => p.featured).slice(0, 3).map((product) => (
                      <button
                        key={product.id}
                        onClick={() => {
                          closeSearch();
                          navigateToProduct(product.slug);
                        }}
                        className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-[#EDE6D8]/60 transition-colors text-left group cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-12 h-12 rounded-lg object-cover bg-[#EDE6D8]"
                          />
                          <div>
                            <p className="text-xs font-bold text-[#1F1612] group-hover:text-[#243E36]">
                              {product.name}
                            </p>
                            <p className="text-[11px] text-[#1F1612]/60">
                              {product.tastingNotes ? product.tastingNotes.slice(0, 2).join(' · ') : product.tagline}
                            </p>
                          </div>
                        </div>
                        <span className="text-xs font-semibold text-[#1F1612] tabular-nums">
                          ${product.price.toFixed(2)} NZD
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="py-8 text-center">
                <p className="text-sm font-semibold text-[#1F1612]">No results found for "{query}"</p>
                <p className="text-xs text-[#1F1612]/60 mt-1">
                  Try searching for "blend", "decaf", "espresso", or "chocolate".
                </p>
              </div>
            ) : (
              <div>
                <p className="text-xs uppercase font-bold tracking-wider text-[#1F1612]/60 mb-3">
                  Found {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'}
                </p>
                <div className="divide-y divide-[#1F1612]/8">
                  {filteredProducts.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => {
                        closeSearch();
                        navigateToProduct(product.slug);
                      }}
                      className="w-full flex items-center justify-between py-3 px-2 rounded-lg hover:bg-[#EDE6D8]/50 transition-colors text-left group cursor-pointer"
                    >
                      <div className="flex items-center gap-3.5">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-14 h-14 rounded-lg object-cover bg-[#EDE6D8] shrink-0"
                        />
                        <div>
                          <span className="text-[10px] uppercase font-bold text-[#243E36] tracking-wider block">
                            {product.category}
                          </span>
                          <p className="text-sm font-bold text-[#1F1612] group-hover:text-[#243E36]">
                            {product.name}
                          </p>
                          <p className="text-xs text-[#1F1612]/65 line-clamp-1">
                            {product.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 pl-3 shrink-0">
                        <span className="text-xs font-bold text-[#1F1612] tabular-nums">
                          ${product.price.toFixed(2)} NZD
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#1F1612]/40 group-hover:translate-x-1 group-hover:text-[#243E36] transition-all" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
