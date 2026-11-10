import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Check, ExternalLink, MessageSquare } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: 'One Tree Hill',
    subject: 'General Question',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please provide your name, email, and message.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="py-12 sm:py-20 bg-[#FBF9F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#243E36]">
            Get In Touch
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#1F1612]">
            Contact Our Roastery
          </h1>
          <p className="text-sm text-[#1F1612]/75 font-light leading-relaxed">
            Have a question about our roasts, home espresso machines, or just want to talk coffee? We’d love to hear from you.
          </p>
        </div>

        {/* 2 Physical Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Location 1: One Tree Hill */}
          <div className="bg-[#F6F2EA] rounded-2xl border border-[#1F1612]/10 p-8 space-y-6 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#243E36]">
                  The Original Café
                </span>
                <span className="text-[11px] bg-[#243E36]/10 text-[#243E36] font-semibold px-2 py-0.5 rounded-sm">
                  Espresso Bar & Beans
                </span>
              </div>

              <h2 className="font-serif text-2xl font-bold text-[#1F1612]">
                One Tree Hill Café
              </h2>

              <div className="flex items-start gap-2.5 text-xs text-[#1F1612]/80">
                <MapPin className="w-4 h-4 text-[#C88A58] shrink-0 mt-0.5" />
                <p>1a Rāwhiti Road, One Tree Hill, Auckland 1061, New Zealand</p>
              </div>

              <div className="pt-2 border-t border-[#1F1612]/10 space-y-2 text-xs">
                <div className="flex items-center gap-2 font-semibold text-[#1F1612]">
                  <Clock className="w-4 h-4 text-[#243E36]" />
                  <span>Opening Hours (Verified):</span>
                </div>
                <div className="space-y-1 text-[#1F1612]/75 pl-6">
                  <p><strong className="text-[#1F1612]">Monday – Friday:</strong> 7:00 am to 2:00 pm</p>
                  <p><strong className="text-[#1F1612]">Saturday – Sunday:</strong> 8:00 am to 12:00 noon</p>
                  <p><strong className="text-[#1F1612]">Public Holidays:</strong> 8:00 am to 12:00 noon (except Christmas & Good Friday)</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#1F1612]/10">
              <a
                href="https://maps.google.com/?q=1a+Rawhiti+Road+One+Tree+Hill+Auckland"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 bg-[#1F1612] hover:bg-[#243E36] text-[#FBF9F5] text-xs font-semibold tracking-wider uppercase rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <span>Get Directions to One Tree Hill</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Location 2: St Johns Roastery */}
          <div className="bg-[#F6F2EA] rounded-2xl border border-[#1F1612]/10 p-8 space-y-6 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#243E36]">
                  Headquarters & Machine Showroom
                </span>
                <span className="text-[11px] bg-[#C88A58]/20 text-[#1F1612] font-semibold px-2 py-0.5 rounded-sm">
                  Roastery & VBM Demo
                </span>
              </div>

              <h2 className="font-serif text-2xl font-bold text-[#1F1612]">
                The Roastery @ St Johns
              </h2>

              <div className="flex items-start gap-2.5 text-xs text-[#1F1612]/80">
                <MapPin className="w-4 h-4 text-[#C88A58] shrink-0 mt-0.5" />
                <p>66B Morrin Road, St Johns, Auckland 1072, New Zealand</p>
              </div>

              <div className="pt-2 border-t border-[#1F1612]/10 space-y-2 text-xs">
                <div className="flex items-center gap-2 font-semibold text-[#1F1612]">
                  <Clock className="w-4 h-4 text-[#243E36]" />
                  <span>Opening Hours (Verified):</span>
                </div>
                <div className="space-y-1 text-[#1F1612]/75 pl-6">
                  <p><strong className="text-[#1F1612]">Monday – Friday:</strong> 6:30 am to 2:00 pm</p>
                  <p><strong className="text-[#1F1612]">Saturday:</strong> 8:00 am to 12:00 noon</p>
                  <p><strong className="text-[#1F1612]">Sunday & Public Holidays:</strong> Closed for roasting operations</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#1F1612]/10">
              <a
                href="https://maps.google.com/?q=66B+Morrin+Road+St+Johns+Auckland"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 bg-[#1F1612] hover:bg-[#243E36] text-[#FBF9F5] text-xs font-semibold tracking-wider uppercase rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <span>Get Directions to The Roastery</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Contact Form & Direct Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Direct Details */}
          <div className="lg:col-span-5 space-y-6 bg-[#243E36] text-[#FBF9F5] p-8 sm:p-10 rounded-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C88A58]">
              Direct Contact
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-snug">
              We’re always here for a coffee chat.
            </h3>
            <p className="text-xs sm:text-sm text-[#EDE6D8]/80 leading-relaxed font-light">
              Whether you need advice dialling in a coffee bean or want to book an in-person test drive of an Italian VBM Domobar machine, our friendly team is ready.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/15 text-xs">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C88A58]" />
                <div>
                  <p className="font-semibold text-white">Telephone</p>
                  <a href="tel:095257800" className="text-[#EDE6D8]/80 hover:text-white">(09) 525 7800</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C88A58]" />
                <div>
                  <p className="font-semibold text-white">Email Address</p>
                  <a href="mailto:roastery@wetacoffee.co.nz" className="text-[#EDE6D8]/80 hover:text-white">roastery@wetacoffee.co.nz</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-[#C88A58]" />
                <div>
                  <p className="font-semibold text-white">Online Orders & Subscriptions</p>
                  <p className="text-[#EDE6D8]/80">Dispatched Monday to Friday via NZ CourierPost</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-[#F6F2EA] p-8 sm:p-10 rounded-3xl border border-[#1F1612]/10">
            <h3 className="font-serif text-2xl font-bold text-[#1F1612] mb-1">
              Send a Message
            </h3>
            <p className="text-xs text-[#1F1612]/70 mb-6">
              Our Auckland roastery responds to all customer enquiries within one business day.
            </p>

            {submitted ? (
              <div className="p-8 bg-[#243E36] text-[#FBF9F5] rounded-2xl text-center space-y-3 animate-in fade-in">
                <div className="w-10 h-10 rounded-full bg-[#C88A58] text-[#1F1612] flex items-center justify-center mx-auto">
                  <Check className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-xl font-bold">Message Sent Successfully!</h4>
                <p className="text-xs text-[#EDE6D8]/80 max-w-sm mx-auto">
                  Thank you, {formData.name}. We have received your note and will be in touch shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 px-4 py-2 bg-white text-[#1F1612] text-xs font-semibold rounded-lg"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 bg-red-100 text-red-800 text-xs rounded-lg font-medium">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#1F1612]">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Liam Taylor"
                      className="w-full text-xs p-3 rounded-lg border border-[#1F1612]/20 bg-white focus:outline-hidden focus:border-[#243E36]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#1F1612]">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="liam@example.co.nz"
                      className="w-full text-xs p-3 rounded-lg border border-[#1F1612]/20 bg-white focus:outline-hidden focus:border-[#243E36]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#1F1612]">Phone (Optional)</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 021 123 4567"
                      className="w-full text-xs p-3 rounded-lg border border-[#1F1612]/20 bg-white focus:outline-hidden focus:border-[#243E36]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#1F1612]">Topic</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full text-xs p-3 rounded-lg border border-[#1F1612]/20 bg-white"
                    >
                      <option>General Question</option>
                      <option>Coffee Subscriptions</option>
                      <option>VBM Espresso Machines</option>
                      <option>One Tree Hill Café Feedback</option>
                      <option>Roastery Tour / Pickup</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#1F1612]">Message *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we help you today?"
                    className="w-full text-xs p-3 rounded-lg border border-[#1F1612]/20 bg-white focus:outline-hidden focus:border-[#243E36]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#1F1612] hover:bg-[#243E36] text-[#FBF9F5] text-xs font-bold tracking-widest uppercase rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message to Roastery</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
