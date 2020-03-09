import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";
import ProductList from "./ProductList";
import Cart from "./Cart";

export const ShoppingContext = createContext();
export const CartContext = createContext();
export const SortingContext = createContext();
export const FilterContext = createContext();

export default function Home() {
  const [productList, setProductList] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [state, setState] = useState(1);
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [sorting, setSorting] = useState("");

  useEffect(() => {
    fetch("https://api.myjson.com/bins/qzuzi")
      .then(response => response.json())
      .then(data => setProductList(data))
      .catch(err => console.log(err));
  }, []);

  const applyFilter = () => {
    if(sorting==='reset'){
      const reset=[...productList]
      setProductList(reset.sort((a, b) => a.id-b.id));
    }
    else if (sorting === "high") {
      const highData=[...productList]
      setProductList(highData.sort((a, b) => b.price - a.price));
    } else if (sorting === "low") {
      const lowData=[...productList]
      setProductList(lowData.sort((a, b) => a.price - b.price));
    } else if (sorting === "discount") {
      const discountData=[...productList]
      setProductList(
        discountData.sort((a, b) => b.discount - a.discount)
      );
    }
  };

  const addToCart = data => {
    if (cartList.length <= 0) {
      setPrice(0);
      setDiscount(0);
      setState(1);
      setTotalPrice(0);
    }
    const itemExist = cartList.some(_ => {
      return _.data.id === data.id;
    });
    if (itemExist) {
      setCartList([...cartList]);
    } else {
      setCartList([...cartList, { data }]);
      setPrice(prevData => prevData + data.price);
      setDiscount(
        prevDiscount =>
          prevDiscount +
          (data.price - (data.price - (data.price / 100) * data.discount))
      );
      setTotalPrice(
        prevTotalPrice =>
          prevTotalPrice + (data.price - (data.price / 100) * data.discount)
      );
    }
  };

  const removeFromCart = id => {
    if (cartList.length > 0) {
      const data = cartList.filter(_ => _.data.id !== id);
      const updatePrice = cartList.filter(
        _ => _.data.id === id && _.data.price
      );
      setCartList(data);
      setPrice(prevPrice => prevPrice - updatePrice[0].data.price);
      setDiscount(prevDiscount => {
        return (
          prevDiscount -
          (updatePrice[0].data.price -
            (updatePrice[0].data.price -
              (updatePrice[0].data.price / 100) * updatePrice[0].data.discount))
        );
      });
      setTotalPrice(
        prevTotalPrice =>
          prevTotalPrice -
          (updatePrice[0].data.price -
            (updatePrice[0].data.price / 100) * updatePrice[0].data.discount)
      );
    }
  };

  const increaseQty = (itemPrice, itemDiscount) => {
    setState(prevState => prevState + 1);
    setPrice(prevPrice => prevPrice + itemPrice);
    setDiscount(
      prevDiscount =>
        prevDiscount +
        (itemPrice - (itemPrice - (itemPrice / 100) * itemDiscount))
    );
    setTotalPrice(
      prevTotalPrice =>
        prevTotalPrice + (itemPrice - (itemPrice / 100) * itemDiscount)
    );
  };

  const decreaseQty = (itemPrice, itemDiscount) => {
    if (state <= 0) {
      setState(0);
    } else {
      setState(prevState => prevState - 1);
      setPrice(prevPrice => prevPrice - itemPrice);
      setDiscount(
        prevDiscount =>
          prevDiscount -
          (itemPrice - (itemPrice - (itemPrice / 100) * itemDiscount))
      );
      setTotalPrice(
        prevTotalPrice =>
          prevTotalPrice - (itemPrice - (itemPrice / 100) * itemDiscount)
      );
    }
  };

  return (
    <Router>
      <Switch>
        <ShoppingContext.Provider value={[addToCart, productList]}>
          <CartContext.Provider
            value={[
              cartList,
              removeFromCart,
              state,
              increaseQty,
              decreaseQty,
              price,
              discount,
              totalPrice
            ]}
          >
            <SortingContext.Provider value={[sorting, setSorting, applyFilter]}>
            <FilterContext.Provider>
              <Route
                exact
                path="/"
                render={() => <ShoppingCart body={<ProductList />} />}
              />
              <Route
                exact
                path="/cart"
                render={() => <ShoppingCart body={<Cart />} />}
              />
            </FilterContext.Provider>
            </SortingContext.Provider>
          </CartContext.Provider>
        </ShoppingContext.Provider>
      </Switch>
    </Router>
  );
}
