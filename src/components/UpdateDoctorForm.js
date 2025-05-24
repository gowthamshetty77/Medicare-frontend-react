import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import "../styles/UpdateDoctorForm.css";

const UpdateDoctorForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    availability: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="update-doctor-section" id="updateDoctor">
      <h2 className="text-center mb-4">Update Doctor</h2>
      <Card className="update-form-card">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Doctor Name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter Doctor Name"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Doctor availability:</Form.Label>
              <Form.Control
                type="text"
                name="availability"
                placeholder="Enter Status"
                value={formData.availability}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Doctor Phone:</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                placeholder="Enter Doctor Phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Doctor Email:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter Doctor Email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Doctor Password:</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter Doctor Password"
                value={formData.password}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Confirm Doctor Password:</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                placeholder="Confirm Doctor Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Update
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UpdateDoctorForm;
