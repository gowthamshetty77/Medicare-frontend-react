import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../styles/RecentStories.css";

// Import images
import surgeryImage from "../assets/heart-surgery.jpg";
import healthFairImage from "../assets/community-health.jpg";
import pediatricImage from "../assets/pediatric.jpg";

const stories = [
  {
    id: 1,
    title: "New Heart Surgery Technique Introduced",
    description:
      "We are excited to announce the introduction of a new minimally invasive heart surgery technique that promises better outcomes and faster recovery times for our cardiac patients.",
    image: surgeryImage,
  },
  {
    id: 2,
    title: "Community Health Fair Scheduled",
    description:
      "Join us for our annual Community Health Fair, offering free screenings and health education sessions for all community members.",
    image: healthFairImage,
  },
  {
    id: 3,
    title: "New Pediatric Wing Opened",
    description:
      "We are proud to announce the opening of our new pediatric wing, designed to provide specialized care for our youngest patients in a child-friendly environment.",
    image: pediatricImage,
  },
];

const RecentStories = () => {
  return (
    <section id="blog" className="recent-stories-section">
      <Container>
        <h2 className="section-title text-center" id="story-title">
          Recent Stories
        </h2>
        <p className="section-description text-center">
          Stay updated with the latest happenings at our hospital. Here's what's
          new:
        </p>
        <Row className="g-4">
          {stories.map((story) => (
            <Col key={story.id} md={4}>
              <Card className="story-card h-100">
                <div className="card-img-wrapper">
                  <Card.Img variant="top" src={story.image} alt={story.title} />
                </div>
                <Card.Body>
                  <Card.Title>{story.title}</Card.Title>
                  <Card.Text>{story.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default RecentStories;
