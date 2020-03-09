import React, { useContext } from "react";
import { CartContext } from "./Home";
export default function Cart() {
  const [
    cartList,
    removeFromCart,
    state,
    increaseQty,
    decreaseQty,
    price,
    discount,
    totalPrice
  ] = useContext(CartContext);
  return (
    <div className="cartContainer">
      <div className="row">
        <div className="col-lg-8 col-xs-12">
          {cartList.length > 0 &&
            cartList.map(_ => {
              return (
                <div key={_.data.id}>
                  <div className="card">
                    <div className="card-body" style={{ display: "flex" }}>
                      <div className="cartImgContainer">
                        <img
                          src={_.data.img_url}
                          class="card-img-top"
                          alt="..."
                        />
                      </div>
                      <div style={{ width: "100%"}}>
                        <h6 className="card-title">
                          {_.data.name}
                        </h6>
                       <div className='cartBody4Web'>
                       <div className="priceContainer">
                          <p className="card-text">
                            ₹
                            {_.data.price -
                              (_.data.price / 100) * _.data.discount}
                          </p>
                          <p className="card-text oldPrice">₹{_.data.price}</p>
                          <p className="card-text discountColor">
                            {_.data.discount}% OFF
                          </p>
                        </div>
                        <div>
                          <button
                            className="qty"
                            onClick={() =>
                              decreaseQty(_.data.price, _.data.discount)
                            }
                          >
                            -
                          </button>
                          <input
                            type="text"
                            value={state}
                            className="qtyInput"
                          />
                          <button
                            className="qty"
                            onClick={() =>
                              increaseQty(_.data.price, _.data.discount)
                            }
                          >
                            +
                          </button>
                        </div>
                        <button
                          className="cartRemoveBtn"
                          onClick={() => removeFromCart(_.data.id)}
                        >
                          Remove
                        </button>
                       </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="col-lg-4 col-xs-12">
          {cartList.length > 0 && (
            <div class="card mb-3">
              <div class="card-header">Product Details</div>
              <div class="card-body">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>
                    Price (Item {cartList.length > 0 && cartList.length}) :{" "}
                  </span>
                  <span>₹{price}</span>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>
                    Discount<span style={{ marginLeft: "49px" }}>:</span>
                  </span>
                  <span>₹{discount}</span>
                </div>
              </div>
              <div
                class="card-footer"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div>Total Payable</div>
                <div>₹{totalPrice}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
