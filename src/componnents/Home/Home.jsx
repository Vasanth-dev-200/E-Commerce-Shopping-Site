import React from "react";
import Navbar from "../Navbar/Navbar";
import Sections from "../Sections/Sections";
import "./Home.css"

const Home = ({ categoryNames }) => {


    return (
        <>
            <Navbar />
            {/* Home Page */}
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
                                    <img src={`./src/assets/category_${item.name}.jpg`} alt={item.name} />
                                    <div className={`ct-sections ct-${item.name}-text`}>
                                        <h1>{item.name.toUpperCase()}</h1>
                                        <p>explore our shop</p>
                                    </div>
                                    <div className="hover-ct">
                                        <h1>{item.name.toUpperCase()}</h1>
                                        <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                        <button>Purchase now!</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
            <hr />
            <Sections categoryNames={categoryNames} />
        </>
    )
}

export default Home;