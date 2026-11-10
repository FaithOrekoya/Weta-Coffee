import React, { useState } from 'react';
import { Instagram, Heart, MessageCircle, ExternalLink, X, Calendar, Tag, ShieldCheck } from 'lucide-react';
import { INSTAGRAM_POSTS, INSTAGRAM_ACCOUNT, InstagramPostItem } from '../data/instagramPosts';

export const InstagramFeed: React.FC = () => {
  const [activeModalPost, setActiveModalPost] = useState<InstagramPostItem | null>(null);

  // Duplicate for smooth seamless loop in marquee mode
  const displayPosts = [...INSTAGRAM_POSTS, ...INSTAGRAM_POSTS];

  return (
    <section className="py-20 lg:py-24 bg-[#FAF5E4] border-t border-[#351D17]/10 relative overflow-hidden">
      
      {/* Background ambient accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F7E5A9]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#40543A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        {/* Header & Direct Instagram Profile Link */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#40543A]">
              <Instagram className="w-4 h-4 text-[#40543A]" />
              <span>Official Instagram · {INSTAGRAM_ACCOUNT.handle}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#351D17]">
              Follow Us on Instagram
            </h2>
            <p className="text-xs sm:text-sm text-[#351D17]/75 font-light max-w-xl leading-relaxed">
              Authentic stories from our One Tree Hill cafe at 1a Rāwhiti Road, weekly small-batch drum roasts in St Johns, and Auckland’s vibrant specialty coffee community.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:items-end gap-2">
            <a
              href={INSTAGRAM_ACCOUNT.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#351D17] hover:bg-[#4B2920] text-[#F7E5A9] text-xs font-bold tracking-wider uppercase rounded-full transition-all shadow-md group cursor-pointer"
            >
              <Instagram className="w-4 h-4 transition-transform group-hover:scale-110" />
              <span>Follow {INSTAGRAM_ACCOUNT.handle}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
            </a>
            <span className="text-[11px] text-[#351D17]/60 flex items-center gap-1 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-[#40543A]" />
              <span>Verified Brand Content · Auckland, NZ</span>
            </span>
          </div>
        </div>
      </div>

      {/* Automatic Smooth Sliding Carousel Track (Continuous marquee, pauses on hover, no arrows) */}
      <div className="w-full overflow-hidden group">
        <div 
          className="flex gap-5 w-max animate-marquee hover:[animation-play-state:paused] py-2 px-4 select-none cursor-pointer"
          style={{ animationDuration: `${Math.max(28, displayPosts.length * 3.5)}s` }}
        >
          {displayPosts.map((post, idx) => (
            <div
              key={`${post.id}-${idx}`}
              onClick={() => setActiveModalPost(post)}
              className="shrink-0 w-[260px] sm:w-[280px] lg:w-[300px] aspect-square rounded-2xl overflow-hidden bg-[#351D17] shadow-sm hover:shadow-2xl transition-all duration-300 relative group/card border border-[#351D17]/10"
            >
              {/* Post Image */}
              <img
                src={post.image}
                alt={post.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-108"
              />

              {/* Floating Instagram Corner Icon */}
              <div className="absolute top-3.5 right-3.5 w-7 h-7 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center opacity-85 group-hover/card:opacity-100 transition-opacity">
                <Instagram className="w-3.5 h-3.5" />
              </div>

              {/* Category Pill Tag */}
              <div className="absolute top-3.5 left-3.5">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-[#F7E5A9] px-2.5 py-1 rounded-full">
                  {post.categoryLabel}
                </span>
              </div>

              {/* Dark Hover Overlay with Authentic Captions and Counts */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-transparent opacity-0 group-hover/card:opacity-100 transition-all duration-300 p-5 flex flex-col justify-end text-white">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#F7E5A9] mb-1.5">
                  <span>{INSTAGRAM_ACCOUNT.handle}</span>
                  <span>·</span>
                  <span className="text-white/70 font-normal">{post.formattedDate}</span>
                </div>

                <p className="text-xs line-clamp-3 text-[#FAF5E4]/90 font-light leading-relaxed mb-3">
                  {post.caption}
                </p>

                <div className="flex items-center justify-between text-xs text-[#F7E5A9] font-medium pt-2.5 border-t border-white/20">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 fill-[#F7E5A9] text-[#F7E5A9]" />
                      <span className="tabular-nums">{post.likes}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3.5 h-3.5 text-[#F7E5A9]" />
                      <span className="tabular-nums">{post.comments}</span>
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-white underline underline-offset-2">
                    View Post →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Information & Manage Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#351D17]/10 text-xs text-[#351D17]/70">
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#40543A] animate-pulse" />
            <span>Hover over any post to pause slideshow · Tag <strong>#WetaCoffee</strong> or <strong>@weta_coffee</strong></span>
          </p>
          <a
            href={INSTAGRAM_ACCOUNT.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#351D17] hover:text-[#40543A] hover:underline flex items-center gap-1.5"
          >
            <span>Visit @weta_coffee on Instagram</span>
            <span>→</span>
          </a>
        </div>
      </div>

      {/* Interactive Lightbox / Authentic Post Modal Preview */}
      {activeModalPost && (
        <div 
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActiveModalPost(null)}
        >
          <div
            className="bg-[#FAF5E4] rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#351D17]/15 flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="md:w-1/2 relative aspect-square bg-[#351D17]">
              <img
                src={activeModalPost.image}
                alt={activeModalPost.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3.5 left-3.5 bg-black/60 backdrop-blur-md text-[#F7E5A9] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                {activeModalPost.categoryLabel}
              </div>
            </div>

            {/* Modal Post Content */}
            <div className="md:w-1/2 p-6 sm:p-7 flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#351D17] text-[#F7E5A9] flex items-center justify-center font-bold font-serif text-sm">
                      W
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <p className="text-xs font-bold text-[#351D17]">{INSTAGRAM_ACCOUNT.handle}</p>
                        <ShieldCheck className="w-3.5 h-3.5 text-[#40543A]" />
                      </div>
                      <p className="text-[10px] text-[#351D17]/60">Auckland, New Zealand</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveModalPost(null)}
                    className="text-[#351D17]/60 hover:text-[#351D17] p-1.5 rounded-full hover:bg-[#351D17]/10 transition-colors cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center gap-3 text-[11px] text-[#351D17]/70">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#40543A]" />
                    <span>{activeModalPost.formattedDate}</span>
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Tag className="w-3.5 h-3.5 text-[#40543A]" />
                    <span>{activeModalPost.categoryLabel}</span>
                  </span>
                </div>

                <p className="text-xs text-[#351D17]/85 font-light leading-relaxed max-h-[170px] overflow-y-auto pr-1">
                  {activeModalPost.caption}
                </p>

                <div className="flex items-center gap-4 text-xs text-[#351D17] font-semibold pt-3 border-t border-[#351D17]/10">
                  <span className="flex items-center gap-1.5">
                    <Heart className="w-4 h-4 fill-[#351D17] text-[#351D17]" />
                    <span className="tabular-nums">{activeModalPost.likes} likes</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MessageCircle className="w-4 h-4 text-[#351D17]" />
                    <span className="tabular-nums">{activeModalPost.comments} comments</span>
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#351D17]/10 flex items-center justify-between gap-3">
                <button
                  onClick={() => setActiveModalPost(null)}
                  className="px-4 py-2.5 text-xs text-[#351D17]/70 hover:text-[#351D17] cursor-pointer"
                >
                  Close
                </button>
                <a
                  href={activeModalPost.originalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#351D17] hover:bg-[#4B2920] text-[#F7E5A9] text-xs font-bold uppercase tracking-wider rounded-full transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm group"
                >
                  <Instagram className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
                  <span>View on Instagram</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default InstagramFeed;
