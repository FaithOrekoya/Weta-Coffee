import React from 'react';
import { ArrowRight, Coffee, Heart, Globe, Flame, Award, MapPin } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { IMAGES } from '../assets/images';

export const OurStoryPage: React.FC = () => {
  const { setCurrentPage } = useCart();

  const timelineEvents = [
    {
      year: '2013',
      title: 'The Coffee Obsession Begins',
      description: 'Miles Masters and Sandra Allan, deeply passionate about coffee craft and dissatisfied with mass-commercial blends, spent months researching origin green beans and roasting chemistry across New Zealand.'
    },
    {
      year: '2014',
      title: 'One Tree Hill Roastery & Has Garanti',
      description: 'Acquiring an authentic 15kg Has Garanti drum roaster from Turkey, Miles and Sandra opened Wētā Coffee at 1a Rāwhiti Road in One Tree Hill. The signature One Tree Hill blend was born.'
    },
    {
      year: '2017',
      title: 'The St Johns Roastery Expansion',
      description: 'To meet growing demand from Auckland cafes, offices, and devoted locals without compromising small-batch quality, Wētā opened its dedicated roastery at 66B Morrin Road in St Johns.'
    },
    {
      year: '2019',
      title: 'Pacific Island Community — Tonga & Fiji',
      description: 'Partnering with passionate local operators, Wētā Coffee expanded into the Pacific, opening a sister café in Tonga and supplying specialty espresso across Suva, Fiji.'
    },
    {
      year: 'Today',
      title: 'Roasting with Uncompromising Purpose',
      description: 'Continuing to roast by human sight, sound, and smell rather than computerized automation, delivering fresh specialty coffee and compostable packaging to doorsteps nationwide.'
    }
  ];

  return (
    <div className="py-12 sm:py-20 bg-[#FBF9F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-24">
        
        {/* Editorial Hero Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#243E36]">
            Our Story & Heritage
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1F1612] [text-wrap:balance]">
            Crafted by humans, not algorithms.
          </h1>
          <p className="text-base sm:text-lg text-[#1F1612]/75 font-light leading-relaxed">
            The story of Wētā Coffee began in Auckland with two coffee lovers, a vintage Turkish roaster, and a simple commitment: roast the coffee we love to drink every single day.
          </p>
        </div>

        {/* Story Lead Section with Editorial Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 relative aspect-16/10 rounded-2xl overflow-hidden shadow-xl border border-[#1F1612]/10 bg-[#EDE6D8]">
            <img
              src={IMAGES.roasteryCraftsmanship}
              alt="Miles Masters inspecting freshly roasted beans on the Has Garanti roaster"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C88A58]">
              Miles & Sandra
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1612]">
              A humble beginning in One Tree Hill
            </h2>
            <p className="text-xs sm:text-sm text-[#1F1612]/80 leading-relaxed font-light">
              In 2013, Miles Masters and Sandra Allan became what they affectionately call "obsessive coffee nerds." Rather than outsourcing roasting or relying on push-button automated machines, they wanted total command over every variable—airflow, drum speed, temperature curves, and first-crack timing.
            </p>
            <p className="text-xs sm:text-sm text-[#1F1612]/80 leading-relaxed font-light">
              They purchased a heavy 15kg Has Garanti roaster directly from Turkey and founded Wētā Coffee at 1a Rāwhiti Road, right beneath Auckland's iconic Maungakiekie (One Tree Hill).
            </p>
          </div>
        </div>

        {/* Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-[#1F1612]/10">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#243E36] text-[#FBF9F5] flex items-center justify-center">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#1F1612]">Small-Batch Roasting</h3>
            <p className="text-xs text-[#1F1612]/75 leading-relaxed">
              We never roast for warehouse shelves. Every batch is roasted in limited quantities weekly to ensure peak sweetness and aromatic bloom.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#C88A58] text-[#1F1612] flex items-center justify-center">
              <Coffee className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#1F1612]">The Kiwi Palate</h3>
            <p className="text-xs text-[#1F1612]/75 leading-relaxed">
              New Zealand pioneered the Flat White. Our signature One Tree Hill blend is tuned specifically to cut cleanly through velvety milk while singing as a pure black espresso.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#1F1612] text-[#FBF9F5] flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#1F1612]">Pacific Island Family</h3>
            <p className="text-xs text-[#1F1612]/75 leading-relaxed">
              We are deeply proud to have extended our roastery community to Tonga and Fiji, training local baristas and serving premium beans across the South Pacific.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#243E36]">
              Milestones
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#1F1612]">
              Our Journey Through the Years
            </h2>
          </div>

          <div className="relative border-l-2 border-[#1F1612]/15 ml-4 sm:ml-32 space-y-12">
            {timelineEvents.map((event, idx) => (
              <div key={idx} className="relative pl-8 sm:pl-10">
                {/* Year Marker */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#243E36] border-4 border-[#FBF9F5]" />
                <span className="sm:absolute sm:-left-32 sm:top-0 text-sm font-bold text-[#C88A58] block mb-1 sm:mb-0 tabular-nums">
                  {event.year}
                </span>

                <h3 className="font-serif text-xl font-bold text-[#1F1612]">
                  {event.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#1F1612]/75 leading-relaxed mt-1 max-w-xl">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pacific Connection Spotlight */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#F6F2EA] border border-[#1F1612]/10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#243E36]">
              Beyond New Zealand
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1612]">
              Wētā in Tonga & Fiji
            </h3>
            <p className="text-xs sm:text-sm text-[#1F1612]/80 leading-relaxed font-light">
              Through long-standing family and business relationships, Wētā Coffee established an authentic footprint in the Pacific Islands. Our partners in Tonga operate a dedicated Wētā Coffee café, bringing fresh Auckland-roasted specialty coffee to the Kingdom. In Fiji, we supply cafes and resorts across Suva, pairing our signature roasts and hot chocolate with Pacific hospitality.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setCurrentPage('shop')}
                className="px-6 py-3 bg-[#1F1612] hover:bg-[#243E36] text-[#FBF9F5] text-xs font-semibold tracking-wider uppercase rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Taste Our Signature Roasts</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-[#EDE6D8] shadow-md border border-[#1F1612]/10">
            <img
              src={IMAGES.storeOneTreeHillCafe}
              alt="Community atmosphere at Wētā Coffee"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  );
};
