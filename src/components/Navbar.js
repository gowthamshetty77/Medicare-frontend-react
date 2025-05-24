import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import TopContactBar from "./TopContactBar";

const Navbar = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const openSignupModal = () => {
    setIsSignupModalOpen(true);
  };

  const closeSignupModal = () => {
    setIsSignupModalOpen(false);
  };

  return (
    <>
      <TopContactBar />
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a href="#about-section" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#departments" className="nav-link">
                  Departments
                </a>
              </li>
              <li className="nav-item">
                <a href="#blog" className="nav-link">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
            <div className="auth-buttons">
              <button
                onClick={openSignupModal}
                className="btn btn-outline-light me-2"
              >
                Signup
              </button>
              <button onClick={openLoginModal} className="btn btn-light">
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
      <SignupModal isOpen={isSignupModalOpen} onClose={closeSignupModal} />
    </>
  );
};

export default Navbar;
