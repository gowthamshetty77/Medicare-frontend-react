import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import TopContactBar from "./TopContactBar";
import Footer from "./Footer";
import "../styles/PatientForgotPassword.css"; // Create this CSS file
import ForgotPasswordNavBar from "./ForgotPasswordNavBar";

function PatientForgotPassword() {
  const initialFields = {
    patientId: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState(initialFields);
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    if (!value.trim()) {
      return "This field is required";
    }
    switch (name) {
      case "patientId":
        if (!/^\d+$/.test(value)) {
          return "Please enter a valid numeric Patient ID";
        }
        break;
      case "email":
        if (!/\S+@\S+\.\S+/.test(value)) {
          return "Please enter a valid email address";
        }
        break;
      case "password":
        if (value.length < 6) {
          return "Password must be at least 6 characters long";
        }
        break;
      case "confirmPassword":
        if (value !== formData.password) {
          return "Passwords do not match";
        }
        break;
      default:
        return "";
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Validate current field
    const error = validateField(name, value);

    // Special case for password confirmation
    if (name === "password") {
      const confirmError = validateField(
        "confirmPassword",
        formData.confirmPassword
      );
      setErrors((prev) => ({
        ...prev,
        [name]: error,
        confirmPassword: confirmError,
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate all fields
    Object.keys(formData).forEach((field) => {
      newErrors[field] = validateField(field, formData[field]);
    });

    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => !error)) {
      alert("Password reset successfully!");
      setFormData(initialFields);
      // Add your password reset API call here
    }
  };

  return (
    <div className="patient-forgot-password">
      <TopContactBar />

      <ForgotPasswordNavBar />

      <section className="forgot-password-section">
        <Container>
          <div className="forgot-password-form-wrapper">
            <h2 className="section-title text-center">
              Patient Password Reset
            </h2>
            <Form onSubmit={handleSubmit}>
              {/* Patient ID */}
              <Form.Group className="mb-3" controlId="formPatientId">
                <Form.Label>Patient ID</Form.Label>
                <Form.Control
                  type="text"
                  name="patientId"
                  placeholder="Enter your Patient ID"
                  value={formData.patientId}
                  onChange={handleChange}
                />
                {errors.patientId && (
                  <Form.Text className="text-danger error-message">
                    {errors.patientId}
                  </Form.Text>
                )}
              </Form.Group>

              {/* Email */}
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your registered email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <Form.Text className="text-danger">{errors.email}</Form.Text>
                )}
              </Form.Group>

              {/* New Password */}
              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter new password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && (
                  <Form.Text className="text-danger">
                    {errors.password}
                  </Form.Text>
                )}
              </Form.Group>

              {/* Confirm Password */}
              <Form.Group className="mb-3" controlId="formConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm new password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                {errors.confirmPassword && (
                  <Form.Text className="text-danger">
                    {errors.confirmPassword}
                  </Form.Text>
                )}
              </Form.Group>

              <div className="text-center">
                <Button variant="primary" type="submit">
                  Reset Password
                </Button>
              </div>
            </Form>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}

export default PatientForgotPassword;
