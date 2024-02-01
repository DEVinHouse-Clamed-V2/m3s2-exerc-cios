import { createContext, useState } from "react";

//context
export const CartContext = createContext([]);

//provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //adicionar
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  //remover
  const removeFromCart = (item) => {
    const newCart = cart.filter((itemOnCart) => itemOnCart.name !== item.name);

    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
