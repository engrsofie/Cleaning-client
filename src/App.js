import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home/Home';
import { createContext, useState } from "react";
import './components/Login/Login.css';
import Login from './components/Login/Login';
import Service from './components/Service/Service/Service';
import AddService from "./components/AddService/AddService";
import AddAdmin from "./components/AddAdmin/AddAdmin";
import AddOrder from "./components/AddOrder/AddOrder";
import Testimonial from "./components/Testimonial/Testimonial/Testimonial";
import AddTestimonial from "./components/AddTestimonial/AddTestimonial/AddTestimonial";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import OrderList from "./components/OrderList/OrderList/OrderList";
import ServiceList from "./components/ServiceList/ServiceList/ServiceList";

export const UserContext = createContext();

export const EmailUserContext = createContext();
export default function BasicExample() {
  const [emailUser, setEmailUser] = useState([]);
  const [signedInUser, setSignedInUser] = useState({});

  return (
    <EmailUserContext.Provider value={[emailUser, setEmailUser]}>
      <UserContext.Provider value={[signedInUser, setSignedInUser]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/service">
              <Service></Service>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/manageService">
              <ServiceList></ServiceList>
            </PrivateRoute>
            <Route path="/addService">
              <AddService></AddService>
            </Route>
            <PrivateRoute path="/orderList">
              <OrderList></OrderList>
            </PrivateRoute>

            <PrivateRoute path="/addReview">
              <AddTestimonial></AddTestimonial>
            </PrivateRoute>
            <Route path="/testimonial">
              <Testimonial></Testimonial>
            </Route>
            <Route path="/addAdmin">
              <AddAdmin></AddAdmin>
            </Route>
            <PrivateRoute path="/order/:id">
              <AddOrder></AddOrder>
            </PrivateRoute>
          </Switch>
        </Router>
      </UserContext.Provider>
    </EmailUserContext.Provider>
  );
}
