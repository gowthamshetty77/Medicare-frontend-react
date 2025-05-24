import React from "react";
import { Container, Table, Navbar, Nav } from "react-bootstrap";
import "../styles/DoctorDashboard.css";
import { FaUserCircle } from "react-icons/fa";
import TopContactBar from "./TopContactBar";
import UpdateDoctorForm from "./UpdateDoctorForm";
import Footer from "./Footer";

const DoctorDashboard = () => {
  // This would typically come from your backend/API
  const appointments = [
    {
      id: 8,
      patientName: "Suresh",
      appointmentTime: "2025-04-23",
      status: "pending",
    },
    {
      id: 9,
      patientName: "Suresh",
      appointmentTime: "2025-04-23",
      status: "confirmed",
    },
    {
      id: 10,
      patientName: "Suresh",
      appointmentTime: "2025-04-23",
      status: "cancelled",
    },
  ];

  return (
    <div className="dashboard-wrapper">
      <TopContactBar />

      {/* Doctor Navigation Bar */}
      <Navbar bg="primary" variant="dark" expand="lg" className="doctor-navbar">
        <Container>
          <Navbar.Toggle
            aria-controls="doctor-navbar-nav"
            className="ms-auto"
          />
          <Navbar.Collapse id="doctor-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href={`${process.env.REACT_APP_MEDICARE_BASE_URL}/doctor-dashboard`}
                active
              >
                Home
              </Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href="#apt">Appointment List</Nav.Link>
              <Nav.Link href="#updateDoctor">Update</Nav.Link>
            </Nav>
            <Nav className="ms-auto align-items-center">
              <Nav.Link href="#" className="logout-btn" id="doc-logout-btn">
                Logout
              </Nav.Link>
              <div className="doctor-profile">
                <FaUserCircle className="profile-icon" />
                <span className="doctor-name-nav">James</span>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Dashboard Content */}
      <div className="dashboard-container">
        <Container>
          <div className="welcome-section">
            <h1>
              Welcome <span className="doctor-name">James</span>,
            </h1>
            <h2 className="portal-title">
              Welcome to Medicare - Your Trusted Healthcare Portal
            </h2>
            <h3 className="appointments-subtitle">
              Find the Scheduled Appointments below
            </h3>
          </div>

          <div className="appointments-section" id="apt">
            <h2 className="section-title">Scheduled Appointments</h2>

            {appointments.length > 0 ? (
              <div className="table-responsive">
                <Table className="appointments-table">
                  <thead>
                    <tr>
                      <th>Appointment ID</th>
                      <th>Patient Name</th>
                      <th>Appointment Time</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointments.map((appointment) => (
                      <tr key={appointment.id}>
                        <td>{appointment.id}</td>
                        <td>{appointment.patientName}</td>
                        <td>{appointment.appointmentTime}</td>
                        <td>
                          <span className={`status ${appointment.status}`}>
                            {appointment.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            ) : (
              <div className="no-appointments">
                <p>No scheduled appointments found.</p>
              </div>
            )}
          </div>

          {/* Update Doctor Form Section */}
          <UpdateDoctorForm />
        </Container>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default DoctorDashboard;
