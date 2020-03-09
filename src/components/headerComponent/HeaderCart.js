import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../Home";
export default function HeaderCart() {
  const [cartList] = useContext(CartContext);

  return (
    <div>
      <NavLink to="/cart">
        <i class="fas fa-shopping-cart"></i>
      </NavLink>
      {cartList===undefined?null:cartList.length > 0 && (
        <div className="cartLabel">{cartList.length}</div>
      )}
    </div>
  );
}
