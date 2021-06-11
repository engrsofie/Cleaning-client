import React from "react";
import "./Footer.css";
import FooterCol from "../FooterCol/FooterCol";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const noNamed = [
    { name: "Emergency Cleaning", link: "/emergency" },
    { name: "Check Up", link: "/checkup" },
    { name: "Upholstery Cleaning", link: "/personal-treatment" },
    { name: "House Cleaning", link: "/tooth-extract" },
    { name: "Washing Dress", link: "/checkup" },
  ];
  const ourAddress = [
    { name: "New York - 101010 Hudson", link: "//google.com/map" },
    { name: "Yards", link: "//google.com/map" },
  ];
  const oralHealth = [
    { name: "Emergency Cleaning", link: "/emergency" },
    { name: "Check Up", link: "/checkup" },
    { name: "Upholstery Cleaning", link: "/personal-treatment" },
    { name: "House Cleaning", link: "/tooth-extract" },
    { name: "Carpet Cleaning", link: "/checkup" },
    { name: "Floor Check", link: "/checkup" },
    { name: "Bad Room clean", link: "/checkup" },
  ];
  const services = [
    { name: "Emergency Cleaning", link: "/emergency" },
    { name: "Check Up", link: "/checkup" },
    { name: "Apartment Cleaning", link: "/personal-treatment" },
    { name: "Upholstery Cleaning", link: "/tooth-extract" },
    { name: "Check Up", link: "/checkup" },
    { name: "Car Clean", link: "/checkup" },
    { name: "Glass Clean", link: "/checkup" },
  ];
  return (
    <footer className="footer-area clear-both">
      <div className="container pt-5">
        <div className="row py-5">
          <FooterCol key={1} menuTitle={"."} menuItems={noNamed} />
          <FooterCol key={2} menuTitle="Services" menuItems={services} />
          <FooterCol key={3} menuTitle="Oral Health" menuItems={oralHealth} />
          <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
            <ul className="social-media list-inline">
              <li className="list-inline-item">
                <a href="//facebook.com">
                  <FontAwesomeIcon
                    className="icon active-icon"
                    icon={faFacebookF}
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//google.com">
                  <FontAwesomeIcon className="icon" icon={faGooglePlusG} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//instagram.com">
                  <FontAwesomeIcon className="icon" icon={faInstagram} />
                </a>
              </li>
            </ul>
            <div className="mt-5">
              <h6>Call now</h6>
              <button className="btn btn-primary">+2025550295</button>
            </div>
          </FooterCol>
        </div>
        <div className="copyRight text-center">
          <p>Copyright {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
