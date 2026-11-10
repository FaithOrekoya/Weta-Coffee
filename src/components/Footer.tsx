import React, { useState } from 'react';
import { ArrowRight, Check, MapPin, Mail, Phone, Heart, Instagram } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PageView } from '../types';

export const Footer: React.FC = () => {
  const { setCurrentPage, navigateToCategory } = useCart();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please provide a valid email address');
      return;
    }
    setError('');
    setSubscribed(true);
  };

  const navigate = (page: PageView) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#25130E] text-[#FAF5E4] border-t border-[#351D17]">
      

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Col 1: Brand Wordmark & Story */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#F7E5A9] text-[#351D17] flex items-center justify-center font-serif text-lg font-bold">
                W
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-white block">
                  Wētā Coffee
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#F7E5A9] font-semibold">
                  Auckland Roastery · Est. 2014
                </span>
              </div>
            </div>
            <p className="text-xs text-[#FAF5E4]/75 leading-relaxed max-w-sm font-light">
              Founded in One Tree Hill by Miles and Sandra, Wētā Coffee roasts 100% specialty Arabica in small batches on our Turkish Has Garanti roaster. Delivering honest, thoughtful coffee across New Zealand and the Pacific.
            </p>
            <div className="pt-2 text-xs text-[#FAF5E4]/85 space-y-1.5 font-light">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#F7E5A9]" />
                <a href="tel:095257800" className="hover:text-white transition-colors">(09) 525 7800</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#F7E5A9]" />
                <a href="mailto:roastery@wetacoffee.co.nz" className="hover:text-white transition-colors">roastery@wetacoffee.co.nz</a>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-3.5 h-3.5 text-[#F7E5A9]" />
                <a href="https://www.instagram.com/weta_coffee/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">@weta_coffee</a>
              </div>
            </div>
          </div>

          {/* Col 2: Shop Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#F7E5A9] mb-4">
              Shop Roastery
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FAF5E4]/75 font-light">
              <li>
                <button onClick={() => navigate('shop')} className="hover:text-white transition-colors cursor-pointer">
                  All Products
                </button>
              </li>
              <li>
                <button onClick={() => { navigateToCategory('coffee'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition-colors cursor-pointer">
                  One Tree Hill Blend
                </button>
              </li>
              <li>
                <button onClick={() => { navigateToCategory('coffee'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition-colors cursor-pointer">
                  Swiss Water Rāwhiti Decaf
                </button>
              </li>
              <li>
                <button onClick={() => { navigateToCategory('machines'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition-colors cursor-pointer">
                  VBM Italian Machines
                </button>
              </li>
              <li>
                <button onClick={() => navigate('subscriptions')} className="hover:text-white transition-colors cursor-pointer">
                  Coffee Subscriptions
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#F7E5A9] mb-4">
              Our Journey
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FAF5E4]/75 font-light">
              <li>
                <button onClick={() => navigate('story')} className="hover:text-white transition-colors cursor-pointer">
                  Our Story & Founders
                </button>
              </li>
              <li>
                <button onClick={() => navigate('sustainability')} className="hover:text-white transition-colors cursor-pointer">
                  Sustainability & Ecoware
                </button>
              </li>
              <li>
                <button onClick={() => navigate('wholesale')} className="hover:text-white transition-colors cursor-pointer">
                  Wholesale B2B Supply
                </button>
              </li>
              <li>
                <button onClick={() => navigate('story')} className="hover:text-white transition-colors cursor-pointer">
                  Tonga & Fiji Community
                </button>
              </li>
              <li>
                <button onClick={() => navigate('contact')} className="hover:text-white transition-colors cursor-pointer">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Both Physical Locations */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#F7E5A9] mb-4">
              Auckland Locations
            </h4>
            <div className="space-y-4 text-xs text-[#FAF5E4]/80 font-light">
              <div>
                <p className="font-semibold text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#F7E5A9]" />
                  One Tree Hill
                </p>
                <p className="text-[11px] text-[#FAF5E4]/60">1a Rāwhiti Road, Auckland 1061</p>
                <p className="text-[10px] text-[#FAF5E4]/50">Mon–Fri 7am–2pm · Sat–Sun 8am–12pm</p>
              </div>

              <div>
                <p className="font-semibold text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#F7E5A9]" />
                  The Roastery @ St Johns
                </p>
                <p className="text-[11px] text-[#FAF5E4]/60">66B Morrin Road, Auckland 1072</p>
                <p className="text-[10px] text-[#FAF5E4]/50">Mon–Fri 6:30am–2pm · Sat 8am–12pm</p>
              </div>

              <button
                onClick={() => navigate('contact')}
                className="text-[11px] font-semibold text-[#F7E5A9] hover:underline block pt-1 cursor-pointer"
              >
                Map & Directions →
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal / Shopify Sync Bar */}
        <div className="mt-14 pt-8 border-t border-[#351D17] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF5E4]/50">
          <p>© {new Date().getFullYear()} Wētā Coffee Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Free NZ Metro Delivery $50+</span>
            <span>·</span>
            <span>Shopify Storefront Bridge</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              Auckland Roasted with <Heart className="w-3 h-3 text-[#F7E5A9] fill-[#F7E5A9]" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
