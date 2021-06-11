import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Stripe from '../Stripe/Stripe/Stripe'

const OrderForm = ({service}) => {
     const [orders, setOrders] = useState(null);
     console.log(orders);
     const {
       register,
       handleSubmit,
       formState: { errors },
     } = useForm();

     const onSubmit = (data) => {
       // console.log(data);
       setOrders(data);
       
       
     };

      //  const handleOrder = () => {
         
      //  };
    return (
      <div>
        <h2>Order form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              className="form-control"
              type="text"
              {...register("name", { required: true })}
              placeholder="Name"
            />
            {errors.name && (
              <span style={{ color: "red" }}>This field is required</span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              className="form-control"
              type="email"
              {...register("email", { required: true })}
              placeholder="email"
            />
            {errors.email && (
              <span style={{ color: "red" }}>This field is required</span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="service" className="form-label">
              Your service here
            </label>
            <input
              className="form-control"
              value={service.name}
              type="text"
              {...register("service", { required: true })}
              placeholder="email"
            />
            {errors.service && (
              <span style={{ color: "red" }}>This field is required</span>
            )}
          </div>
          <input className=" " type="submit" value="Submit" />
        </form>
        <div className="col-md-6 mt-5">
          <Stripe order={orders}></Stripe>
        </div>
      </div>
    );
};

export default OrderForm;