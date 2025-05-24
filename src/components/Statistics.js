import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Statistics.css";

const StatItem = ({ number, title }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 50;
    const stepTime = duration / steps;
    const increment = number / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= number) {
        setCount(number);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [number]);

  return (
    <div className="stat-item text-center">
      <h3 className="stat-number">{count}</h3>
      <p className="stat-title">{title}</p>
    </div>
  );
};

const Statistics = () => {
  const stats = [
    { number: 21, title: "Years of Experience" },
    { number: 810, title: "Health Centre Visits" },
    { number: 539, title: "Doctors and Staff" },
    { number: 250, title: "Academic Papers" },
  ];

  return (
    <section className="statistics-section">
      <Container>
        <h2 className="section-title text-center" id="achieves">
          Our Achievements
        </h2>
        <p className="section-description text-center">
          We take pride in our accomplishments and the quality of care we
          provide. Here are some key statistics:
        </p>
        <Row className="justify-content-center">
          {stats.map((stat, index) => (
            <Col key={index} xs={12} sm={6} md={3} className="mb-4">
              <StatItem number={stat.number} title={stat.title} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Statistics;
