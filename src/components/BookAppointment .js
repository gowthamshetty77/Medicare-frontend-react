import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "../styles/BookAppointment.css";

const BookAppointment = () => {
  let emptyFieldsLabel = {
    name: "",
    phone: "",
    doctor: "",
    specialization: "",
    appointmentDate: "",
  };
  const [appointmentData, setAppointmentData] = useState(emptyFieldsLabel);

  const [errors, setErrors] = useState({});

  const doctorsByCategory = [
    {
      category: "Cardiology",
      doctors: [
        { name: "Dr. Alice Smith" },
        { name: "Dr. Bob Johnson" },
        { name: "Dr. Charlie Williams" },
      ],
    },
    {
      category: "Dermatology",
      doctors: [
        { name: "Dr. Diana Brown" },
        { name: "Dr. Eva Davis" },
        { name: "Dr. Frank Wilson" },
      ],
    },
    {
      category: "Pediatrics",
      doctors: [
        { name: "Dr. Grace Moore" },
        { name: "Dr. Henry Taylor" },
        { name: "Dr. Irene Anderson" },
      ],
    },
  ];

  const validateField = (name, value) => {
    if (!value.trim()) {
      return "This field is required";
    }
    switch (name) {
      case "phone":
        if (!/^\d{10}$/.test(value)) {
          return "Please enter a valid 10-digit phone number";
        }
        break;
      case "appointmentDate":
        if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
          return "Please enter a valid date (yyyy-mm-dd)";
        }
        break;
      default:
        return "";
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "selectedDoctor") {
      const [doctor, specialization] = value.split("|");
      setAppointmentData((prev) => ({
        ...prev,
        doctor: doctor,
        specialization: specialization,
      }));

      // Validate both doctor and specialization fields
      const doctorError = validateField("doctor", doctor);
      const specializationError = validateField(
        "specialization",
        specialization
      );
      setErrors((prev) => ({
        ...prev,
        doctor: doctorError,
        specialization: specializationError,
      }));
    } else {
      setAppointmentData((prev) => ({
        ...prev,
        [name]: value,
      }));
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, value),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    for (const key in appointmentData) {
      newErrors[key] = validateField(key, appointmentData[key]);
    }
    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => !error)) {
      alert("Appointment");
      setAppointmentData(emptyFieldsLabel);
      // console.log("Appointment data submitted:", appointmentData);
      // Submit logic here
    }
  };

  return (
    <section className="book-appointment-section" id="book-appointment">
      <Container>
        <div className="book-appointment-form-wrapper">
          <h2 className="section-title text-center">Book an Appointment</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={appointmentData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <Form.Text className="text-danger">{errors.name}</Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Phone:</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your number"
                name="phone"
                value={appointmentData.phone}
                onChange={handleChange}
              />
              {errors.phone && (
                <Form.Text className="text-danger">{errors.phone}</Form.Text>
              )}
            </Form.Group>

            {/* Doctor selection dropdown */}
            <Form.Group className="mb-3" controlId="formBasicDoctor">
              <Form.Label>Select Doctor:</Form.Label>
              <Form.Control
                as="select"
                name="selectedDoctor"
                value={`${appointmentData.doctor}|${appointmentData.specialization}`}
                onChange={handleChange}
              >
                <option value="">Select a doctor</option>
                {doctorsByCategory.map((category) => (
                  <optgroup label={category.category} key={category.category}>
                    {category.doctors.map((doctor) => (
                      <option
                        key={doctor.name}
                        value={`${doctor.name}|${category.category}`}
                      >
                        {doctor.name} - {category.category}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </Form.Control>
              {errors.doctor && (
                <Form.Text className="text-danger">{errors.doctor}</Form.Text>
              )}
              {errors.specialization && (
                <Form.Text className="text-danger">
                  {errors.specialization}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDate">
              <Form.Label>Appointment Date:</Form.Label>
              <Form.Control
                type="date"
                name="appointmentDate"
                value={appointmentData.appointmentDate}
                onChange={handleChange}
              />
              {errors.appointmentDate && (
                <Form.Text className="text-danger">
                  {errors.appointmentDate}
                </Form.Text>
              )}
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Container>
    </section>
  );
};

export default BookAppointment;
