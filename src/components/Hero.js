import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            {/* The hero image is set as background in CSS */}
          </div>
          <div className="col-lg-6 hero-content">
            <h1 className="display-4 fw-bold mb-4">
              Your Health is
              <br />
              Our Focus
            </h1>
            <p className="lead mb-4">
              Your health is our priority. Schedule an appointment today!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
