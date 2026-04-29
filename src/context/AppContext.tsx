import { createContext, useContext, useState, ReactNode } from 'react';

export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

type AppContextType = {
  cartItems: CartItem[];
  favorites: Set<number>;
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: number) => void;
  updateCartQuantity: (id: number, quantity: number) => void;
  toggleFavorite: (id: number) => void;
  isFavorited: (id: number) => boolean;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateCartQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity } : item));
    }
  };

  const toggleFavorite = (id: number) => {
    setFavorites(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const isFavorited = (id: number) => favorites.has(id);

  const clearCart = () => setCartItems([]);

  return (
    <AppContext.Provider
      value={{
        cartItems,
        favorites,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        toggleFavorite,
        isFavorited,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}
