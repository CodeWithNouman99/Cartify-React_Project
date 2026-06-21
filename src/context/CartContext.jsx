import { createContext, useContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  // ADD TO CART
  const addToCart = (product) => {
  console.log("Received product:", product);

  // HARD STOP if invalid
  if (!product || typeof product !== "object") {
    console.error("Invalid product blocked:", product);
    return;
  }

  const productId = product.id;

  if (!productId) {
    console.error("Product missing id:", product);
    return;
  }

  const existingItemIndex = cartItem.findIndex(
    (item) => item.id === productId
  );

  if (existingItemIndex !== -1) {
    const updatedCart = [...cartItem];
    updatedCart[existingItemIndex].quantity =
      (updatedCart[existingItemIndex].quantity || 1) + 1;

    setCartItem(updatedCart);
  } else {
    setCartItem([...cartItem, { ...product, quantity: 1 }]);
  }
};

  // REMOVE ITEM
  const removeFromCart = (index) => {
    setCartItem(cartItem.filter((_, i) => i !== index));
  };

  // UPDATE QUANTITY (SAFE)
  const updateQuantity = (index, quantity) => {
    if (!cartItem[index]) return;

    const updated = [...cartItem];
    updated[index].quantity = quantity;

    setCartItem(updated);
  };

  return (
    <CartContext.Provider
      value={{
        cartItem,
        addToCart,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);