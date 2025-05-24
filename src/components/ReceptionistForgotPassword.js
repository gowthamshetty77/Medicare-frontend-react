import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import TopContactBar from "./TopContactBar";
import Footer from "./Footer";
import ForgotPasswordNavBar from "./ForgotPasswordNavBar";
import "../styles/ReceptionistForgotPassword.css";

function ReceptionistForgotPassword() {
  const initialFields = {
    receptionistId: "",
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
      case "receptionistId":
        if (!/^\d+$/.test(value)) {
          return "Please enter a valid numeric Receptionist ID";
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

    const error = validateField(name, value);

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

    Object.keys(formData).forEach((field) => {
      newErrors[field] = validateField(field, formData[field]);
    });

    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => !error)) {
      alert("Password reset successfully!");
      setFormData(initialFields);
      // Add API call here
    }
  };

  return (
    <div className="receptionist-forgot-password">
      <TopContactBar />
      <ForgotPasswordNavBar />

      <section className="forgot-password-section">
        <Container>
          <div className="forgot-password-form-wrapper">
            <h2 className="section-title text-center">
              Receptionist Password Reset
            </h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formReceptionistId">
                <Form.Label>Receptionist ID</Form.Label>
                <Form.Control
                  type="text"
                  name="receptionistId"
                  placeholder="Enter your Receptionist ID"
                  value={formData.receptionistId}
                  onChange={handleChange}
                />
                {errors.receptionistId && (
                  <Form.Text className="text-danger error-message">
                    {errors.receptionistId}
                  </Form.Text>
                )}
              </Form.Group>

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

export default ReceptionistForgotPassword;
