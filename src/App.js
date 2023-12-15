import "./App.css";

import { Routes, Route, NavLink } from "react-router-dom";
import Shop from "./components/Shop.js";
import NavBar from "./components/NavBar.js";
import Cart from './components/Cart.js'
import NotFound from "./components/NotFound";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/shop" element={<Shop />} />
        <Route path='cart' element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
