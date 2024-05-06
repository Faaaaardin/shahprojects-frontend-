import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import Doctor from "../Assets/f1.jpeg";
import "../Styles/Hero.css";

function Hero() {
  return (
    <Carousel axis="vertical" autoPlay interval={2000} infiniteLoop>
      <div>
        <img className="hero-image1" src={Doctor} alt="Doctor" style={{ width: '85%', height: 'auto' }} />
      </div>
      <div>
        <img  src={Doctor} alt="Doctor" style={{ width: '85%', height: 'auto' }} />
      </div>
      <div>
        <img className="hero-image1" src={Doctor} alt="Doctor" style={{ width: '85%', height: 'auto' }} />
      </div>
      <div>
        <img className="hero-image1" src={Doctor} alt="Doctor" style={{ width: '85%', height: 'auto' }} />
      </div>
      <div>
        <img className="hero-image1" src={Doctor} alt="Doctor" style={{ width: '85%', height: 'auto' }} />
      </div>
      <div>
        <img className="hero-image1" src={Doctor} alt="Doctor" style={{ width: '85%', height: 'auto' }} />
      </div>
    </Carousel>
  );
}

export default Hero;
