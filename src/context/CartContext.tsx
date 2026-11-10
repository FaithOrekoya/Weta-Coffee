import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, PageView } from '../types';
import { PRODUCTS } from '../data/products';

interface CartContextType {
  cart: CartItem[];
  addToCart: (
    product: Product,
    sizeLabel?: string,
    grindOption?: string,
    quantity?: number,
    isSubscription?: boolean,
    frequency?: string
  ) => void;
  updateQuantity: (itemId: string, newQuantity: number) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
  subtotal: number;
  itemCount: number;
  freeShippingThreshold: number;
  freeShippingProgress: number;
  remainingForFreeShipping: number;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  quickViewProduct: Product | null;
  openQuickView: (product: Product) => void;
  closeQuickView: () => void;
  isSearchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  isShopifyModalOpen: boolean;
  openShopifyModal: () => void;
  closeShopifyModal: () => void;
  notification: string | null;
  currentPage: PageView;
  setCurrentPage: (page: PageView) => void;
  selectedProductSlug: string | null;
  navigateToProduct: (slug: string) => void;
  navigateToCategory: (category: Product['category']) => void;
  selectedCategoryFilter: string | null;
  setSelectedCategoryFilter: (cat: string | null) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'weta_coffee_cart_v1';
const FREE_SHIPPING_THRESHOLD = 50.0;

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    // Default initial cart with One Tree Hill Blend
    return [
      {
        id: 'one-tree-hill-blend-200g-whole-beans-false',
        product: PRODUCTS[0],
        size: '200g Bag',
        grind: 'Whole Beans',
        price: 14.20,
        quantity: 2,
        isSubscription: false
      }
    ];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isShopifyModalOpen, setIsShopifyModalOpen] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedProductSlug, setSelectedProductSlug] = useState<string | null>(null);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string | null>(null);

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  // Window scroll to top on page switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, selectedProductSlug]);

  const addToCart = (
    product: Product,
    sizeLabel?: string,
    grindOption?: string,
    quantity: number = 1,
    isSubscription: boolean = false,
    frequency?: string
  ) => {
    const chosenSize = sizeLabel || (product.sizes && product.sizes[0] ? product.sizes[0].label : 'Standard');
    const chosenGrind = grindOption || (product.grindOptions && product.grindOptions[0] ? product.grindOptions[0] : 'Whole Beans');

    // Calculate base price from size
    let unitPrice = product.price;
    if (product.sizes) {
      const match = product.sizes.find(s => s.label === chosenSize);
      if (match) unitPrice = match.price;
    }
    if (isSubscription) {
      unitPrice = Number((unitPrice * 0.95).toFixed(2)); // 5% subscriber savings
    }

    const uniqueId = `${product.id}-${chosenSize}-${chosenGrind}-${isSubscription ? 'sub' : 'one'}`;

    setCart(prev => {
      const existing = prev.find(item => item.id === uniqueId);
      if (existing) {
        return prev.map(item =>
          item.id === uniqueId ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [
        ...prev,
        {
          id: uniqueId,
          product,
          size: chosenSize,
          grind: chosenGrind,
          price: unitPrice,
          quantity,
          isSubscription,
          frequency: isSubscription ? (frequency || 'Every 2 Weeks') : undefined
        }
      ];
    });

    // Visual notification toast
    setNotification(`Added "${product.name}" to your bag`);
    setTimeout(() => {
      setNotification(null);
    }, 3200);

    // Open cart drawer so user sees clear feedback
    setIsCartOpen(true);
  };

  const updateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCart(prev =>
      prev.map(item => (item.id === itemId ? { ...item, quantity: newQuantity } : item))
    );
  };

  const removeFromCart = (itemId: string) => {
    setCart(prev => prev.filter(item => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const freeShippingProgress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const openQuickView = (product: Product) => setQuickViewProduct(product);
  const closeQuickView = () => setQuickViewProduct(null);

  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => setIsSearchOpen(false);

  const openShopifyModal = () => setIsShopifyModalOpen(true);
  const closeShopifyModal = () => setIsShopifyModalOpen(false);

  const navigateToProduct = (slug: string) => {
    setSelectedProductSlug(slug);
    setCurrentPage('product-detail');
    closeQuickView();
    closeCart();
  };

  const navigateToCategory = (category: Product['category']) => {
    setSelectedCategoryFilter(category);
    setCurrentPage('shop');
    closeCart();
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        subtotal,
        itemCount,
        freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
        freeShippingProgress,
        remainingForFreeShipping,
        isCartOpen,
        openCart,
        closeCart,
        quickViewProduct,
        openQuickView,
        closeQuickView,
        isSearchOpen,
        openSearch,
        closeSearch,
        isShopifyModalOpen,
        openShopifyModal,
        closeShopifyModal,
        notification,
        currentPage,
        setCurrentPage,
        selectedProductSlug,
        navigateToProduct,
        navigateToCategory,
        selectedCategoryFilter,
        setSelectedCategoryFilter
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
