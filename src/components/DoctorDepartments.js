import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import DoctorCard from "./DoctorCard";
import "../styles/DoctorDepartments.css";
import doctor1Image from "../assets/doctor1.jpg";
import doctor2Image from "../assets/doctor2.jpg";
import doctor3Image from "../assets/doctor3.jpg";

import doctor4Image from "../assets/doctor4.jpg";
import doctor5Image from "../assets/doctor5.jpeg";
import doctor6Image from "../assets/doctor6.jpg";

const cardiologyDoctors = [
  {
    id: 1,
    name: "Dr. Swathi",
    specialization: "Experienced Cardiologist",
    department: "Cardiology",
    image: doctor1Image,
  },
  {
    id: 2,
    name: "Dr. Sanvi",
    specialization: "Expert Cardiologist",
    department: "Cardiology",
    image: doctor2Image,
  },
  {
    id: 3,
    name: "Dr. Rakesh",
    specialization: "Expert Cardiologist",
    department: "Cardiology",
    image: doctor3Image,
  },
];

const OrthopedicsDoctors = [
  {
    id: 1,
    name: "Dr. Pooja",
    specialization: "Experienced Orthopedist",
    department: "Orthopedics",
    image: doctor4Image,
  },
  {
    id: 2,
    name: "Dr. Gowtham",
    specialization: "Expert Orthopedist",
    department: "Orthopedics",
    image: doctor5Image,
  },
  {
    id: 3,
    name: "Dr. Rahul",
    specialization: "Expert Orthopedist",
    department: "Orthopedics",
    image: doctor6Image,
  },
];

function DoctorDepartments() {
  return (
    <>
      {/* cardiologyDoctors */}
      <section className="doctor-departments-section">
        <Container>
          <h2 className="section-title text-center">Cardiology</h2>
          <Row className="g-4">
            {cardiologyDoctors.map((doctor) => (
              <Col key={doctor.id} xs={12} sm={6} lg={4}>
                <DoctorCard doctor={doctor} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* OrthopedicsDoctors */}
      <section className="doctor-departments-section">
        <Container>
          <h2 className="section-title text-center">Orthopedics</h2>
          <Row className="g-4">
            {OrthopedicsDoctors.map((doctor) => (
              <Col key={doctor.id} xs={12} sm={6} lg={4}>
                <DoctorCard doctor={doctor} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default DoctorDepartments;
