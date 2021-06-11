import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light  ">
      <Link className="navbar-brand ms-5" to="/">
        CLEANING SERVICE
      </Link>
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link ms-5" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link ms-5" href="#">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link ms-5 " to="/service">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/manageService" className="nav-link ms-5 ">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link ms-5 ">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link ms-5 " href="#">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
