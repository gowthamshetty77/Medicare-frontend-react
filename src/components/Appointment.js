import React, { useState } from "react";
import "../styles/Appointment.css";

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
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
    alert("Please Login to Book Appointment");
    setFormData({
      name: "",
      email: "",
      date: "",
      time: "",
    });
  };

  return (
    <div className="appointment-section" id="about-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="appointment-form">
              <h2>Schedule an Appointment</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="labelTitle">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Enter your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="labelTitle">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="date" className="labelTitle">
                    Date:
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="form-control"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="time" className="labelTitle">
                    Time:
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    className="form-control"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Book Appointment
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="welcome-content">
              <h1>
                Welcome to <span className="text-primary">Medicare</span>
              </h1>
              <h3>Trusted Hospital since 1992</h3>
              <p className="mt-4">
                At Our Medicare Hospital, we prioritize your health and
                well-being. Our dedicated team of healthcare professionals is
                here to provide you with the best medical care possible. We
                offer a wide range of services to meet your healthcare needs.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="doctor-image-container">
              <div className="doctor-image"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
