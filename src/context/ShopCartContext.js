import { useState, useContext, createContext, useEffect } from "react";

const ShopContext = createContext();

const ShopCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(0);
  
  useEffect(()=>{
    setCount(cartItems.length)
  }, [cartItems])
  return (
    <ShopContext.Provider value={{ cartItems, setCartItems, count, setCount }}>
      {children}
    </ShopContext.Provider>
  );
};
export default ShopCartProvider;

export const useCart = () => {
  return useContext(ShopContext);
};
