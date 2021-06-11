import React from "react";

const TestimonialCard = ({ review }) => {
  console.log(review);
  return (
    <div className="col-md-4 gy-3">
      <div className="review-card p-4 text-center">
        <img
          className="img-fluid"
          src={`data:image/png;base64,${review.image.img}`}
          alt=""
        />
        <h4>{review.name}</h4>
        <p>{review.review}</p>
        
      </div>
    </div>
  );
};

export default TestimonialCard;
