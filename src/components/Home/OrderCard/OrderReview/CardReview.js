import React, { useEffect, useState } from 'react';
import BookingCard from '../BookingCard/BookingCard';


const CardReview = ({}) => {
  const [services,setServices] = useState([])
  useEffect(()=>{
    fetch("https://cleanerservice12.herokuapp.com/services")
    .then(res=>res.json())
    .then(data => {
      setServices(data);
    })
  },[])
    return (
      <section>
        <h2 className="text-center text-brand mt-3">Process Order</h2>
        <div className="row">
          {services.map((booking) => (
            <BookingCard booking={booking} key={booking._id}></BookingCard>
          ))}
        </div>
      </section>
    );
};

export default CardReview;