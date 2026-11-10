import React, { useState } from 'react';
import { Coffee, ShieldCheck, Check, ArrowRight, Wrench, GraduationCap, Truck, Phone, Mail } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { IMAGES } from '../assets/images';

export const WholesalePage: React.FC = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    contactPerson: '',
    email: '',
    phone: '',
    businessType: 'cafe',
    estimatedWeeklyKg: '10-20kg',
    hasMachinery: 'need_machinery',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.businessName || !formData.email || !formData.contactPerson) {
      setError('Please fill in your business name, contact name, and email address.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="py-12 sm:py-20 bg-[#FBF9F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-24">
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#243E36]">
              Wholesale Roastery Supply
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#1F1612] leading-[1.15] [text-wrap:balance]">
              Exceptional coffee for cafes, restaurants & workplaces.
            </h1>
            <p className="text-base text-[#1F1612]/75 font-light leading-relaxed">
              Partner with Wētā Coffee for freshly roasted specialty Arabica beans, commercial Italian espresso machinery, comprehensive barista training, and Auckland-based technical support.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-[#1F1612]">
              <span className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-[#243E36]" />
                Weekly Scheduled Delivery
              </span>
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-[#C88A58]" />
                Hands-on Barista Training
              </span>
              <span className="flex items-center gap-1.5">
                <Wrench className="w-4 h-4 text-[#243E36]" />
                VBM Machinery & Tech Care
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-4/3 rounded-2xl overflow-hidden shadow-xl border border-[#1F1612]/10 bg-[#EDE6D8]">
            <img
              src={IMAGES.vbmDomobarEspresso}
              alt="Commercial espresso machinery and Wētā Coffee wholesale supply"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 4 Wholesale Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-xl bg-[#F6F2EA] border border-[#1F1612]/10 space-y-2.5">
            <div className="w-10 h-10 rounded-lg bg-[#1F1612] text-[#FBF9F5] flex items-center justify-center">
              <Coffee className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-[#1F1612]">House & Custom Blends</h3>
            <p className="text-xs text-[#1F1612]/70 leading-relaxed">
              Supply our proven One Tree Hill house blend, chemical-free Swiss Water decaf, and award-winning hot chocolate.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#F6F2EA] border border-[#1F1612]/10 space-y-2.5">
            <div className="w-10 h-10 rounded-lg bg-[#243E36] text-[#FBF9F5] flex items-center justify-center">
              <Wrench className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-[#1F1612]">Commercial Equipment</h3>
            <p className="text-xs text-[#1F1612]/70 leading-relaxed">
              Official New Zealand suppliers of Italian VBM (Vibiemme) espresso machines, Mazzer grinders, and water filtration.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#F6F2EA] border border-[#1F1612]/10 space-y-2.5">
            <div className="w-10 h-10 rounded-lg bg-[#C88A58] text-[#1F1612] flex items-center justify-center">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-[#1F1612]">Staff Barista Training</h3>
            <p className="text-xs text-[#1F1612]/70 leading-relaxed">
              We train your team at our St Johns roastery or on-site, covering grind calibration, milk texturing, and workflow speed.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#F6F2EA] border border-[#1F1612]/10 space-y-2.5">
            <div className="w-10 h-10 rounded-lg bg-[#243E36] text-[#FBF9F5] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-[#1F1612]">Emergency Tech Support</h3>
            <p className="text-xs text-[#1F1612]/70 leading-relaxed">
              Fast local Auckland servicing and loan machinery ensure your cafe never loses a morning of coffee service.
            </p>
          </div>
        </div>

        {/* Wholesale Form Section */}
        <div className="bg-[#F6F2EA] rounded-3xl border border-[#1F1612]/15 p-8 sm:p-12">
          <div className="max-w-2xl mx-auto">
            <div className="text-center space-y-2 mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#243E36]">
                Begin a Partnership
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#1F1612]">
                Wholesale Enquiry Form
              </h2>
              <p className="text-xs sm:text-sm text-[#1F1612]/70">
                Tell us about your venue and our roastery team will contact you within 24 hours with custom pricing and sample packs.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-[#243E36] text-[#FBF9F5] rounded-2xl text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-[#C88A58] text-[#1F1612] flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold">Thank you, {formData.contactPerson}!</h3>
                <p className="text-xs text-[#EDE6D8]/85 max-w-md mx-auto leading-relaxed">
                  We have received your wholesale enquiry for <strong>{formData.businessName}</strong>. Miles or one of our head roasters will contact you via email at <strong>{formData.email}</strong> to arrange your complimentary bean tasting flight and wholesale rate card.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-white text-[#1F1612] text-xs font-bold tracking-wider uppercase rounded-lg hover:bg-[#EDE6D8]"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="p-3 bg-red-100 text-red-800 text-xs rounded-lg font-medium">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#1F1612]">Business / Venue Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Greenwood Cafe & Eatery"
                      className="w-full text-xs p-3 rounded-lg border border-[#1F1612]/20 bg-white focus:outline-hidden focus:border-[#243E36]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#1F1612]">Contact Person *</label>
                    <input
                      type="text"
                      required
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full text-xs p-3 rounded-lg border border-[#1F1612]/20 bg-white focus:outline-hidden focus:border-[#243E36]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#1F1612]">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sarah@greenwoodcafe.co.nz"
                      className="w-full text-xs p-3 rounded-lg border border-[#1F1612]/20 bg-white focus:outline-hidden focus:border-[#243E36]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#1F1612]">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 021 555 1234"
                      className="w-full text-xs p-3 rounded-lg border border-[#1F1612]/20 bg-white focus:outline-hidden focus:border-[#243E36]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#1F1612]">Business Type</label>
                    <select
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className="w-full text-xs p-3 rounded-lg border border-[#1F1612]/20 bg-white"
                    >
                      <option value="cafe">Café or Bakery</option>
                      <option value="restaurant">Restaurant / Bar</option>
                      <option value="office">Corporate Office</option>
                      <option value="hotel">Boutique Hotel / Lodge</option>
                      <option value="retail">Gourmet Grocery / Retail</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#1F1612]">Estimated Volume</label>
                    <select
                      value={formData.estimatedWeeklyKg}
                      onChange={(e) => setFormData({ ...formData, estimatedWeeklyKg: e.target.value })}
                      className="w-full text-xs p-3 rounded-lg border border-[#1F1612]/20 bg-white"
                    >
                      <option value="5-10kg">5 – 10 kg / week</option>
                      <option value="10-20kg">10 – 20 kg / week</option>
                      <option value="20-50kg">20 – 50 kg / week</option>
                      <option value="50kg+">50+ kg / week</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#1F1612]">Machinery Needs</label>
                    <select
                      value={formData.hasMachinery}
                      onChange={(e) => setFormData({ ...formData, hasMachinery: e.target.value })}
                      className="w-full text-xs p-3 rounded-lg border border-[#1F1612]/20 bg-white"
                    >
                      <option value="need_machinery">Need espresso machine</option>
                      <option value="have_machinery">Have existing equipment</option>
                      <option value="lease_options">Interested in machine lease</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#1F1612]">Message or Requirements</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your upcoming launch, current coffee setup, or roast profile preferences..."
                    className="w-full text-xs p-3 rounded-lg border border-[#1F1612]/20 bg-white focus:outline-hidden focus:border-[#243E36]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#1F1612] hover:bg-[#243E36] text-[#FBF9F5] text-xs font-bold tracking-widest uppercase rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Request Wholesale Information & Free Samples</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
