import React, { useState, useEffect, useRef } from 'react';
import { Search, ShoppingBag, User, Menu, X, ChevronDown, ArrowRight, MapPin, Phone, Repeat } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PageView } from '../types';

export const Navbar: React.FC = () => {
  const {
    itemCount,
    openCart,
    openSearch,
    openShopifyModal,
    currentPage,
    setCurrentPage,
    navigateToCategory
  } = useCart();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsShopDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (page: PageView) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    setIsShopDropdownOpen(false);
  };

  const handleCategoryClick = (category: 'coffee' | 'machines' | 'chocolate' | 'merch' | 'vouchers') => {
    navigateToCategory(category);
    setIsMobileMenuOpen(false);
    setIsShopDropdownOpen(false);
  };

  // Check if we are on the home page and not scrolled (for transparent styling over dark hero)
  const isTransparent = currentPage === 'home' && !isScrolled;

  return (
    <>
      {/* Top Slim Announcement Bar */}
      <aside aria-label="Shipping notice" className="bg-[#25130E] text-[#FAF5E4] text-[11px] font-medium tracking-wider uppercase py-2 px-4 text-center border-b border-[#4B2920]/40 z-50 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <span>FREE NEW ZEALAND SHIPPING ON ORDERS OVER $50 (METRO AREAS)</span>
          <span className="hidden sm:inline opacity-40">·</span>
          <span className="hidden sm:inline text-[#F7E5A9]">FRESHLY ROASTED WEEKLY IN AUCKLAND</span>
        </div>
      </aside>

      {/* Main Sticky Header with transparent transition */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isTransparent
            ? 'bg-[#351D17]/85 backdrop-blur-xs py-4 text-[#F7E5A9] border-b border-white/10'
            : isScrolled
            ? 'bg-[#351D17]/95 backdrop-blur-md shadow-lg py-3.5 text-[#F7E5A9] border-b border-[#4B2920]'
            : 'bg-[#351D17] py-4 text-[#F7E5A9] border-b border-[#4B2920]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            
            {/* Zone 1: Brand Wordmark (Strict single text element / logo per Top Bar Contract) */}
            <button
              onClick={() => handleNavClick('home')}
              className="group text-left flex items-center gap-2.5 focus-visible:outline-hidden cursor-pointer shrink-0"
            >
              <div className="w-8 h-8 rounded-full bg-[#F7E5A9] text-[#351D17] flex items-center justify-center font-serif text-base font-bold shadow-xs transition-transform duration-200 group-hover:scale-105">
                W
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#F7E5A9] leading-none">
                  Wētā Coffee
                </span>
                <span className="text-[9px] tracking-[0.2em] uppercase text-[#FAF5E4]/70 font-semibold mt-0.5">
                  Auckland · Est. 2014
                </span>
              </div>
            </button>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-[12px] font-semibold tracking-wider uppercase text-[#FAF5E4]/90">
              <button
                onClick={() => handleNavClick('home')}
                className={`transition-colors hover:text-white pb-0.5 whitespace-nowrap cursor-pointer ${
                  currentPage === 'home' ? 'text-white border-b-2 border-[#F7E5A9]' : ''
                }`}
              >
                Home
              </button>

              {/* Shop with Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsShopDropdownOpen(!isShopDropdownOpen)}
                  onMouseEnter={() => setIsShopDropdownOpen(true)}
                  className={`flex items-center gap-1 transition-colors hover:text-white pb-0.5 whitespace-nowrap cursor-pointer ${
                    currentPage === 'shop' ? 'text-white border-b-2 border-[#F7E5A9]' : ''
                  }`}
                >
                  <span>Shop</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isShopDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isShopDropdownOpen && (
                  <div
                    onMouseLeave={() => setIsShopDropdownOpen(false)}
                    className="absolute top-full -left-4 w-60 pt-3 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  >
                    <div className="bg-[#351D17] border border-[#4B2920] shadow-2xl rounded-2xl p-2.5 text-[#F7E5A9]">
                      <button
                        onClick={() => handleNavClick('shop')}
                        className="w-full text-left px-3.5 py-2 rounded-xl text-xs font-semibold text-white hover:bg-[#4B2920] transition-colors flex items-center justify-between cursor-pointer"
                      >
                        <span>Shop All Collection</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#F7E5A9]" />
                      </button>
                      <div className="h-px bg-[#4B2920] my-1" />
                      <button
                        onClick={() => handleCategoryClick('coffee')}
                        className="w-full text-left px-3.5 py-1.5 rounded-lg text-xs font-medium text-[#FAF5E4] hover:bg-[#4B2920] transition-colors flex items-center justify-between cursor-pointer"
                      >
                        <span>Fresh Roasted Coffee</span>
                        <span className="text-[10px] text-[#F7E5A9] font-semibold">House & Decaf</span>
                      </button>
                      <button
                        onClick={() => handleCategoryClick('machines')}
                        className="w-full text-left px-3.5 py-1.5 rounded-lg text-xs font-medium text-[#FAF5E4] hover:bg-[#4B2920] transition-colors flex items-center justify-between cursor-pointer"
                      >
                        <span>VBM Coffee Machines</span>
                        <span className="text-[10px] text-[#F7E5A9] font-semibold">Italian E61</span>
                      </button>
                      <button
                        onClick={() => handleCategoryClick('chocolate')}
                        className="w-full text-left px-3.5 py-1.5 rounded-lg text-xs font-medium text-[#FAF5E4] hover:bg-[#4B2920] transition-colors cursor-pointer"
                      >
                        Hot Chocolate
                      </button>
                      <button
                        onClick={() => handleCategoryClick('merch')}
                        className="w-full text-left px-3.5 py-1.5 rounded-lg text-xs font-medium text-[#FAF5E4] hover:bg-[#4B2920] transition-colors cursor-pointer"
                      >
                        Bullet Cups & Equipment
                      </button>
                      <button
                        onClick={() => handleCategoryClick('vouchers')}
                        className="w-full text-left px-3.5 py-1.5 rounded-lg text-xs font-medium text-[#FAF5E4] hover:bg-[#4B2920] transition-colors cursor-pointer"
                      >
                        Gift Vouchers
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={() => handleNavClick('subscriptions')}
                className={`transition-colors hover:text-white pb-0.5 whitespace-nowrap cursor-pointer flex items-center gap-1 ${
                  currentPage === 'subscriptions' ? 'text-white border-b-2 border-[#F7E5A9]' : ''
                }`}
              >
                <span>Subscriptions</span>
              </button>

              <button
                onClick={() => handleNavClick('story')}
                className={`transition-colors hover:text-white pb-0.5 whitespace-nowrap cursor-pointer ${
                  currentPage === 'story' ? 'text-white border-b-2 border-[#F7E5A9]' : ''
                }`}
              >
                Our Story
              </button>

              <button
                onClick={() => handleNavClick('sustainability')}
                className={`transition-colors hover:text-white pb-0.5 whitespace-nowrap cursor-pointer ${
                  currentPage === 'sustainability' ? 'text-white border-b-2 border-[#F7E5A9]' : ''
                }`}
              >
                Sustainability
              </button>

              <button
                onClick={() => handleNavClick('wholesale')}
                className={`transition-colors hover:text-white pb-0.5 whitespace-nowrap cursor-pointer ${
                  currentPage === 'wholesale' ? 'text-white border-b-2 border-[#F7E5A9]' : ''
                }`}
              >
                Wholesale
              </button>

              <button
                onClick={() => handleNavClick('contact')}
                className={`transition-colors hover:text-white pb-0.5 whitespace-nowrap cursor-pointer ${
                  currentPage === 'contact' ? 'text-white border-b-2 border-[#F7E5A9]' : ''
                }`}
              >
                Contact
              </button>
            </nav>

            {/* Zone 3: Interactive Affordances (Search, Account, Cart) */}
            <div className="flex items-center gap-2.5 sm:gap-3.5 shrink-0">
              <button
                onClick={openSearch}
                className="p-2 text-[#FAF5E4] hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                title="Search coffee & equipment"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>

              <button
                onClick={openShopifyModal}
                className="p-2 text-[#FAF5E4] hover:text-white hover:bg-white/10 rounded-full transition-colors hidden sm:block cursor-pointer"
                title="Account & Subscription Portal"
                aria-label="Account"
              >
                <User className="w-4 h-4" />
              </button>

              {/* Shopping Bag Button with Live Item Count */}
              <button
                onClick={openCart}
                className="relative flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7E5A9] text-[#351D17] hover:bg-white transition-colors cursor-pointer group shadow-sm font-bold text-xs"
                aria-label={`Shopping bag with ${itemCount} items`}
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span className="hidden sm:inline uppercase tracking-wider text-[11px]">Bag</span>
                <span className="w-4.5 h-4.5 rounded-full bg-[#351D17] text-[#F7E5A9] text-[10px] font-bold flex items-center justify-center tabular-nums">
                  {itemCount}
                </span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-1.5 text-white lg:hidden rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-[#351D17] text-[#F7E5A9] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto border-l border-[#4B2920] animate-in slide-in-from-right duration-250">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#4B2920]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#F7E5A9] text-[#351D17] flex items-center justify-center font-serif text-base font-bold">
                    W
                  </div>
                  <span className="font-serif text-lg font-bold text-[#F7E5A9]">Wētā Coffee</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-[#FAF5E4] hover:text-white rounded-full hover:bg-[#4B2920]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Links */}
              <nav className="mt-6 flex flex-col gap-1 text-sm font-semibold tracking-wider uppercase">
                <button
                  onClick={() => handleNavClick('home')}
                  className={`text-left px-3 py-2.5 rounded-lg hover:bg-[#4B2920] transition-colors ${
                    currentPage === 'home' ? 'bg-[#4B2920] text-[#F7E5A9]' : ''
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => handleNavClick('shop')}
                  className={`text-left px-3 py-2.5 rounded-lg hover:bg-[#4B2920] transition-colors ${
                    currentPage === 'shop' ? 'bg-[#4B2920] text-[#F7E5A9]' : ''
                  }`}
                >
                  Shop All Products
                </button>
                <button
                  onClick={() => handleNavClick('subscriptions')}
                  className={`text-left px-3 py-2.5 rounded-lg hover:bg-[#4B2920] transition-colors flex items-center justify-between ${
                    currentPage === 'subscriptions' ? 'bg-[#4B2920] text-[#F7E5A9]' : ''
                  }`}
                >
                  <span>Coffee Subscriptions</span>
                  <span className="text-[10px] bg-[#F7E5A9] text-[#351D17] px-2 py-0.5 rounded-full font-bold">Save 5%</span>
                </button>
                <button
                  onClick={() => handleNavClick('story')}
                  className={`text-left px-3 py-2.5 rounded-lg hover:bg-[#4B2920] transition-colors ${
                    currentPage === 'story' ? 'bg-[#4B2920] text-[#F7E5A9]' : ''
                  }`}
                >
                  Our Story
                </button>
                <button
                  onClick={() => handleNavClick('sustainability')}
                  className={`text-left px-3 py-2.5 rounded-lg hover:bg-[#4B2920] transition-colors ${
                    currentPage === 'sustainability' ? 'bg-[#4B2920] text-[#F7E5A9]' : ''
                  }`}
                >
                  Sustainability
                </button>
                <button
                  onClick={() => handleNavClick('wholesale')}
                  className={`text-left px-3 py-2.5 rounded-lg hover:bg-[#4B2920] transition-colors ${
                    currentPage === 'wholesale' ? 'bg-[#4B2920] text-[#F7E5A9]' : ''
                  }`}
                >
                  Wholesale Supply
                </button>
                <button
                  onClick={() => handleNavClick('contact')}
                  className={`text-left px-3 py-2.5 rounded-lg hover:bg-[#4B2920] transition-colors ${
                    currentPage === 'contact' ? 'bg-[#4B2920] text-[#F7E5A9]' : ''
                  }`}
                >
                  Café Locations & Contact
                </button>
              </nav>
            </div>

            <div className="pt-6 border-t border-[#4B2920] space-y-3 text-xs text-[#FAF5E4]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F7E5A9] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">One Tree Hill & St Johns</p>
                  <p className="text-[11px] text-[#FAF5E4]/60">Auckland, New Zealand</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F7E5A9] shrink-0" />
                <a href="tel:095257800" className="hover:underline">(09) 525 7800</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
