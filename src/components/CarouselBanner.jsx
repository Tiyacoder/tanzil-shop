import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselBanner = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/1200x400/?earth,nature"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Welcome to Planet Earth Store</h3>
          <p>Eco-Friendly Products for a Better Tomorrow</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselBanner;
