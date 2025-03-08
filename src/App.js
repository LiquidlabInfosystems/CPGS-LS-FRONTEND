import React from "react";
import { HashRouter as Router, Route,Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Loginpage from "./Pages/LoginPage/Loginpage";
import Spacesetup from "./Pages/Spacesetup/Spacesetup";
import ManualCoordinateFinder from "./Pages/ManualCoordinateFinder/ManualCoordinateFinder";
import AutoCoordinateFinder from "./Pages/AutoCoordinateFinder/AutoCoordinateFinder";

export default function App() {
  return (
    <>
      <Router>
  
        <Routes>
          {/* Unauthenticated Routes */}
          <Route path="/login" element={<Loginpage/>} />
          <Route path="/" element={<Dashboard/>} />
          <Route path="/space/:space_id" element={<Spacesetup/>} />
          <Route path="/manual_calibrate/:space_id" element={<ManualCoordinateFinder/>} />
          <Route path="/automatic_calibrate/:space_id" element={<AutoCoordinateFinder/>} />
        </Routes>
     
    </Router>
    </>
    
  );
}
