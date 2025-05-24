import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../styles/PatientStatusModal.css";

const PatientStatusModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const appointmentsList = [
    {
      id: 7,
      doctor: "Priya",
      specialization: "Dermatologist",
      date: "2025-03-22",
      status: "Booked",
    },
    {
      id: 8,
      doctor: "Priya",
      specialization: "Dermatologist",
      date: "2025-03-22",
      status: "Booked",
    },
    {
      id: 9,
      doctor: "Priya",
      specialization: "Dermatologist",
      date: "2025-03-22",
      status: "Booked",
    },
  ];

  const [appointments, setAppointments] = useState(appointmentsList);

  const handleCancel = (appointmentId) => {
    setAppointments((prevAppointments) =>
      prevAppointments.map((appointment) =>
        appointment.id === appointmentId
          ? { ...appointment, status: "Cancelled" }
          : appointment
      )
    );
  };

  const handleClose = () => {
    // Close the modal first
    onClose();
    // Then navigate
    navigate("/patient-dashboard");
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="status-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-icon" onClick={handleClose}>
          <FaTimes />
        </button>

        <div className="status-content">
          <h2>Medicare - Patient Status</h2>
          <p className="appointments-heading">
            Your booked appointments are shown below
          </p>

          <div className="appointments-table">
            <table>
              <colgroup>
                <col style={{ width: "10%" }} />
                <col style={{ width: "15%" }} />
                <col style={{ width: "25%" }} />
                <col style={{ width: "20%" }} />
                <col style={{ width: "15%" }} />
                <col style={{ width: "15%" }} />
              </colgroup>
              <thead>
                <tr>
                  <th>Sl No.</th>
                  <th>Doctor Booked</th>
                  <th>Specialization</th>
                  <th>Appointment Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment, index) => (
                  <tr key={appointment.id}>
                    <td>{index + 1}</td>
                    <td>{appointment.doctor}</td>
                    <td>{appointment.specialization}</td>
                    <td>{appointment.date}</td>
                    <td>
                      <span
                        className={`status-badge ${appointment.status.toLowerCase()}`}
                      >
                        {appointment.status}
                      </span>
                    </td>
                    <td>
                      {appointment.status === "Booked" && (
                        <button
                          className="cancel-button"
                          onClick={() => handleCancel(appointment.id)}
                        >
                          Cancel
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientStatusModal;
