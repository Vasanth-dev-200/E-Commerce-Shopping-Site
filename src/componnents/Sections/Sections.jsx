import "./Sections.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as far } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as fas } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Sections = ({ categoryNames }) => {
  const [bookmarkedItems, setBookmarkedItems] = useState([]);

  useEffect(() => {
    const cartData = getcartData();
    if (cartData) {
      setBookmarkedItems(cartData);
    }
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1200, min: 950 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 950, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  const getcartData = () => {
    const data = localStorage.getItem("cartData");
    return data ? JSON.parse(data) : [];
  };

  const handleClick = (itemId, productId) => {
    const newCartValue = { id: itemId, productId: productId };
    const cartData = getcartData();

    const itemIndex = cartData.findIndex(
      (data) =>
        newCartValue.id === data.id && newCartValue.productId === data.productId
    );

    if (itemIndex > -1) {
      cartData.splice(itemIndex, 1);
    } else {
      cartData.push(newCartValue);
    }

    localStorage.setItem("cartData", JSON.stringify(cartData));
    setBookmarkedItems(cartData);
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  

  return (
    <>
      {categoryNames.map((item) => {
        return (
          <div key={item.id} id={item.name}>
            <div className="pdt-container">
              <div className={item.name}>
                <h1 className="pdt-heading">{capitalizeFirstLetter(item.name)}</h1>
                <p className="pdt-p">{item.description}</p>
              </div>
              <Carousel
                className="carousel-div"
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                removeArrowOnDeviceType={["mobile"]}
              >
                {item.products.map((product) => {
                  const isBookmarked = bookmarkedItems.some(
                    (bookmarkedItem) =>
                      bookmarkedItem.id === item.id &&
                      bookmarkedItem.productId === product.id
                  );

                  return (
                    <div className="card" key={product.id}>
                      <img src={product.url} alt={product.productName} draggable="false" />
                      <div className="card-body">
                        <div className="name-price">
                          <h2 className="product-name">{product.productName}</h2>
                          <p className="rating-p">{product.rating}</p>
                        </div>
                        <div className="name-price">
                          <p className="price-p">{product.price}</p>
                          <FontAwesomeIcon
                            icon={isBookmarked ? fas : far}
                            onClick={() => handleClick(item.id, product.id)}
                            size="xl"
                            className="bookmark"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default Sections;
