import React from "react";
import items from "../items.json";
import { useCart } from "../context/ShopCartContext.js";
const Shop = () => {
  const { cartItems, setCartItems } = useCart();
  const handelBuy = p => {
    setCartItems([...cartItems, p]);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 container mx-auto md:gap-[20px] w-fit space-y-[30px] md:space-y-0">
      {items.map(p => (
        <div key={p.id} className="flex flex-col  md:flex-col bg-white ">
          <img src={p.imgUrl} alt="product" className="h-[200px]" />
          <div className="flex flex-row justify-between items-center py-[20px] mx-5">
            <p className="">{p.name}</p>
            <span className="opacity-75">{p.price}$</span>
          </div>

          <button
            className="py-[5px] bg-[#68b5ff] px-[40px] py-[3px] text-white"
            onClick={() => handelBuy(p)}
          >
            Buy
          </button>
        </div>
      ))}
      
    </div>
  );
};

export default Shop;
