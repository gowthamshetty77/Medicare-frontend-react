// import React, { useState } from "react";
// import "../styles/SignupModal.css";

// const SignupModal = ({ isOpen, onClose }) => {
//   const [signupData, setSignupData] = useState({
//     patientName: "",
//     patientAge: "",
//     patientGender: "",
//     patientPhone: "",
//     patientEmail: "",
//     patientPassword: "",
//     patientConfirmPassword: "",
//     receptionistName: "",
//     receptionistAge: "",
//     receptionistGender: "",
//     receptionistPhone: "",
//     receptionistEmail: "",
//     receptionistPassword: "",
//     receptionistConfirmPassword: "",
//   });

//   const [errors, setErrors] = useState({});

//   // Separate validation functions for each role
//   const validatePatientFields = (name, value) => {
//     let error = "";
//     if (!value.trim()) {
//       error = "This field is required";
//     } else {
//       switch (name) {
//         case "patientEmail":
//           if (!/\S+@\S+\.\S+/.test(value)) {
//             error = "Please enter a valid email address";
//           }
//           break;
//         case "patientPhone":
//           if (!/^\d{10}$/.test(value)) {
//             error = "Please enter a valid 10-digit phone number";
//           }
//           break;
//         case "patientAge":
//           if (
//             !/^\d+$/.test(value) ||
//             parseInt(value) < 1 ||
//             parseInt(value) > 120
//           ) {
//             error = "Please enter a valid age between 1 and 120";
//           }
//           break;
//         case "patientPassword":
//           if (value.length < 6) {
//             error = "Password must be at least 6 characters long";
//           }
//           break;
//         case "patientConfirmPassword":
//           if (value !== signupData.patientPassword) {
//             error = "Passwords do not match";
//           }
//           break;
//         default:
//           break;
//       }
//     }
//     return error;
//   };

//   const validateReceptionistFields = (name, value) => {
//     let error = "";
//     if (!value.trim()) {
//       error = "This field is required";
//     } else {
//       switch (name) {
//         case "receptionistEmail":
//           if (!/\S+@\S+\.\S+/.test(value)) {
//             error = "Please enter a valid email address";
//           }
//           break;
//         case "receptionistPhone":
//           if (!/^\d{10}$/.test(value)) {
//             error = "Please enter a valid 10-digit phone number";
//           }
//           break;
//         case "receptionistAge":
//           if (
//             !/^\d+$/.test(value) ||
//             parseInt(value) < 1 ||
//             parseInt(value) > 120
//           ) {
//             error = "Please enter a valid age between 1 and 120";
//           }
//           break;
//         case "receptionistPassword":
//           if (value.length < 6) {
//             error = "Password must be at least 6 characters long";
//           }
//           break;
//         case "receptionistConfirmPassword":
//           if (value !== signupData.receptionistPassword) {
//             error = "Passwords do not match";
//           }
//           break;
//         default:
//           break;
//       }
//     }
//     return error;
//   };

//   // Separate change handlers for each role
//   const handlePatientChange = (e) => {
//     const { name, value } = e.target;
//     setSignupData((prev) => ({
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
//     setSignupData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//     const error = validateReceptionistFields(name, value);
//     setErrors((prev) => ({
//       ...prev,
//       [name]: error,
//     }));
//   };

//   // Separate submit handlers for each role
//   const handlePatientSubmit = async (e) => {
//     e.preventDefault();
//     const fields = [
//       "patientName",
//       "patientAge",
//       "patientGender",
//       "patientPhone",
//       "patientEmail",
//       "patientPassword",
//       "patientConfirmPassword",
//     ];
//     const newErrors = {};

