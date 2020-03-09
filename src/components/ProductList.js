import React, { useContext } from "react";
import { ShoppingContext } from "./Home";
import Filter from "./filterComponents/Filter";
import { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import Sorting from './filterComponents/Sorting'

function ProductList() {
  const [addToCart, productList] = useContext(ShoppingContext);
  return (
    <div>
    <div className='hide4Web'>
    <Filter />
    </div>
      <div className="row">
        <div className="filterColumn hide4Mobile">
          <div className="sideMenuFilterBody">
            <span>Filter</span>
            <Range defaultValue={[100, 1000]} min={100} max={1000} />
            <button className='applyBtn'>Apply</button>
          </div>
          <div className='mt-4'>
             <Sorting/>
          </div>
        </div>
        <div className="productContainer">
          {productList.map(_ => (
            <div key={_.id}>
              <div className="card">
                <img src={_.img_url} class="card-img-top" alt="..." />
                <div className="card-body">
                  <h6 className="card-title">{_.name}</h6>
                  <div className="priceContainer">
                    <p className="card-text">
                      ₹{_.price - (_.price / 100) * _.discount}
                    </p>
                    <p className="card-text oldPrice">₹{_.price}</p>
                    <p className="card-text discountColor">{_.discount}% OFF</p>
                  </div>
                  <button className="cartBtn" onClick={() => addToCart(_)}>
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
