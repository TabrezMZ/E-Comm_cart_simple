import { createContext, useState } from "react";

export const cartContext = createContext();

export const CartProvider = ({ children }) => {
  const [productCart, setProductCart] = useState([]);
  const [productWishList, setProductWishListt] = useState([]);
  // console.log(productCart);
  return (
    <cartContext.Provider
      value={{
        productCart,
        setProductCart,
        setProductWishListt,
        productWishList
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
