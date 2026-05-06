import { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext(null);
const WISHLIST_KEY = 'glowmart-wishlist';

const loadWishlist = () => {
  try {
    const saved = localStorage.getItem(WISHLIST_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

export function WishlistProvider({ children }) {
  const [items, setItems] = useState(loadWishlist);

  useEffect(() => {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(items));
  }, [items]);

  const addToWishlist = (product) => {
    setItems(prev => {
      if (prev.find(i => i.productId === product.id)) return prev;
      return [...prev, {
        productId: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        image: product.images[0],
        slug: product.slug,
        addedAt: new Date().toISOString()
      }];
    });
  };

  const removeFromWishlist = (productId) => {
    setItems(prev => prev.filter(i => i.productId !== productId));
  };

  const isInWishlist = (productId) => items.some(i => i.productId === productId);

  const toggleWishlist = (product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <WishlistContext.Provider value={{
      items,
      addToWishlist,
      removeFromWishlist,
      isInWishlist,
      toggleWishlist,
      wishlistCount: items.length
    }}>
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlist = () => {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error('useWishlist must be used within WishlistProvider');
  return ctx;
};
