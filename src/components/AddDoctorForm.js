import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const AddDoctorForm = ({ onSubmit }) => {
  const [doctor, setDoctor] = useState({
    name: "",
    age: "",
    gender: "",
    specialization: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return value.trim() ? "" : "Name is required";
      case "age":
        return /^\d+$/.test(value) && value >= 21 && value <= 100
          ? ""
          : "Enter valid age between 21 and 100";
      case "gender":
        return value ? "" : "Gender is required";
      case "specialization":
        return value.trim() ? "" : "Specialization is required";
      case "phone":
        return /^\d{10}$/.test(value) ? "" : "Phone must be 10 digits";
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ""
          : "Invalid email format";
      case "password":
        return value.length >= 6
          ? ""
          : "Password must be at least 6 characters";
      case "confirmPassword":
        return value === doctor.password ? "" : "Passwords do not match";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctor((prev) => ({ ...prev, [name]: value }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("doctor added");
    setDoctor({
      name: "",
      age: "",
      gender: "",
      specialization: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <Container className="my-5 d-flex justify-content-center">
      <div
        style={{
          backgroundColor: "#f8fbff",
          padding: "30px",
          borderRadius: "10px",
          width: "100%",
          maxWidth: "600px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h2 className="text-center mb-4 text-primary fw-bold">Add Doctor</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formDoctorName">
            <Form.Label>Doctor Name:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={doctor.name}
              onChange={handleChange}
              isInvalid={!!errors.name}
              placeholder="Enter doctor name"
            />
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDoctorAge">
            <Form.Label>Doctor Age:</Form.Label>
            <Form.Control
              type="number"
              name="age"
              value={doctor.age}
              onChange={handleChange}
              isInvalid={!!errors.age}
              placeholder="Enter doctor age"
            />
            <Form.Control.Feedback type="invalid">
              {errors.age}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDoctorGender">
            <Form.Label>Doctor Gender:</Form.Label>
            <Form.Control
              type="text"
              name="gender"
              value={doctor.gender}
              onChange={handleChange}
              isInvalid={!!errors.gender}
              placeholder="Enter doctor gender"
            />
            <Form.Control.Feedback type="invalid">
              {errors.gender}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDoctorSpecialization">
            <Form.Label>Specialization:</Form.Label>
            <Form.Control
              type="text"
              name="specialization"
              value={doctor.specialization}
              onChange={handleChange}
              isInvalid={!!errors.specialization}
              placeholder="Enter specialization"
            />
            <Form.Control.Feedback type="invalid">
              {errors.specialization}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDoctorPhone">
            <Form.Label>Phone:</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              value={doctor.phone}
              onChange={handleChange}
              isInvalid={!!errors.phone}
              placeholder="Enter phone number"
            />
            <Form.Control.Feedback type="invalid">
              {errors.phone}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDoctorEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={doctor.email}
              onChange={handleChange}
              isInvalid={!!errors.email}
              placeholder="Enter email"
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDoctorPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={doctor.password}
              onChange={handleChange}
              isInvalid={!!errors.password}
              placeholder="Enter password"
            />
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-4" controlId="formConfirmPassword">
            <Form.Label>Confirm Password:</Form.Label>
            <Form.Control
              type="password"
              name="confirmPassword"
              value={doctor.confirmPassword}
              onChange={handleChange}
              isInvalid={!!errors.confirmPassword}
              placeholder="Confirm password"
            />
            <Form.Control.Feedback type="invalid">
              {errors.confirmPassword}
            </Form.Control.Feedback>
          </Form.Group>

          <div className="d-grid">
            <Button type="submit" variant="primary">
              Add Doctor
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default AddDoctorForm;
