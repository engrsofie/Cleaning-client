import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import Services from "../Services/Services";
import CardReview from '../OrderCard/OrderReview/CardReview';

const Header = () => {
    return (
      <div>
        <Navbar></Navbar>
        <div className="container mt-3">
          <HeaderMain></HeaderMain>
          <CardReview></CardReview>
          <Services></Services>
        </div>
      </div>
    );
};

export default Header;