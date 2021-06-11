import React, { useEffect, useState } from 'react';
import SideBar from '../../SideBar/SideBar';
import ServiceListTable from '../ServiceListTable/ServiceListTable';

const ServiceList = () => {
     const [services, setServices] = useState([]);

     useEffect(() => {
       fetch("https://cleanerservice12.herokuapp.com/services")
         .then((res) => res.json())
         .then((data) => {
           setServices(data);
         });
     }, []);
    return (
      <div className="row">
        <div className="col-md-3">
          <SideBar></SideBar>
        </div>
        <div className="col-md-9">
          <ServiceListTable services={services}></ServiceListTable>
        </div>
      </div>
    );
};

export default ServiceList;