// import React, { useState } from "react";
// import "../styles/LoginModal.css";

// const LoginModal = ({ isOpen, onClose }) => {
//   const [loginData, setLoginData] = useState({
//     patientEmail: "",
//     patientPassword: "",
//     receptionistEmail: "",
//     receptionistPassword: "",
//     doctorEmail: "",
//     doctorPassword: "",
//   });

//   const [errors, setErrors] = useState({});

//   // Separate validation functions for each role
//   const validatePatientFields = (name, value) => {
//     let error = "";
//     if (!value.trim()) {
//       error = "This field is required";
//     } else if (name === "patientEmail") {
//       if (!/\S+@\S+\.\S+/.test(value)) {
//         error = "Please enter a valid email address";
//       }
//     } else if (name === "patientPassword") {
//       if (value.length < 6) {
//         error = "Password must be at least 6 characters long";
//       }
//     }
//     return error;
//   };

//   const validateReceptionistFields = (name, value) => {
//     let error = "";
//     if (!value.trim()) {
//       error = "This field is required";
//     } else if (name === "receptionistEmail") {
//       if (!/\S+@\S+\.\S+/.test(value)) {
//         error = "Please enter a valid email address";
//       }
//     } else if (name === "receptionistPassword") {
//       if (value.length < 6) {
//         error = "Password must be at least 6 characters long";
//       }
//     }
//     return error;
//   };

//   const validateDoctorFields = (name, value) => {
//     let error = "";
//     if (!value.trim()) {
//       error = "This field is required";
//     } else if (name === "doctorEmail") {
//       if (!/\S+@\S+\.\S+/.test(value)) {
//         error = "Please enter a valid email address";
//       }
//     } else if (name === "doctorPassword") {
//       if (value.length < 6) {
//         error = "Password must be at least 6 characters long";
//       }
//     }
//     return error;
//   };

//   // Separate change handlers for each role
//   const handlePatientChange = (e) => {
//     const { name, value } = e.target;
//     setLoginData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//     const error = validatePatientFields(name, value);
//     setErrors((prev) => ({
//       ...prev,
//       [name]: error,
//     }));
//   };

//   const handleReceptionistChange = (e) => {
//     const { name, value } = e.target;
//     setLoginData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//     const error = validateReceptionistFields(name, value);
//     setErrors((prev) => ({
//       ...prev,
//       [name]: error,
//     }));
//   };

//   const handleDoctorChange = (e) => {
//     const { name, value } = e.target;
//     setLoginData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//     const error = validateDoctorFields(name, value);
//     setErrors((prev) => ({
//       ...prev,
//       [name]: error,
//     }));
//   };

//   // Separate submit handlers for each role
//   const handlePatientSubmit = async (e) => {
//     e.preventDefault();
//     const fields = ["patientEmail", "patientPassword"];
//     const newErrors = {};

