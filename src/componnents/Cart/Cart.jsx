import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Cart.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";


const Cart = ({ categoryNames }) => {
  const [cartData, setCartData] = useState([]);

  const getcartData = () => {
    const data = localStorage.getItem("cartData");
    return data ? JSON.parse(data) : [];
  };

  useEffect(() => {
    const data = getcartData();
    const cart = getSelectedProducts(categoryNames, data);
    if (data) {
      setCartData(cart);
    }
  }, []);

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

  const handleOnclick = (id) => {
    const oldData = getcartData();
    const newData = oldData.filter((item) => {
      return item.productId !== id;
    });
    const newCartData = cartData.filter((item) => {
      return item.id !== id;
    });
    
    localStorage.setItem("cartData", JSON.stringify(newData));
    setCartData(newCartData);
  };

  return (
    <>
      <Navbar />
      <div className="cart-container">
        {cartData.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          cartData.map((product, index) => {
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
                  <Link
                    to={product.productUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="buy-button" role="button">
                      Buy Now
                    </button>
                  </Link>
                </div>
                <div className="icon-div">
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    size="2xl"
                    className="delete-icon"
                    onClick={() => {
                      handleOnclick(product.id);
                    }}
                  />
                </div>
              </div>
            );
          })
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
