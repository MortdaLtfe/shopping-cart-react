import { useState } from "react";
import { useCart } from "../context/ShopCartContext.js";
import { NavLink } from "react-router-dom";
const Cart = () => {
  const { count, cartItems, setCartItems } = useCart();
  const [isSort, setIsSort] = useState(false);
  const countProduct = id => {
    var count = 0;
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === id) {
        count += 1;
      } else {
        continue;
      }
    }

    return count;
  };
  const handelDele = index => {
    const newArray = cartItems.filter((elemnt, i) => i !== index);
    setCartItems(newArray);
  };
  const sort = () => {
    isSort
      ? setCartItems(cartItems.sort((a, b) => a.price - b.price))
      : setCartItems(cartItems.sort((a, b) => b.price - a.price));

    setIsSort(!isSort);
  };
  return (
    <div className="flex justify-center items-center ">
      <div className="w-[560px] md:w-[900px] rounded-t-[5px] bg-[#424242] mx-auto text-white px-[12px] py-[12px] space-y-5 my-10">
        <NavLink to="/" className="cart flex gap-1 font-bold">
          <img src="/icons/keyboard_backspace.svg" className="text-white" />
          <p>Continue Shopping</p>
        </NavLink>
        <div className="flex justify-between items-center">
          <div className="text-[12px] space-y-1">
            <p>Shopping Cart</p>
            <p>You have {count} items in Your Cart</p>
          </div>
          <div className="flex justify-center items-center">
            <p className="text-[12px] hover:underline" onClick={sort}>
              <span className="opacity-80 ">Sort by</span>: price
            </p>
            <img
              src={isSort ? "/icons/expand_more.svg" : "/icons/expand_less.svg"}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 space-y-[15px]">
          {cartItems.map((p, index) => (
            <div className="item p-[10px] flex justify-between items-center">
              <div className="flex justify-center items-center space-x-[9px]">
                <img
                  src={p.imgUrl}
                  className="h-[70px] w-[70px] rounded-[5px]"
                />
                <div>
                  <p className="text-[16px] font-bold">{p.name}</p>
                  <p className="text-[10px] font-light">{p.info}</p>
                </div>
              </div>
              <div class="flex w-[30%] justify-around items-center">
                <p className="font-bold">{p.price}$</p>
                <img
                  src="/icons/delete.svg"
                  onClick={() => handelDele(index)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