//     fields.forEach((field) => {
//       const error = validatePatientFields(field, loginData[field]);
//       if (error) newErrors[field] = error;
//     });

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       try {
//         // Patient-specific login logic here
//         console.log("Patient login attempted", {
//           email: loginData.patientEmail,
//           password: loginData.patientPassword,
//         });
//         // Add your patient login API call here
//       } catch (error) {
//         console.error("Patient login failed:", error);
//       }
//     }
//   };

//   const handleReceptionistSubmit = async (e) => {
//     e.preventDefault();
//     const fields = ["receptionistEmail", "receptionistPassword"];
//     const newErrors = {};

//     fields.forEach((field) => {
//       const error = validateReceptionistFields(field, loginData[field]);
//       if (error) newErrors[field] = error;
//     });

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       try {
//         // Receptionist-specific login logic here
//         console.log("Receptionist login attempted", {
//           email: loginData.receptionistEmail,
//           password: loginData.receptionistPassword,
//         });
//         // Add your receptionist login API call here
//       } catch (error) {
//         console.error("Receptionist login failed:", error);
//       }
//     }
//   };

//   const handleDoctorSubmit = async (e) => {
//     e.preventDefault();
//     const fields = ["doctorEmail", "doctorPassword"];
//     const newErrors = {};

//     fields.forEach((field) => {
//       const error = validateDoctorFields(field, loginData[field]);
//       if (error) newErrors[field] = error;
//     });

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       try {
//         // Doctor-specific login logic here
//         console.log("Doctor login attempted", {
//           email: loginData.doctorEmail,
//           password: loginData.doctorPassword,
//         });
//         // Add your doctor login API call here
//       } catch (error) {
//         console.error("Doctor login failed:", error);
//       }
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="modal-overlay">
//       <div className="login-modal">
//         <button className="close-button" onClick={onClose}>
//           &times;
//         </button>
//         <h2 className="modal-title">Medicare - Logins</h2>
//         <h3 className="role-select-text">Please select your role to log in:</h3>

//         <div className="login-sections">
//           {/* Patient Login */}
//           <div className="login-section">
//             <h2 className="section-title" id="pat-login-title">
//               Patient Login
//             </h2>
//             <form onSubmit={handlePatientSubmit}>
//               <div className="form-group">
//                 <label>Patient Email:</label>
//                 <div className="form-error-container">
//                   {errors.patientEmail}
//                 </div>
//                 <input
//                   type="email"
//                   name="patientEmail"
//                   placeholder="Enter Patient Email"
//                   value={loginData.patientEmail}
//                   onChange={handlePatientChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Patient Password:</label>
//                 <div className="form-error-container">
//                   {errors.patientPassword}
//                 </div>
//                 <input
//                   type="password"
//                   name="patientPassword"
//                   placeholder="Enter Patient Password"
//                   value={loginData.patientPassword}
//                   onChange={handlePatientChange}
//                   required
//                 />
//               </div>
//               <a href="#forgot" className="forgot-password">
//                 Forgot Password?
//               </a>
//               <button type="submit" className="login-btn">
//                 Login
//               </button>
//             </form>
//           </div>

//           {/* Receptionist Login */}
//           <div className="login-section">
//             <h2 className="section-title login-title" id="recep-login-title">
//               Receptionist Login
//             </h2>
//             <form onSubmit={handleReceptionistSubmit}>
//               <div className="form-group">
//                 <label>Receptionist Email:</label>
//                 <div className="form-error-container">
//                   {errors.receptionistEmail}
//                 </div>
//                 <input
//                   type="email"
//                   name="receptionistEmail"
//                   placeholder="Enter Receptionist Email"
//                   value={loginData.receptionistEmail}
//                   onChange={handleReceptionistChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Receptionist Password:</label>
//                 <div className="form-error-container">
//                   {errors.receptionistPassword}
//                 </div>
//                 <input
//                   type="password"
//                   name="receptionistPassword"
//                   placeholder="Enter Receptionist Password"
//                   value={loginData.receptionistPassword}
//                   onChange={handleReceptionistChange}
//                   required
//                 />
//               </div>
//               <a href="#forgot" className="forgot-password">
//                 Forgot Password?
//               </a>
//               <button type="submit" className="login-btn">
//                 Login
//               </button>
//             </form>
//           </div>

//           {/* Doctor Login */}
//           <div className="login-section login-title">
//             <h2 className="section-title" id="doc-login-title">
//               Doctor Login
//             </h2>
//             <form onSubmit={handleDoctorSubmit}>
//               <div className="form-group">
//                 <label>Doctor Email:</label>
//                 <div className="form-error-container">{errors.doctorEmail}</div>
//                 <input
//                   type="email"
//                   name="doctorEmail"
//                   placeholder="Enter Doctor Email"
//                   value={loginData.doctorEmail}
//                   onChange={handleDoctorChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Doctor Password:</label>
//                 <div className="form-error-container">
//                   {errors.doctorPassword}
//                 </div>
//                 <input
//                   type="password"
//                   name="doctorPassword"
//                   placeholder="Enter Doctor Password"
//                   value={loginData.doctorPassword}
//                   onChange={handleDoctorChange}
//                   required
//                 />
//               </div>
//               <a href="#forgot" className="forgot-password">
//                 Forgot Password?
//               </a>
//               <button type="submit" className="login-btn">
//                 Login
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginModal;

// ===========================================================================================================

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/LoginModal.css";

const LoginModal = ({ isOpen, onClose }) => {
  // Separate states for each role
  const [patientLogin, setPatientLogin] = useState({
    email: "",
    password: "",
  });

  const [receptionistLogin, setReceptionistLogin] = useState({
    email: "",
    password: "",
  });

  const [doctorLogin, setDoctorLogin] = useState({
    email: "",
    password: "",
  });

  // Separate error states for each role
  const [patientErrors, setPatientErrors] = useState({});
  const [receptionistErrors, setReceptionistErrors] = useState({});
  const [doctorErrors, setDoctorErrors] = useState({});

  // Generic validation function
  const validateFields = (email, password) => {
    const errors = {};

    if (!email.trim()) {
      errors.email = "This field is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!password.trim()) {
      errors.password = "This field is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    return errors;
  };

  // Generic change handler
  const handleChange = (role, field, value) => {
    const updater = {
      patient: setPatientLogin,
      receptionist: setReceptionistLogin,
      doctor: setDoctorLogin,
    }[role];

    const errorSetter = {
      patient: setPatientErrors,
      receptionist: setReceptionistErrors,
      doctor: setDoctorErrors,
    }[role];

    updater((prev) => ({ ...prev, [field]: value }));
    errorSetter((prev) => ({ ...prev, [field]: "" }));
  };

  // Generic submit handler
  const handleSubmit = async (role, credentials, e) => {
    e.preventDefault();
    const errors = validateFields(credentials.email, credentials.password);

    const errorSetter = {
      patient: setPatientErrors,
      receptionist: setReceptionistErrors,
      doctor: setDoctorErrors,
    }[role];

    errorSetter(errors);

    if (Object.keys(errors).length === 0) {
      try {
        alert(`${role} login attempted`, credentials);
        // Reset the corresponding form fields after successful submission
        const stateResetter = {
          patient: setPatientLogin,
          receptionist: setReceptionistLogin,
          doctor: setDoctorLogin,
        }[role];

        stateResetter({ email: "", password: "" });
      } catch (error) {
        alert(`${role} login failed:`, error);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="login-modal">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2 className="modal-title">Medicare - Logins</h2>
        <h3 className="role-select-text">Please select your role to log in:</h3>

        <div className="login-sections">
          {/* Patient Login */}
          <div className="login-section">
            <h2 className="section-title" id="pat-login-title">
              Patient Login
            </h2>
            <form onSubmit={(e) => handleSubmit("patient", patientLogin, e)}>
              <div className="form-group">
                <label>Patient Email:</label>
                <div className="form-error-container">
                  {patientErrors.email}
                </div>
                <input
                  type="email"
                  placeholder="Enter Patient Email"
                  value={patientLogin.email}
                  onChange={(e) =>
                    handleChange("patient", "email", e.target.value)
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label>Patient Password:</label>
                <div className="form-error-container">
                  {patientErrors.password}
                </div>
                <input
                  type="password"
                  placeholder="Enter Patient Password"
                  value={patientLogin.password}
                  onChange={(e) =>
                    handleChange("patient", "password", e.target.value)
                  }
                  required
                />
              </div>
              <Link to="/patient-forgot-password" className="forgot-password">
                Forgot Password?
              </Link>
              <button type="submit" className="login-btn">
                Login
              </button>
            </form>
          </div>

          {/* Receptionist Login */}
          <div className="login-section">
            <h2 className="section-title login-title" id="recep-login-title">
              Receptionist Login
            </h2>
            <form
              onSubmit={(e) =>
                handleSubmit("receptionist", receptionistLogin, e)
              }
            >
              <div className="form-group">
                <label>Receptionist Email:</label>
                <div className="form-error-container">
                  {receptionistErrors.email}
                </div>
                <input
                  type="email"
                  placeholder="Enter Receptionist Email"
                  value={receptionistLogin.email}
                  onChange={(e) =>
                    handleChange("receptionist", "email", e.target.value)
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label>Receptionist Password:</label>
                <div className="form-error-container">
                  {receptionistErrors.password}
                </div>
                <input
                  type="password"
                  placeholder="Enter Receptionist Password"
                  value={receptionistLogin.password}
                  onChange={(e) =>
                    handleChange("receptionist", "password", e.target.value)
                  }
                  required
                />
              </div>
              <Link
                to="/receptionist-forgot-password"
                className="forgot-password"
              >
                Forgot Password?
              </Link>

              <button type="submit" className="login-btn">
                Login
              </button>
            </form>
          </div>

          {/* Doctor Login */}
          <div className="login-section login-title">
            <h2 className="section-title" id="doc-login-title">
              Doctor Login
            </h2>
            <form onSubmit={(e) => handleSubmit("doctor", doctorLogin, e)}>
              <div className="form-group">
                <label>Doctor Email:</label>
                <div className="form-error-container">{doctorErrors.email}</div>
                <input
                  type="email"
                  placeholder="Enter Doctor Email"
                  value={doctorLogin.email}
                  onChange={(e) =>
                    handleChange("doctor", "email", e.target.value)
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label>Doctor Password:</label>
                <div className="form-error-container">
                  {doctorErrors.password}
                </div>
                <input
                  type="password"
                  placeholder="Enter Doctor Password"
                  value={doctorLogin.password}
                  onChange={(e) =>
                    handleChange("doctor", "password", e.target.value)
                  }
                  required
                />
              </div>
              <Link to="/doctor-forgot-password" className="forgot-password">
                Forgot Password?
              </Link>

              <button type="submit" className="login-btn">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
