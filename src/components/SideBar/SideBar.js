import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import "./SideBar.css";
const SideBar = () => {
  const [signedInUser, setSignedInUser] = useContext(UserContext);
  const [admin, setIsAdmin] = useState(false);
  console.log(admin);

  useEffect(() => {
    fetch("https://cleanerservice12.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: signedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, []);
  return (
    <div className="sidebar">
      <div className="left left-menu p-5">
        <ul className="list-unstyled">
          <li>
            <Link to="/" className="sidebar-link">
              Home
            </Link>
          </li>{" "}
          {!admin ? (
            <div>
              <li>
                <Link className="sidebar-link">Book</Link>
              </li>{" "}
              <li>
                <Link to="/orderList" className="sidebar-link">
                  Booking list
                </Link>
              </li>{" "}
              <li>
                <Link to="/addReview" className="sidebar-link">
                  Review
                </Link>
              </li>{" "}
            </div>
          ) : (
            <div>
              <li>
                <Link to="/orderList" className="sidebar-link">
                  Order list
                </Link>
              </li>{" "}
              <li>
                <Link to="/addService" className="sidebar-link">
                  Add Service
                </Link>
              </li>{" "}
              <li>
                <Link to="/addAdmin" className="sidebar-link">
                  Make Admin
                </Link>
              </li>{" "}
              <li>
                <Link to="/manageService" className="sidebar-link">Manage service</Link>
              </li>{" "}
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
