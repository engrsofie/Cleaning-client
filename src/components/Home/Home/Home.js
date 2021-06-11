import React from 'react';
import Header from '../Header/Header';
import ServiceStaff from '../ServiceStaff/ServiceStaff';
import ServiceType from '../ServiceType/ServiceType';
import Footer from '../../Shared/Footer/Footer';
import Testimonial from '../../Testimonial/Testimonial/Testimonial';

const Home = () => {
    return (
      <div className=" mt-3">
        <Header></Header>
        <div className="container mt-5">
          <ServiceType></ServiceType>
          <ServiceStaff></ServiceStaff>
          <Testimonial></Testimonial>
          <Footer></Footer>
        </div>
      </div>
    );
};

export default Home;