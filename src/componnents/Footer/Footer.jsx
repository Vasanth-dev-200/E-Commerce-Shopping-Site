import React from "react";
import "./Footer.css"

const Footer = () => {
  const year = new Date().getFullYear();
  return <p className="footer">Copyright &#169; {year} Praveen Vasanthan. All rights reserved.</p>;
};

export default Footer;
