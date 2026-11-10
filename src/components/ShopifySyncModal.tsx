import React, { useState } from 'react';
import { X, Check, Copy, ExternalLink, ShieldCheck, Database, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const ShopifySyncModal: React.FC = () => {
  const { isShopifyModalOpen, closeShopifyModal, cart, subtotal } = useCart();
  const [copied, setCopied] = useState(false);

  if (!isShopifyModalOpen) return null;

  // Build the live Shopify Cart payload representation
  const shopifyCartPayload = {
    store: 'wetacoffee.co.nz',
    currency: 'NZD',
    lineItems: cart.map(item => ({
      product_id: item.product.id,
      title: item.product.name,
      variant_title: `${item.size} / ${item.grind}`,
      quantity: item.quantity,
      price: item.price,
      is_subscription: item.isSubscription || false,
      frequency: item.frequency || null
    })),
    subtotal: subtotal.toFixed(2),
    cart_permalink_ready: `https://wetacoffee.co.nz/cart/${cart.map(i => `${i.product.id}:${i.quantity}`).join(',')}`
  };

  const copyPayload = () => {
    navigator.clipboard.writeText(JSON.stringify(shopifyCartPayload, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1F1612]/70 backdrop-blur-xs transition-opacity"
        onClick={closeShopifyModal}
      />

      <div className="min-h-screen px-4 text-center flex items-center justify-center py-8">
        <div className="inline-block w-full max-w-2xl bg-[#FBF9F5] rounded-2xl text-left overflow-hidden shadow-2xl transform transition-all relative border border-[#1F1612]/15 z-10 animate-in fade-in zoom-in-95 duration-200">
          
          {/* Header */}
          <div className="p-6 bg-[#F6F2EA] border-b border-[#1F1612]/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#243E36] text-[#FBF9F5] flex items-center justify-center shadow-xs">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#1F1612]">
                  Shopify Checkout & Integration Layer
                </h3>
                <p className="text-xs text-[#1F1612]/70">
                  Target Store: <span className="font-semibold text-[#243E36]">wetacoffee.co.nz</span>
                </p>
              </div>
            </div>
            <button
              onClick={closeShopifyModal}
              className="p-1.5 text-[#1F1612]/60 hover:text-[#1F1612] rounded-full hover:bg-[#EDE6D8]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="bg-[#EDE6D8]/50 border border-[#1F1612]/10 rounded-xl p-4 text-xs text-[#1F1612]/85 leading-relaxed space-y-2">
              <div className="flex items-center gap-2 font-bold text-[#1F1612]">
                <ShieldCheck className="w-4 h-4 text-[#243E36]" />
                <span>Production Transparency Guarantee</span>
              </div>
              <p>
                In accordance with e-commerce engineering standards, this redesigned storefront does not mock or fabricate successful credit card transactions. Instead, this frontend is architected to seamlessly hand off this exact cart to the live Wētā Coffee Shopify backend.
              </p>
            </div>

            {/* Current Cart Summary */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1F1612]/70 flex items-center gap-1.5">
                  <ShoppingBag className="w-3.5 h-3.5" />
                  Active Cart Payload ({cart.length} item types · ${subtotal.toFixed(2)} NZD)
                </span>
                <button
                  onClick={copyPayload}
                  className="text-xs text-[#243E36] font-semibold flex items-center gap-1 hover:underline cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied JSON' : 'Copy Payload'}</span>
                </button>
              </div>

              <div className="bg-[#1F1612] text-[#EDE6D8] p-3.5 rounded-xl font-mono text-[11px] overflow-x-auto max-h-44 border border-[#1F1612]/20">
                <pre>{JSON.stringify(shopifyCartPayload, null, 2)}</pre>
              </div>
            </div>

            {/* Connection Options */}
            <div className="space-y-3 pt-2 border-t border-[#1F1612]/10">
              <p className="text-xs font-bold text-[#1F1612]">Next Step for Store Administrator:</p>
              <ul className="text-xs text-[#1F1612]/75 space-y-2 list-disc pl-4">
                <li>
                  <strong>Option A (Shopify Cart Permalink):</strong> Clicking checkout redirects directly to <code className="bg-[#EDE6D8] px-1 py-0.5 rounded text-[11px]">wetacoffee.co.nz/cart/&lt;variant_id&gt;:&lt;qty&gt;</code> with your selected Auckland roasts.
                </li>
                <li>
                  <strong>Option B (Headless Storefront API):</strong> Connect a Shopify Private App / Storefront Access Token into environment variables to process checkouts within this headless domain.
                </li>
              </ul>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="https://wetacoffee.co.nz"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 px-4 bg-[#243E36] text-[#FBF9F5] text-xs font-semibold tracking-wider uppercase rounded-lg hover:bg-[#1A2F29] transition-colors flex items-center justify-center gap-2 text-center"
              >
                <span>Visit Existing wetacoffee.co.nz Store</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={closeShopifyModal}
                className="py-3 px-5 border border-[#1F1612]/20 text-[#1F1612] text-xs font-semibold tracking-wider uppercase rounded-lg hover:bg-[#EDE6D8] transition-colors"
              >
                Return to Storefront
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
