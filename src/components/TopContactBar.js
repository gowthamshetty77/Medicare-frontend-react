import React from "react";
import { Container } from "react-bootstrap";
import { BsTelephone } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import medicareLogo from "../assets/medicare-logo.png";
import "../styles/TopContactBar.css";

const TopContactBar = () => {
  return (
    <div className="top-contact-bar">
      <Container>
        <div className="contact-info">
          <div className="logo-section">
            <img src={medicareLogo} alt="Medicare Logo" className="top-logo" />
            <div className="brand-text">
              <h1>MEDICARE</h1>
              <p>Care for Better Health</p>
            </div>
          </div>
          <div className="contact-details">
            <div className="contact-item">
              <BsTelephone className="contact-icon" />
              <div className="contact-text">
                <p>Call us Today</p>
                <strong>080-45678765</strong>
              </div>
            </div>
            <div className="contact-item">
              <BiTime className="contact-icon" />
              <div className="contact-text">
                <p>Opening Hours</p>
                <strong>8:00AM to 5:00PM</strong>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopContactBar;
