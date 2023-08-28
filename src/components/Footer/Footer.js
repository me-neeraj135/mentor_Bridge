import React from "react";

import {
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillFacebook,
} from "react-icons/ai";
import { BiLogoInstagramAlt } from "react-icons/bi";

import "./footer.css";
const Footer = () => {
  let iconStyles = { color: "white", fontSize: "3.6rem" };
  return (
    <div className="footer bgColor">
      <div className="footer_container">
        <ul className="footer_icons">
          <li>
            <AiFillLinkedin style={iconStyles} />
          </li>
          <li>
            <BiLogoInstagramAlt style={iconStyles} />
          </li>
          <li>
            <AiFillTwitterSquare style={iconStyles} />
          </li>
          <li>
            <AiFillFacebook style={iconStyles} />
          </li>
        </ul>
        <div className="footer_links">
          <ul>
            <li className="under_line">Coutact us</li>
            <li className="under_line">Privacy policy</li>
            <li className="under_line">Terms of use</li>
          </ul>
          <ul>
            <li>Help senter</li>
            <li>About us</li>
            <li>FAQs</li>
          </ul>
        </div>
      </div>
      <div className="copyrigthBox">
        <small>
          {" "}
          <>&#169;</>
          2023{" "}
          <span>
            M<u>entobridge</u>{" "}
          </span>
          .All right reserved.
        </small>
      </div>
    </div>
  );
};

export default Footer;
