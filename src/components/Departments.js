import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../styles/Departments.css";

// Import department images
import cardiology from "../assets/heart.jpg";
import pulmonology from "../assets/lungs.jpg";
import orthopedics from "../assets/bones.jpg";
import nephrology from "../assets/kidney.jpg";
import dental from "../assets/teeth.jpg";
import gynecology from "../assets/pregnancy.jpg";

const departments = [
  {
    id: 1,
    name: "Cardiology",
    description:
      "Expert care for heart conditions with state-of-the-art facilities.",
    image: cardiology,
  },
  {
    id: 2,
    name: "Pulmonology",
    description:
      "Specialized treatment for Pulmonology disorders and conditions.",
    image: pulmonology,
  },
  {
    id: 3,
    name: "Orthopedics",
    description: "Comprehensive care for bone, joint, and muscle conditions.",
    image: orthopedics,
  },
  {
    id: 4,
    name: "Nephrology",
    description: "Expert care for kidney health and related urinary disorders.",
    image: nephrology,
  },
  {
    id: 5,
    name: "Dental Care",
    description: "Comprehensive oral health services for bright, strong teeth.",
    image: dental,
  },
  {
    id: 6,
    name: "Gynecology",
    description:
      "Comprehensive care for women's reproductive health and wellness.",
    image: gynecology,
  },
];

const Departments = () => {
  return (
    <section id="departments" className="departments-section">
      <Container>
        <h2 className="section-title text-center" id="dpt">
          Our Departments
        </h2>
        <p className="section-description text-center">
          At Our Medicare Hospital, we offer specialized care across various
          departments to ensure comprehensive health services for our patients.
          Explore our departments below:
        </p>
        <Row className="g-4">
          {departments.map((dept) => (
            <Col key={dept.id} xs={12} sm={6} lg={4}>
              <Card className="department-card h-100">
                <div className="department-image">
                  <img src={dept.image} alt={dept.name} />
                </div>
                <Card.Body className="text-center">
                  <Card.Title>{dept.name}</Card.Title>
                  <Card.Text>{dept.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Departments;
