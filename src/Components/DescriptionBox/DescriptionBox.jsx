import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionBox">
      <div className="descriptionBox-navigator">
        <div className="descriptionBox-nav-box">Description</div>
        <div className="descriptionBox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionBox-description">
        <p>
          Welcome to Shoppers, your trusted destination for hassle-free online
          shopping. We bring you a wide range of quality products—carefully
          selected to match your lifestyle—at prices you'll love. Our mission is
          simple: make shopping easy, secure, and enjoyable. From browsing to
          delivery, we're here to give you a seamless experience backed by
          reliable service, fast shipping, and customer care you can count on.
          At Shoppers, you're not just a customer—you're part of our community.
          Thank you for shopping with us!
        </p>
        <p>In addition to products, an eCommerce site also has helpful sections like “About Us,” “Contact Us,” and “Customer Support,” along with policies for shipping, returns, and refunds. Everything is built to give customers a smooth, trustworthy shopping experience from start to finish.</p>
      </div>
    </div>
  );
};

export default DescriptionBox;
