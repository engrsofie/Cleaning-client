import React from 'react';
import card1 from '../../../images/card1.jpg'
import card2 from '../../../images/card2.jpg'
import card3 from "../../../images/card3.jpg";
import card4 from '../../../images/card4.jpg'
import card5 from '../../../images/card5.jpg'
import card6 from "../../../images/card6.JPG";
import css from './Services.css'

const Services = () => {
  function order() {
    console.log("order now");
  }
    return (
      <section>
        <h2 className="text-center">See our projects</h2>
        <div class="row row-cols-1 row-cols-md-3 mt-5">
          <div class="col">
            <div class="card-size card ">
              <img src={card1} class="card-img-top" alt="..."></img>
              <button onClick={order} class="btn btn-info">
                Take a look
              </button>
            </div>
          </div>
          <div class="col">
            <div class="card-size card ">
              <img src={card2} class="card-img-top" alt="..."></img>
              <button onClick={order} class="btn btn-info">
                Take a look
              </button>
            </div>
          </div>
          <div class="col">
            <div class="card-size card ">
              <img src={card3} class="card-img-top" alt="..."></img>
              <button onClick={order} class="btn btn-info">
                Take a look
              </button>
            </div>
          </div>
        </div>
        <section>
          <div class="row row-cols-1 row-cols-md-3 mt-5">
            <div class="col">
              <div class="card-size card ">
                <img src={card4} class="card-img-top" alt="..."></img>
                <button onClick={order} class="btn btn-info">
                  Take a look
                </button>
              </div>
            </div>
            <div class="col">
              <div class="card-size card ">
                <img src={card5} class="card-img-top" alt="..."></img>
                <button onClick={order} class="btn btn-info">
                  Take a look
                </button>
              </div>
            </div>
            <div class="col">
              <div class="card-size card ">
                <img src={card6} class="card-img-top" alt="..."></img>
                <button onClick={order} class="btn btn-info">
                  Take a look
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
};
export default Services;