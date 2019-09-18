import React from "react";
import "../css/shop.css";
import amazonIcon from '../assets/img/amazon-icon.png'

const Shop = React.forwardRef((props, shopRef) => {
  return (
    <div className="shop" ref={shopRef}>
      <div className="title-container">
        <div className="title">Shop</div>
      </div>
      <div className="text-container">
        <div className="shop-text">
          If you would like to purchase a physical copy of The Boogeyman
          Investivation you can find it on{" "}
          <a
            className="link"
            href="https://www.amazon.com/Boogeyman-Investigation-Scott-Littleton-ebook/dp/B072MWK7DY/"
          >amazon.com{" "}
            <img src={amazonIcon} alt="amazonIcon" className="shop-icon"/>
          </a>
        </div>
      </div>
    </div>
  );
});

export default Shop;
