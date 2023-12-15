import React from "react";
import { useCart } from "../context/ShopCartContext.js";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  const { count } = useCart();
  return (
    <header className="container mx-auto py-5 flex justify-between items-center">
      <a href="/">logo</a>

      <div className="relative">
        <NavLink to="/cart" className="text-2xl hover:text-[red]">
          <img src="/icons/shopping_cart.svg" />
        </NavLink>
        <span className="absolute bottom-[-10px] right-[-10px] bg-red-500 text-white w-[20px] h-[20px] flex items-center justify-center rounded-full">
          {count}
        </span>
      </div>
    </header>
  );
};

export default NavBar;
