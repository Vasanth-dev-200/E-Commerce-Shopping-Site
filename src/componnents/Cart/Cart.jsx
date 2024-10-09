import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = ({ categoryNames }) => {
  const getcartData = () => {
    const data = localStorage.getItem("cartData");
    return data ? JSON.parse(data) : [];
  };

  const getSelectedProducts = (data, selectedData) => {
    return selectedData
      .map((selectedItem) => {
        const category = data.find(
          (category) => category.id === selectedItem.id
        );

        if (category) {
          const product = category.products.find(
            (product) => product.id === selectedItem.productId
          );

          if (product) {
            return {
              ...product,
            };
          }
        }
        return null;
      })
      .filter((item) => item !== null);
  };
  const cartData = getcartData();
  const cart = getSelectedProducts(categoryNames, cartData);
  return (
    <>
      <Navbar />
      <div className="cart-container">
        {cartData.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          cart.map((product, index) => {
            return (
              <div className="cart" key={product.key || index}>
                <img
                  src={product.url}
                  alt={product.productName}
                  draggable="false"
                />
                <div className="cart-flex">
                  <h2>Product : {product.productName}</h2>
                  <p>Rating : {product.rating}</p>
                  <p>Price : {product.price}</p>
                  <Link to={product.productUrl} target="_blank" rel="noopener noreferrer">
                    <button className="buy-button" role="button">
                      Buy Now
                    </button>
                  </Link>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Cart;
