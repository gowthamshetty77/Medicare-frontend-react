import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import medicareLogo from "../assets/medicare-logo.png";
import { FaTwitter, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="footer">
      <Container>
        <Row className="gy-4">
          {/* Logo and Description */}
          <Col lg={3} md={6}>
            <div className="footer-logo">
              <img src={medicareLogo} alt="Medicare Logo" className="mb-3" />
              <p className="footer-description">
                Your trusted partner in health and wellness, offering a wide
                range of medical supplies and services for your well-being.
              </p>
            </div>
          </Col>

          {/* Shop by Category */}
          <Col lg={3} md={6}>
            <h4 className="footer-title">Shop by Category</h4>
            <ul className="footer-links">
              <li>
                <a href="#medications">Medications</a>
              </li>
              <li>
                <a href="#health-supplements">Health Supplements</a>
              </li>
              <li>
                <a href="#medical-equipment">Medical Equipment</a>
              </li>
              <li>
                <a href="#personal-care">Personal Care</a>
              </li>
              <li>
                <a href="#wellness-products">Wellness Products</a>
              </li>
              <li>
                <a href="#health-monitoring">Health Monitoring Devices</a>
              </li>
            </ul>
          </Col>

          {/* Customer Service */}
          <Col lg={2} md={6}>
            <h4 className="footer-title">Customer Service</h4>
            <ul className="footer-links">
              <li>
                <a href="#help-center">Help Center</a>
              </li>
              <li>
                <a href="#faqs">FAQs</a>
              </li>
              <li>
                <a href="#appointment">Appointment</a>
              </li>
              <li>
                <a href="#returns">Returns & Exchanges</a>
              </li>
              <li>
                <a href="#track-status">Track Your Status</a>
              </li>
            </ul>
          </Col>

          {/* Get in Touch */}
          <Col lg={2} md={6}>
            <h4 className="footer-title">Get in Touch</h4>
            <ul className="footer-contact">
              <li>
                <a href="tel:080-45678765">080-45678765</a>
              </li>
              <li>
                <a href="mailto:support@medicare.com">support@medicare.com</a>
              </li>
            </ul>
          </Col>

          {/* Newsletter */}
          <Col lg={2} md={6}>
            <h4 className="footer-title">Newsletter</h4>
            <p className="newsletter-text">
              Subscribe for health tips, special offers, and the latest medical
              news.
            </p>
          </Col>
        </Row>

        {/* Social Media Links */}
        <div className="footer-social">
          <h4 className="social-title">Follow Us</h4>
          <div className="social-links">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>
            © {currentYear} Medicare Pvt Ltd. All rights reserved. |
            <Link to="/privacy"> Privacy Policy</Link> |
            <Link to="/terms"> Terms & Conditions</Link>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
