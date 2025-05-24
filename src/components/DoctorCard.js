// DoctorCard.js
import React from "react";
import { Card, Button, Image } from "react-bootstrap";
import "../styles/DoctorCard.css"; // Create this CSS file
import { useLocation, useNavigate } from "react-router-dom";

function DoctorCard({ doctor }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBookAppointment = () => {
    if (location.pathname === "/patient-dashboard") {
      // If already on dashboard, scroll to section
      const section = document.querySelector("#book-appointment");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to dashboard first
      navigate("/patient-dashboard#book-appointment");
    }
  };
  return (
    <Card className="doctor-card h-100">
      <div className="doctor-image">
        <Image src={doctor.image} alt={doctor.name} fluid />
      </div>
      <Card.Body className="text-center">
        <Card.Title>{doctor.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {doctor.specialization}
        </Card.Subtitle>
        <Card.Text>{doctor.department}</Card.Text>
        <Button variant="primary" type="button" onClick={handleBookAppointment}>
          Book Appointment
        </Button>
      </Card.Body>
    </Card>
  );
}

export default DoctorCard;
