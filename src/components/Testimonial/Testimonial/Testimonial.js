import React, { useEffect, useState } from 'react';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import img from '../../../images/card2.jpg'
import './Testimonal.css'


const reviewData = [
  {
    name: "jkdn",
    img: img,
    review: "kjdghflkjlkgj",
  },
  {
    name: "jkdn",
    img: img,
    review: "kjdghflkjlkgj",
  },
  {
    name: "jkdn",
    img: img,
    review: "kjdghflkjlkgj",
  },
];



const Testimonial = () => {
     const [reviews, setReviews] = useState([]);
     useEffect(() => {
       fetch("https://cleanerservice12.herokuapp.com/reviews")
         .then((res) => res.json())
         .then((data) => {
           setReviews(data);
         });
     }, []);
    return (
      <div className="mt-5">
        <h2 className="text-center mb-4">Testimonial</h2>
        <div className="container">
          <div className="row">
            {reviews.map((review) => (
              <TestimonialCard review={review}></TestimonialCard>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Testimonial;