//     fields.forEach((field) => {
//       const error = validatePatientFields(field, signupData[field]);
//       if (error) newErrors[field] = error;
//     });

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       try {
//         // Patient-specific signup logic here
//         console.log("Patient signup attempted", {
//           name: signupData.patientName,
//           age: signupData.patientAge,
//           gender: signupData.patientGender,
//           phone: signupData.patientPhone,
//           email: signupData.patientEmail,
//           password: signupData.patientPassword,
//         });
//         // Add your patient signup API call here
//       } catch (error) {
//         console.error("Patient signup failed:", error);
//       }
//     }
//   };

//   const handleReceptionistSubmit = async (e) => {
//     e.preventDefault();
//     const fields = [
//       "receptionistName",
//       "receptionistAge",
//       "receptionistGender",
//       "receptionistPhone",
//       "receptionistEmail",
//       "receptionistPassword",
//       "receptionistConfirmPassword",
//     ];
//     const newErrors = {};

//     fields.forEach((field) => {
//       const error = validateReceptionistFields(field, signupData[field]);
//       if (error) newErrors[field] = error;
//     });

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       try {
//         // Receptionist-specific signup logic here
//         console.log("Receptionist signup attempted", {
//           name: signupData.receptionistName,
//           age: signupData.receptionistAge,
//           gender: signupData.receptionistGender,
//           phone: signupData.receptionistPhone,
//           email: signupData.receptionistEmail,
//           password: signupData.receptionistPassword,
//         });
//         // Add your receptionist signup API call here
//       } catch (error) {
//         console.error("Receptionist signup failed:", error);
//       }
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="modal-overlay">
//       <div className="signup-modal">
//         <button className="close-button" onClick={onClose}>
//           &times;
//         </button>
//         <h2 className="modal-title">Medicare - SignUp</h2>
//         <h3 className="role-select-text">
//           Please select your role to sign up:
//         </h3>

//         <div className="signup-sections">
//           {/* Patient Signup */}
//           <div className="signup-section">
//             <h2 className="section-title">Patient SignUp</h2>
//             <form onSubmit={handlePatientSubmit}>
//               <div className="form-group">
//                 <label>Patient Name:</label>
//                 <div className="form-error-container">{errors.patientName}</div>
//                 <input
//                   type="text"
//                   name="patientName"
//                   placeholder="Enter Patient Name"
//                   value={signupData.patientName}
//                   onChange={handlePatientChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Patient Age:</label>
//                 <div className="form-error-container">{errors.patientAge}</div>
//                 <input
//                   type="text"
//                   name="patientAge"
//                   placeholder="Enter Patient Age"
//                   value={signupData.patientAge}
//                   onChange={handlePatientChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Patient Gender:</label>
//                 <div className="form-error-container">
//                   {errors.patientGender}
//                 </div>
//                 <input
//                   type="text"
//                   name="patientGender"
//                   placeholder="Enter Patient Gender"
//                   value={signupData.patientGender}
//                   onChange={handlePatientChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Patient Phone:</label>
//                 <div className="form-error-container">
//                   {errors.patientPhone}
//                 </div>
//                 <input
//                   type="tel"
//                   name="patientPhone"
//                   placeholder="Enter Patient Phone"
//                   value={signupData.patientPhone}
//                   onChange={handlePatientChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Patient Email:</label>
//                 <div className="form-error-container">
//                   {errors.patientEmail}
//                 </div>
//                 <input
//                   type="email"
//                   name="patientEmail"
//                   placeholder="Enter Patient Email"
//                   value={signupData.patientEmail}
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
//                   value={signupData.patientPassword}
//                   onChange={handlePatientChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Confirm Patient Password:</label>
//                 <div className="form-error-container">
//                   {errors.patientConfirmPassword}
//                 </div>
//                 <input
//                   type="password"
//                   name="patientConfirmPassword"
//                   placeholder="Confirm Patient Password"
//                   value={signupData.patientConfirmPassword}
//                   onChange={handlePatientChange}
//                   required
//                 />
//               </div>
//               <button type="submit" className="signup-btn">
//                 SignUp
//               </button>
//             </form>
//           </div>

//           {/* Receptionist Signup */}
//           <div className="signup-section">
//             <h2 className="section-title">Receptionist SignUp</h2>
//             <form onSubmit={handleReceptionistSubmit}>
//               <div className="form-group">
//                 <label>Receptionist Name:</label>
//                 <div className="form-error-container">
//                   {errors.receptionistName}
//                 </div>
//                 <input
//                   type="text"
//                   name="receptionistName"
//                   placeholder="Enter Receptionist Name"
//                   value={signupData.receptionistName}
//                   onChange={handleReceptionistChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Receptionist Age:</label>
//                 <div className="form-error-container">
//                   {errors.receptionistAge}
//                 </div>
//                 <input
//                   type="text"
//                   name="receptionistAge"
//                   placeholder="Enter Receptionist Age"
//                   value={signupData.receptionistAge}
//                   onChange={handleReceptionistChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Receptionist Gender:</label>
//                 <div className="form-error-container">
//                   {errors.receptionistGender}
//                 </div>
//                 <input
//                   type="text"
//                   name="receptionistGender"
//                   placeholder="Enter Receptionist Gender"
//                   value={signupData.receptionistGender}
//                   onChange={handleReceptionistChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Receptionist Phone:</label>
//                 <div className="form-error-container">
//                   {errors.receptionistPhone}
//                 </div>
//                 <input
//                   type="tel"
//                   name="receptionistPhone"
//                   placeholder="Enter Receptionist Phone"
//                   value={signupData.receptionistPhone}
//                   onChange={handleReceptionistChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Receptionist Email:</label>
//                 <div className="form-error-container">
//                   {errors.receptionistEmail}
//                 </div>
//                 <input
//                   type="email"
//                   name="receptionistEmail"
//                   placeholder="Enter Receptionist Email"
//                   value={signupData.receptionistEmail}
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
//                   value={signupData.receptionistPassword}
//                   onChange={handleReceptionistChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Confirm Receptionist Password:</label>
//                 <div className="form-error-container">
//                   {errors.receptionistConfirmPassword}
//                 </div>
//                 <input
//                   type="password"
//                   name="receptionistConfirmPassword"
//                   placeholder="Confirm Receptionist Password"
//                   value={signupData.receptionistConfirmPassword}
//                   onChange={handleReceptionistChange}
//                   required
//                 />
//               </div>
//               <button type="submit" className="signup-btn">
//                 SignUp
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignupModal;
// ============================================================================================================

import React, { useState } from "react";
import "../styles/SignupModal.css";

const SignupModal = ({ isOpen, onClose }) => {
  // Separate states for each role
  const [patient, setPatient] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [receptionist, setReceptionist] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Separate error states
  const [patientErrors, setPatientErrors] = useState({});
  const [receptionistErrors, setReceptionistErrors] = useState({});

  // Generic validation function
  const validateFields = (role, data) => {
    const errors = {};

    if (!data.name.trim()) errors.name = "Name is required";
    if (!data.age.trim()) errors.age = "Age is required";
    if (!data.gender.trim()) errors.gender = "Gender is required";
    if (!data.phone.trim()) errors.phone = "Phone is required";
    if (!data.email.trim()) errors.email = "Email is required";
    if (!data.password.trim()) errors.password = "Password is required";
    if (!data.confirmPassword.trim())
      errors.confirmPassword = "Confirm Password is required";

    if (
      data.age &&
      (!/^\d+$/.test(data.age) ||
        parseInt(data.age) < 1 ||
        parseInt(data.age) > 120)
    ) {
      errors.age = "Please enter a valid age between 1 and 120";
    }

    if (data.phone && !/^\d{10}$/.test(data.phone)) {
      errors.phone = "Please enter a valid 10-digit phone number";
    }

    if (data.email && !/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (data.password && data.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    if (data.confirmPassword && data.confirmPassword !== data.password) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  // Generic change handler
  const handleChange = (role, field, value) => {
    const updater = {
      patient: setPatient,
      receptionist: setReceptionist,
    }[role];

    const errorSetter = {
      patient: setPatientErrors,
      receptionist: setReceptionistErrors,
    }[role];

    updater((prev) => ({ ...prev, [field]: value }));
    errorSetter((prev) => ({ ...prev, [field]: "" }));
  };

  // Generic submit handler
  const handleSubmit = async (role, data, e) => {
    e.preventDefault();
    const errors = validateFields(role, data);

    const errorSetter = {
      patient: setPatientErrors,
      receptionist: setReceptionistErrors,
    }[role];

    errorSetter(errors);

    if (Object.keys(errors).length === 0) {
      try {
        alert(`${role} signup attempted`, data);
        // Add your API call here

        // Reset form after successful submission
        const resetter = {
          patient: setPatient,
          receptionist: setReceptionist,
        }[role];

        resetter({
          name: "",
          age: "",
          gender: "",
          phone: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      } catch (error) {
        alert(`${role} signup failed:`, error);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="signup-modal">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2 className="modal-title">Medicare - SignUp</h2>
        <h3 className="role-select-text">
          Please select your role to sign up:
        </h3>

        <div className="signup-sections">
          {/* Patient Signup */}
          <div className="signup-section">
            <h2 className="section-title">Patient SignUp</h2>
            <form onSubmit={(e) => handleSubmit("patient", patient, e)}>
              <div className="form-group">
                <label>Patient Name:</label>
                <div className="form-error-container">{patientErrors.name}</div>
                <input
                  type="text"
                  placeholder="Enter Patient Name"
                  value={patient.name}
                  onChange={(e) =>
                    handleChange("patient", "name", e.target.value)
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label>Patient Age:</label>
                <div className="form-error-container">{patientErrors.age}</div>
                <input
                  type="number"
                  placeholder="Enter Patient Age"
                  value={patient.age}
                  onChange={(e) =>
                    handleChange("patient", "age", e.target.value)
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label>Patient Gender:</label>
                <div className="form-error-container">
                  {patientErrors.gender}
                </div>
                <input
                  type="text"
                  placeholder="Enter Patient Gender"
                  value={patient.gender}
                  onChange={(e) =>
                    handleChange("patient", "gender", e.target.value)
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label>Patient Phone:</label>
                <div className="form-error-container">
                  {patientErrors.phone}
                </div>
                <input
                  type="tel"
                  placeholder="Enter Patient Phone"
                  value={patient.phone}
                  onChange={(e) =>
                    handleChange("patient", "phone", e.target.value)
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label>Patient Email:</label>
                <div className="form-error-container">
                  {patientErrors.email}
                </div>
                <input
                  type="email"
                  placeholder="Enter Patient Email"
                  value={patient.email}
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
                  value={patient.password}
                  onChange={(e) =>
                    handleChange("patient", "password", e.target.value)
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label>Confirm Patient Password:</label>
                <div className="form-error-container">
                  {patientErrors.confirmPassword}
                </div>
                <input
                  type="password"
                  placeholder="Confirm Patient Password"
                  value={patient.confirmPassword}
                  onChange={(e) =>
                    handleChange("patient", "confirmPassword", e.target.value)
                  }
                  required
                />
              </div>
              <button type="submit" className="signup-btn">
                SignUp
              </button>
            </form>
          </div>

          {/* Receptionist Signup */}
          <div className="signup-section">
            <h2 className="section-title">Receptionist SignUp</h2>
            <form
              onSubmit={(e) => handleSubmit("receptionist", receptionist, e)}
            >
              <div className="form-group">
                <label>Receptionist Name:</label>
                <div className="form-error-container">
                  {receptionistErrors.name}
                </div>
                <input
                  type="text"
                  placeholder="Enter Receptionist Name"
                  value={receptionist.name}
                  onChange={(e) =>
                    handleChange("receptionist", "name", e.target.value)
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label>Receptionist Age:</label>
                <div className="form-error-container">
                  {receptionistErrors.age}
                </div>
                <input
                  type="number"
                  placeholder="Enter Receptionist Age"
                  value={receptionist.age}
                  onChange={(e) =>
                    handleChange("receptionist", "age", e.target.value)
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label>Receptionist Gender:</label>
                <div className="form-error-container">
                  {receptionistErrors.gender}
                </div>
                <input
                  type="text"
                  placeholder="Enter Receptionist Gender"
                  value={receptionist.gender}
                  onChange={(e) =>
                    handleChange("receptionist", "gender", e.target.value)
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label>Receptionist Phone:</label>
                <div className="form-error-container">
                  {receptionistErrors.phone}
                </div>
                <input
                  type="tel"
                  placeholder="Enter Receptionist Phone"
                  value={receptionist.phone}
                  onChange={(e) =>
                    handleChange("receptionist", "phone", e.target.value)
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label>Receptionist Email:</label>
                <div className="form-error-container">
                  {receptionistErrors.email}
                </div>
                <input
                  type="email"
                  placeholder="Enter Receptionist Email"
                  value={receptionist.email}
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
                  value={receptionist.password}
                  onChange={(e) =>
                    handleChange("receptionist", "password", e.target.value)
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label>Confirm Receptionist Password:</label>
                <div className="form-error-container">
                  {receptionistErrors.confirmPassword}
                </div>
                <input
                  type="password"
                  placeholder="Confirm Receptionist Password"
                  value={receptionist.confirmPassword}
                  onChange={(e) =>
                    handleChange(
                      "receptionist",
                      "confirmPassword",
                      e.target.value
                    )
                  }
                  required
                />
              </div>
              <button type="submit" className="signup-btn">
                SignUp
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
