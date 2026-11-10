import React from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { SearchModal } from './components/SearchModal';
import { ShopifySyncModal } from './components/ShopifySyncModal';

// Pages
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { SubscriptionsPage } from './pages/SubscriptionsPage';
import { OurStoryPage } from './pages/OurStoryPage';
import { SustainabilityPage } from './pages/SustainabilityPage';
import { WholesalePage } from './pages/WholesalePage';
import { ContactPage } from './pages/ContactPage';
import { CartPage } from './pages/CartPage';

const AppContent: React.FC = () => {
  const { currentPage, notification } = useCart();

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'shop':
        return <ShopPage />;
      case 'product-detail':
        return <ProductDetailPage />;
      case 'subscriptions':
        return <SubscriptionsPage />;
      case 'story':
        return <OurStoryPage />;
      case 'sustainability':
        return <SustainabilityPage />;
      case 'wholesale':
        return <WholesalePage />;
      case 'contact':
        return <ContactPage />;
      case 'cart':
        return <CartPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1F1612]">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="bg-[#1F1612] text-[#FBF9F5] px-4 py-3 rounded-xl shadow-xl text-xs font-semibold flex items-center gap-2 border border-[#EDE6D8]/20">
            <span className="w-2 h-2 rounded-full bg-[#C88A58]" />
            <span>{notification}</span>
          </div>
        </div>
      )}

      {/* Main Sticky Navigation */}
      <Navbar />

      {/* Active Page View */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Shared Editorial Footer */}
      <Footer />

      {/* Global Interactive Overlays */}
      <CartDrawer />
      <QuickViewModal />
      <SearchModal />
      <ShopifySyncModal />
    </div>
  );
};

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
