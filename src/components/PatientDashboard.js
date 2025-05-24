import React, { useEffect, useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import "../styles/PatientDashboard.css";
import TopContactBar from "./TopContactBar";
import DoctorDepartments from "./DoctorDepartments";
import Footer from "./Footer";
import BookAppointment from "./BookAppointment ";
import PatientStatusModal from "./PatientStatusModal "; // Add this import
import { useLocation } from "react-router-dom";

function PatientDashboard() {
  // const location = useLocation();
  // useEffect(() => {
  //   if (location.hash === "#book-appointment") {
  //     const section = document.querySelector(location.hash);
  //     if (section) {
  //       setTimeout(() => {
  //         // Small timeout ensures DOM is ready
  //         section.scrollIntoView({ behavior: "smooth" });
  //       }, 100);
  //     }
  //   }
  // }, [location.hash]);

  const [showStatusModal, setShowStatusModal] = useState(false); // Add state

  return (
    <div className="header-container">
      <TopContactBar />

      <Navbar
        bg="primary"
        variant="dark"
        expand="lg"
        className="navigation-bar"
      >
        <Container>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="ms-auto"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href={`${process.env.REACT_APP_MEDICARE_BASE_URL}/patient-dashboard`}
                active
              >
                Home
              </Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href="#book-appointment">Book Appointment</Nav.Link>
              {/* Updated Status Link */}
              <Nav.Link onClick={() => setShowStatusModal(true)}>
                Status
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto align-items-center">
              <Nav.Link href="#logout">Logout</Nav.Link>
              <FaUserCircle className="user-icon" />
              <span className="user-name">Suresh</span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Add PatientStatusModal component */}
      <PatientStatusModal
        isOpen={showStatusModal}
        onClose={() => setShowStatusModal(false)}
      />

      <div className="welcome-section">
        <h1>Welcome to Medicare - Your Trusted Healthcare Portal</h1>
        <p>Find the best doctors and book appointments online.</p>
      </div>

      <DoctorDepartments />
      <BookAppointment />
      <Footer />
    </div>
  );
}

export default PatientDashboard;
