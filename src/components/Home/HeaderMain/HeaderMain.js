import React from 'react';
import glass from '../../../images/glass.jpg'
import floor from '../../../images/floor.jpg'
import room from '../../../images/room.jpg'
import './HeaderMain.css'
import { Carousel } from 'react-bootstrap';

const HeaderMain = () => {
    return (
      <div
        id="carouselExampleIndicators"
        class="row carousel slide"
        data-bs-ride="carousel"
      >
        <div className="col-md-4 my-3">
          <h3>
            YOU HAVE A THOUSAND REASON TO CHOOSE US FOR THOSE MESSED UP THINGS.
          </h3>
          <p>
            Sit amet consectetur adipisicing elit. Nesciunt eaque rem
            repellendus explicabo ratione aperiam voluptatem veniam, aut
            doloribus perferendis, molestiae at, consequatur quia unde porro?
            Vero dignissimos quam modi. Sed ut perspiciatis unde omnis iste
            natus error sit voluptatem accusantium doloremque laudantium, totam
            rem aperiam.
          </p>
          <button className="btn btn-success">GET AN SERVICES</button>
        </div>
        <div className="img-size col-md-8">
          <Carousel>
            <Carousel.Item>
              <img src={room} class="d-block w-100" alt="..."></img>
              <Carousel.Caption>
                <h3>House Cleaning Service</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={floor} class="d-block w-100" alt="..."></img>

              <Carousel.Caption>
                <h3>Floor Cleaning Service</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={glass} class="d-block w-100" alt="..."></img>

              <Carousel.Caption>
                <h3>Glass Cleaning Service</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
};

export default HeaderMain;