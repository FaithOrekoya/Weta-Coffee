import React from 'react';
import { Leaf, Recycle, Heart, ShieldCheck, ArrowRight, Sun, Droplets } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { IMAGES } from '../assets/images';

export const SustainabilityPage: React.FC = () => {
  const { setCurrentPage, navigateToProduct } = useCart();

  const initiatives = [
    {
      title: 'Plant-Based Ecoware Packaging',
      description: 'In both our One Tree Hill and St Johns cafes, every single takeaway coffee cup and sip lid is made from certified plant-based, commercially compostable Ecoware materials rather than petroleum plastics.',
      icon: Leaf
    },
    {
      title: 'Wētā Bullet Reusable Cups',
      description: 'We designed the ceramic-lined Wētā Bullet thermal cup to eliminate single-use takeaway cups altogether. Plus, customers receive a 50c discount on every takeaway order when bringing any reusable cup.',
      icon: Recycle
    },
    {
      title: '100% Organic Chaff Repurposing',
      description: 'Coffee roasting produces chaff—the delicate skin that sheds during bean expansion. Rather than sending chaff to Auckland landfills, 100% of our organic chaff is collected weekly by local community gardeners and urban farms for nitrogen-rich compost and soil mulch.',
      icon: Sun
    },
    {
      title: 'Chemical-Free Swiss Water Decaffeination',
      description: 'Our Rāwhiti Decaf utilizes the patented Swiss Water process—a 100% chemical-free, pure mountain water technique that gently removes caffeine without toxic solvents like methylene chloride or ethyl acetate.',
      icon: Droplets
    }
  ];

  return (
    <div className="py-12 sm:py-20 bg-[#FBF9F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-24">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#243E36]">
            Our Environmental Philosophy
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1F1612] [text-wrap:balance]">
            Better coffee. Lighter footprint.
          </h1>
          <p className="text-base sm:text-lg text-[#1F1612]/75 font-light leading-relaxed">
            As a local Auckland roastery, our love for New Zealand's natural environment guides every decision we make—from how our beans are sourced to the cups we serve in.
          </p>
        </div>

        {/* Feature Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-[#243E36] text-[#FBF9F5] p-8 sm:p-12 rounded-3xl">
          <div className="space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C88A58]">
              Verified Initiatives
            </span>
            <h2 className="font-serif text-3xl font-bold text-white leading-tight">
              Ethical from the ground up
            </h2>
            <p className="text-xs sm:text-sm text-[#EDE6D8]/85 leading-relaxed font-light">
              We work directly with importers and farming collectives across Colombia, Brazil, Ethiopia, Peru, and Papua New Guinea who uphold fair labour practices, sustainable soil management, and shade-grown cultivation.
            </p>
            <p className="text-xs sm:text-sm text-[#EDE6D8]/85 leading-relaxed font-light">
              By paying premium prices well above fair-trade minimums for top-grade specialty Arabica lots, we support multigenerational coffee farming families.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setCurrentPage('shop')}
                className="px-6 py-3 bg-[#C88A58] hover:bg-[#B17443] text-[#1F1612] text-xs font-bold tracking-wider uppercase rounded-lg transition-colors cursor-pointer"
              >
                Shop Ethically Sourced Coffee
              </button>
            </div>
          </div>

          <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-[#1F1612] shadow-lg">
            <img
              src={IMAGES.productWetaBulletCup}
              alt="Wētā Bullet ceramic cup and sustainable coffee lifestyle"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 4 Key Pillars */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="font-serif text-3xl font-bold text-[#1F1612]">
              Concrete Everyday Actions
            </h3>
            <p className="text-xs text-[#1F1612]/70">
              No vague buzzwords or fabricated certificates—just practical stewardship in Auckland.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {initiatives.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-2xl bg-[#F6F2EA] border border-[#1F1612]/10 space-y-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#243E36] text-[#FBF9F5] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#1F1612]">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#1F1612]/75 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bullet Cup Product Feature */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#EDE6D8]/60 border border-[#1F1612]/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-lg">
            <h4 className="font-serif text-2xl font-bold text-[#1F1612]">
              Join the Reusable Movement
            </h4>
            <p className="text-xs sm:text-sm text-[#1F1612]/75">
              Get your own ceramic-lined Wētā Bullet cup and receive 50c off every takeaway coffee at our One Tree Hill and St Johns roasteries.
            </p>
          </div>
          <button
            onClick={() => navigateToProduct('weta-bullet-ceramic-cup')}
            className="px-6 py-3.5 bg-[#1F1612] hover:bg-[#243E36] text-[#FBF9F5] text-xs font-bold tracking-wider uppercase rounded-lg transition-colors flex items-center gap-2 cursor-pointer shrink-0"
          >
            <span>Order Bullet Cup — $38 NZD</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
