import React from "react";
import Navbar from "../Navbar/Navbar";
import Sections from "../Sections/Sections";
import Footer from "../Footer/Footer";
import "./Home.css";

const Home = ({ categoryNames }) => {
  return (
    <>
      <Navbar />
      <section className="home-section">
        <div className="grid-div">
          <div className="cts ct-common">
            <img src="./src/assets/category_common.jpg" alt="" />
            <div className="ct-common-txt">
              <h1>We are hexashop</h1>
              <p>explore our shop</p>
              <button>Purchase now!</button>
            </div>
          </div>

          {categoryNames.map((item, index) => {
            return (
              <div key={index}>
                <div className={`cts ${item.name}`}>
                  <img
                    src={`./src/assets/category_${item.name}.jpg`}
                    alt={item.name}
                  />
                  <div className={`ct-sections ct-${item.name}-text`}>
                    <h1>{item.name.toUpperCase()}</h1>
                    <p>explore our shop</p>
                  </div>
                  <div className="hover-ct">
                    <h1>{item.name.toUpperCase()}</h1>
                    <p>{item.shortDescription}</p>
                    <a href={`#${item.name}`}>
                      <button className="purchase-btn">Purchase now!</button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <hr />
      <Sections categoryNames={categoryNames} />
      <Footer />
    </>
  );
};

export default Home;
