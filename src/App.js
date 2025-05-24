import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Departments from "./components/Departments";
import AmbulanceService from "./components/AmbulanceService";
import Statistics from "./components/Statistics";
import RecentStories from "./components/RecentStories";
import Footer from "./components/Footer";
import DoctorDashboard from "./components/DoctorDashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import PatientDashboard from "./components/PatientDashboard";
import ReceptionistDashboard from "./components/ReceptionistDashboard";
import PatientForgotPassword from "./components/PatientForgotPassword";
import DoctorForgotPassword from "./components/DoctorForgotPassword";
import ReceptionistForgotPassword from "./components/ReceptionistForgotPassword";

// Layout for the main public pages
const MainLayout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Routes>
          {/* Public routes with main layout */}
          <Route
            path="/"
            element={
              <MainLayout>
                <>
                  <Home />
                  <Departments />
                  <AmbulanceService />
                  <Statistics />
                  <RecentStories />
                </>
              </MainLayout>
            }
          />

          {/* Doctor dashboard route without main layout */}
          <Route path="/doctor-dashboard" element={<DoctorDashboard />} />

          {/* Patient dashboard route without main layout */}
          <Route path="/patient-dashboard" element={<PatientDashboard />} />

          {/* Receptionist dashboard route without main layout */}
          <Route
            path="/receptionist-dashboard"
            element={<ReceptionistDashboard />}
          />

          {/* ----- Forgot Password for every role----- */}
          <Route
            path="/patient-forgot-password"
            element={<PatientForgotPassword />}
          />
          <Route
            path="/doctor-forgot-password"
            element={<DoctorForgotPassword />}
          />
          <Route
            path="/receptionist-forgot-password"
            element={<ReceptionistForgotPassword />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
