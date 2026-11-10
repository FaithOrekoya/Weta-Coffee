import React, { useState, useMemo } from 'react';
import { Filter, Star, Eye, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';

export const ShopPage: React.FC = () => {
  const {
    navigateToProduct,
    openQuickView,
    addToCart,
    selectedCategoryFilter,
    setSelectedCategoryFilter
  } = useCart();

  const [activeCategory, setActiveCategory] = useState<string>(selectedCategoryFilter || 'all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'name'>('featured');
  const [roastFilter, setRoastFilter] = useState<string>('all');

  React.useEffect(() => {
    if (selectedCategoryFilter) {
      setActiveCategory(selectedCategoryFilter);
    }
  }, [selectedCategoryFilter]);

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'coffee', label: 'Coffee Beans' },
    { id: 'machines', label: 'VBM Machines' },
    { id: 'chocolate', label: 'Hot Chocolate' },
    { id: 'merch', label: 'Merchandise & Cups' },
    { id: 'vouchers', label: 'Gift Vouchers' },
  ];

  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS];

    if (activeCategory !== 'all') {
      list = list.filter((p) => p.category === activeCategory);
    }

    if (roastFilter !== 'all') {
      list = list.filter((p) => p.roastLevel === roastFilter);
    }

    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name') {
      list.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return list;
  }, [activeCategory, roastFilter, sortBy]);

  const handleCategorySelect = (catId: string) => {
    setActiveCategory(catId);
    setSelectedCategoryFilter(catId === 'all' ? null : (catId as Product['category']));
  };

  return (
    <div className="py-12 sm:py-16 bg-[#FAF5E4] text-[#351D17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Editorial Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#40543A]">
            Ethically Sourced · Auckland Roasted
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#351D17]">
            The Coffee Collection
          </h1>
          <p className="text-sm text-[#351D17]/75 font-light leading-relaxed">
            Freshly batch-roasted specialty coffee, Swiss Water decaf, and handcrafted Italian espresso equipment. Delivered promptly across New Zealand.
          </p>
        </div>

        {/* Filter & Sorting Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#351D17]/10 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 shadow-xs">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategorySelect(cat.id)}
                className={`px-4 py-2 text-xs font-bold tracking-wider uppercase rounded-full transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-[#351D17] text-[#F7E5A9] shadow-xs'
                    : 'bg-[#FAF5E4] hover:bg-[#F7E5A9]/40 text-[#351D17]/80 border border-[#351D17]/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Controls: Roast & Sorting */}
          <div className="flex items-center gap-3 shrink-0">
            {activeCategory === 'coffee' && (
              <select
                value={roastFilter}
                onChange={(e) => setRoastFilter(e.target.value)}
                className="bg-[#FAF5E4] border border-[#351D17]/15 text-xs font-medium text-[#351D17] px-3.5 py-2 rounded-full focus:outline-hidden focus:border-[#40543A]"
              >
                <option value="all">All Roast Profiles</option>
                <option value="Medium">Medium Roast</option>
                <option value="Medium-Dark">Medium-Dark Roast</option>
              </select>
            )}

            <div className="flex items-center gap-2">
              <span className="text-xs text-[#351D17]/60 hidden sm:inline">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#FAF5E4] border border-[#351D17]/15 text-xs font-medium text-[#351D17] px-3.5 py-2 rounded-full focus:outline-hidden focus:border-[#40543A]"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name">Product Name (A-Z)</option>
              </select>
            </div>
          </div>

        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-[#351D17]/10">
            <h3 className="font-serif text-xl font-bold text-[#351D17]">No products in this category</h3>
            <p className="text-xs text-[#351D17]/60 mt-1">Try resetting the category filter.</p>
            <button
              onClick={() => handleCategorySelect('all')}
              className="mt-4 px-6 py-2.5 bg-[#351D17] text-[#F7E5A9] text-xs font-bold uppercase rounded-full"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-3xl border border-[#351D17]/10 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5"
              >
                {/* Image */}
                <div className="relative aspect-4/3 bg-[#FAF5E4] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {product.badge && (
                    <div className="absolute top-3.5 left-3.5 bg-[#351D17] text-[#F7E5A9] text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full">
                      {product.badge}
                    </div>
                  )}

                  <div className="absolute inset-0 bg-[#351D17]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                    <button
                      onClick={() => openQuickView(product)}
                      className="px-4 py-2 bg-white text-[#351D17] text-xs font-bold rounded-full shadow-md hover:bg-[#FAF5E4] flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Quick View</span>
                    </button>
                  </div>
                </div>

                {/* Details */}
                <div className="p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#351D17]/60 mb-2">
                      <span className="uppercase tracking-wider font-bold text-[#40543A]">
                        {product.category}
                      </span>
                      {product.rating && (
                        <span className="flex items-center gap-1 font-semibold text-[#351D17]">
                          <Star className="w-3.5 h-3.5 fill-[#F7E5A9] text-[#F7E5A9]" />
                          <span>{product.rating}</span>
                          <span className="text-[#351D17]/40">({product.reviewCount})</span>
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => navigateToProduct(product.slug)}
                      className="text-left font-serif text-2xl font-bold text-[#351D17] group-hover:text-[#40543A] transition-colors leading-tight cursor-pointer"
                    >
                      {product.name}
                    </button>

                    <p className="text-xs text-[#351D17]/70 mt-1.5 line-clamp-2 font-light">
                      {product.description}
                    </p>

                    {product.tastingNotes && (
                      <div className="mt-3 pt-3 border-t border-[#351D17]/8 text-xs">
                        <span className="text-[#351D17]/60 font-medium">Notes: </span>
                        <span className="text-[#351D17] font-semibold">
                          {product.tastingNotes.slice(0, 3).join(' · ')}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-[#351D17]/8 flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-[#351D17] tabular-nums">
                        ${product.price.toFixed(2)} NZD
                      </span>
                      {product.sizes && product.sizes.length > 1 && (
                        <span className="block text-[10px] text-[#351D17]/50">
                          {product.sizes[0].weight} / multiple sizes
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => navigateToProduct(product.slug)}
                        className="px-3.5 py-1.5 border border-[#351D17]/20 text-[#351D17] hover:bg-[#F7E5A9]/30 text-xs font-semibold rounded-full transition-colors cursor-pointer"
                      >
                        Details
                      </button>
                      <button
                        onClick={() => addToCart(product)}
                        className="px-4 py-1.5 bg-[#F7E5A9] hover:bg-[#FDF3C7] text-[#25130E] text-xs font-bold rounded-full transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs font-sans"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
