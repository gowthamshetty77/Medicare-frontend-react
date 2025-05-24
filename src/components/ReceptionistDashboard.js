import React, { useState } from "react";
import { Navbar, Nav, Form, Button, Table, Container } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import TopContactBar from "./TopContactBar";
import "../styles/ReceptionistDashboard.css";
import AddDoctorForm from "./AddDoctorForm";
import Footer from "./Footer";

const ReceptionistDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [patientSearchQuery, setPatientSearchQuery] = useState("");
  const [doctorSearchQuery, setDoctorSearchQuery] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [doctors, setDoctors] = useState([
    {
      id: 5103,
      name: "James",
      gender: "male",
      specialization: "orthopedics",
      contact: "56789567890",
      status: "available",
    },
    {
      id: 5104,
      name: "Robert",
      gender: "male",
      specialization: "orthopedics",
      contact: "56789567890",
      status: "available",
    },
    {
      id: 5105,
      name: "Reena",
      gender: "female",
      specialization: "orthopedics",
      contact: "56789567890",
      status: "available",
    },
  ]);

  // Appointments Data
  const [appointments, setAppointments] = useState([
    { id: 1, patientName: "Girish", date: "2025-01-31", status: "booked" },
    { id: 2, patientName: "Krishna", date: "2025-01-30", status: "cancelled" },
    { id: 3, patientName: "Krishna", date: "2025-02-11", status: "cancelled" },
    { id: 4, patientName: "Girish", date: "2025-02-08", status: "cancelled" },
    { id: 5, patientName: "Girish", date: "2025-02-17", status: "pending" },
  ]);

  // Patients Data
  const [patients, setPatients] = useState([
    { id: 1, name: "Suresh", gender: "Male", contact: "1234554321" },
    { id: 2, name: "Ramesh", gender: "Male", contact: "9876543210" },
    { id: 3, name: "Priya", gender: "Female", contact: "8765432109" },
  ]);

  // Filter functions
  const filteredAppointments = appointments.filter(
    (appointment) =>
      appointment.patientName
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      appointment.date.includes(searchQuery)
  );

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(patientSearchQuery.toLowerCase())
  );

  // Status change handler
  const handleStatusChange = (appointmentId, newStatus) => {
    setAppointments(
      appointments.map((appointment) =>
        appointment.id === appointmentId
          ? { ...appointment, status: newStatus }
          : appointment
      )
    );
  };

  // Delete patient handler
  const handleDeletePatient = (patientId) => {
    setPatients(patients.filter((patient) => patient.id !== patientId));
  };

  // Doctors Data

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(doctorSearchQuery.toLowerCase())
  );

  const [receptionist, setReceptionist] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReceptionist((prev) => ({ ...prev, [name]: value }));

    let error = "";

    if (name === "name") {
      if (!value.trim()) error = "Name is required";
    } else if (name === "phone") {
      if (!/^\d{10}$/.test(value)) error = "Phone number must be 10 digits";
    } else if (name === "email") {
      if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value))
        error = "Invalid email format";
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    alert("Receptionist information updated successfully!");
    setReceptionist({
      name: "",
      phone: "",
      email: "",
    });
  };

  return (
    <div className="receptionist-dashboard">
      <TopContactBar />

      <Navbar bg="primary" variant="dark" expand="lg" className="reception-nav">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href={`${process.env.REACT_APP_MEDICARE_BASE_URL}/receptionist-dashboard`}
                active
              >
                Home
              </Nav.Link>
              <Nav.Link href="#appointments">Appointments</Nav.Link>
              <Nav.Link href="#patient-details">Patient Details</Nav.Link>
              <Nav.Link href="#doctor-details">Doctor Details</Nav.Link>
              <Nav.Link href="#update-recep">Update</Nav.Link>
            </Nav>
            <Nav className="ms-auto align-items-center">
              <Nav.Link href="#logout">Logout</Nav.Link>
              <FaUserCircle className="user-icon text-white mx-2" size={24} />
              <span className="user-name text-white">Swathi</span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="dashboard-content mt-4">
        <div className="welcome-section text-center mb-5">
          <h2 className="welcome-title">Welcome Swathi,</h2>
          <p className="welcome-subtitle">
            Welcome to Medicare - Your Trusted Healthcare Portal
          </p>
        </div>

        {/* Appointments Section */}
        <section id="appointments">
          <h3 className="mb-4 role-title">Appointments</h3>
          <div className="search-bar mb-4">
            <Form.Control
              type="text"
              placeholder="Search by patient name or appointment date"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <Table striped bordered hover responsive className="blue-table">
            <thead>
              <tr>
                <th>Appointment ID</th>
                <th>Patient Name</th>
                <th>Appointment Time</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredAppointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td>{appointment.id}</td>
                  <td>{appointment.patientName}</td>
                  <td>{appointment.date}</td>
                  <td className={`status-${appointment.status}`}>
                    {appointment.status}
                  </td>
                  <td>
                    {appointment.status === "pending" ? (
                      <div className="d-flex gap-2">
                        <Button
                          variant="success"
                          size="sm"
                          onClick={() =>
                            handleStatusChange(appointment.id, "accepted")
                          }
                        >
                          Accept
                        </Button>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() =>
                            handleStatusChange(appointment.id, "cancelled")
                          }
                        >
                          Cancel
                        </Button>
                      </div>
                    ) : (
                      <span className="text-muted">No actions available</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </section>

        {/* Patient Details Section */}
        <hr className="section-divider" />

        <section id="patient-details" className="patient-details-section">
          <h3 className="mb-4 role-title">Patient Details</h3>
          <div className="search-bar mb-4">
            <Form.Control
              type="text"
              placeholder="Search by patient name"
              value={patientSearchQuery}
              onChange={(e) => setPatientSearchQuery(e.target.value)}
            />
          </div>

          <Table striped bordered hover responsive className="blue-table">
            <thead>
              <tr>
                <th>Patient ID</th>
                <th>Patient Name</th>
                <th>Gender</th>
                <th>Contact</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredPatients.map((patient) => (
                <tr key={patient.id}>
                  <td>{patient.id}</td>
                  <td>{patient.name}</td>
                  <td>{patient.gender}</td>
                  <td>{patient.contact}</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDeletePatient(patient.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </section>

        {/* Doctor Details Section */}
        <hr className="section-divider" />
        <section id="doctor-details" className="doctor-details-section">
          <h3 className="mb-4 role-title">Doctors Details</h3>
          <div className="search-bar mb-4 d-flex gap-4" id="doc-search-add">
            <Form.Control
              type="text"
              placeholder="Search by doctor name"
              value={doctorSearchQuery}
              onChange={(e) => setDoctorSearchQuery(e.target.value)}
            />
            <Button
              id="add-doc-btn"
              onClick={() => setShowAddForm(!showAddForm)}
            >
              {showAddForm ? "Hide Doctor" : "Add Doctor"}
            </Button>
          </div>

          {/* Conditional Add Doctor Form */}
          {showAddForm && (
            <div className="mb-4">
              <AddDoctorForm />
            </div>
          )}

          <Table striped bordered hover responsive className="blue-table">
            <thead>
              <tr>
                <th>Doctor ID</th>
                <th>Doctor Name</th>
                <th>Doctor Gender</th>
                <th>Specialization</th>
                <th>Contact</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredDoctors.map((doctor) => (
                <tr key={doctor.id}>
                  <td>{doctor.id}</td>
                  <td>{doctor.name}</td>
                  <td>{doctor.gender}</td>
                  <td>{doctor.specialization}</td>
                  <td>{doctor.contact}</td>
                  <td>{doctor.status}</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() =>
                        setDoctors(doctors.filter((d) => d.id !== doctor.id))
                      }
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </section>
      </Container>

      {/* Update Receptionist Form */}
      <Container
        className="my-5 d-flex justify-content-center"
        id="update-recep"
      >
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
          <h2 className="text-center mb-4 text-primary fw-bold">
            Update Receptionist
          </h2>
          <Form onSubmit={handleUpdateSubmit}>
            <Form.Group className="mb-3" controlId="formReceptionistName">
              <Form.Label>Receptionist Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Receptionist Name"
                name="name"
                value={receptionist.name}
                onChange={handleInputChange}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formReceptionistPhone">
              <Form.Label>Receptionist Phone:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Receptionist Phone"
                name="phone"
                value={receptionist.phone}
                onChange={handleInputChange}
                isInvalid={!!errors.phone}
              />
              <Form.Control.Feedback type="invalid">
                {errors.phone}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-4" controlId="formReceptionistEmail">
              <Form.Label>Receptionist Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Receptionist Email"
                name="email"
                value={receptionist.email}
                onChange={handleInputChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <div className="d-grid">
              <Button variant="primary" type="submit">
                Update
              </Button>
            </div>
          </Form>
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default ReceptionistDashboard;
