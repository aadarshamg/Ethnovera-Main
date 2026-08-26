"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { allProducts } from "@/lib/data";

type CartItem = {
  id: string;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  addItem: (id: string) => void;
  removeItem: (id: string) => void;
  setQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  hydrated: boolean;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "ethnovera-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) setItems(JSON.parse(saved));
    } catch {
      // Ignore storage errors and keep the cart usable.
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const value = useMemo<CartContextValue>(() => ({
    items,
    hydrated,
    addItem(id) {
      setItems((current) => {
        const existing = current.find((item) => item.id === id);
        if (existing) {
          return current.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
        }
        return [...current, { id, quantity: 1 }];
      });
    },
    removeItem(id) {
      setItems((current) => current.filter((item) => item.id !== id));
    },
    setQuantity(id, quantity) {
      setItems((current) => current.flatMap((item) => (item.id === id ? (quantity > 0 ? [{ ...item, quantity }] : []) : [item])));
    },
    clearCart() {
      setItems([]);
    }
  }), [hydrated, items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}

export function getCartProduct(id: string) {
  return allProducts.find((product) => product.id === id);
}
