import React from "react";
import {NavLink} from 'react-router-dom'
import Search from "./Search";
import HeaderCart from "./HeaderCart";
export default function HeaderUI() {


  return (
    <div className="navbar">
      <div className="logo">
        <NavLink to='/'><i class="fas fa-star"></i></NavLink>
      </div>
      <div className="search-cart">
        <Search />
        <HeaderCart />
      </div>
    </div>
  );
}
