import React from "react";
import { Container } from "react-bootstrap";
import "../styles/AmbulanceService.css";
import ambulanceImage from "../assets/Ambulance.avif";

const AmbulanceService = () => {
  return (
    <section
      className="ambulance-section"
      style={{ backgroundImage: `url(${ambulanceImage})` }}
    >
      <Container>
        <div className="ambulance-content">
          <h2>Need Immediate Help?</h2>
          <div className="call-section">
            <h3>
              Call Us:{" "}
              <a href="tel:+1234567890" className="phone-number">
                +1 234 567 890
              </a>
            </h3>
          </div>
          <p>
            Our ambulance service is available 24/7 to ensure you receive prompt
            medical assistance whenever you need it.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default AmbulanceService;
