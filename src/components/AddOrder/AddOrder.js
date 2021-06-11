import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import OrderForm from '../OrderForm/OrderForm';
import SideBar from '../SideBar/SideBar';

const AddOrder = () => {
    const { id } = useParams();
    const [service, setService] = useState({});
console.log(service);
     useEffect(() => {
       fetch(`https://cleanerservice12.herokuapp.com/serviceBook/${id}`)
         .then((res) => res.json())
         .then((data) => {
           setService(data);
         });
     }, []);
    return (
      <div className="row">
        <div className="col-md-3">
          <SideBar></SideBar>
        </div>
        <div className="col-md-9">
          <OrderForm service={service}></OrderForm>
        </div>
      </div>
    );
};

export default AddOrder;