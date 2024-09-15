import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const handleRoleClick = (role) => {
    setSelectedRole(role);
  };
  return (
    <div className="signup-container">
      {!selectedRole ? (
        <>
          <h1 className="header just-margin">Choose Your Role</h1>

          <div className="signup-role-selection">
            <div
              className="signup-role-card signup-tourist"
              onClick={() => handleRoleClick("tourist")}
            >
              <div className="content">
                <h2>Tourist</h2>
                <p>Explore new destinations</p>
              </div>
            </div>
            <div
              className="signup-role-card signup-tourguide"
              onClick={() => handleRoleClick("tourguide")}
            >
              <div className="content">
                <h2>Tour Guide</h2>
                <p>Guide others on their adventures</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div
          className={`signup-form-container ${
            selectedRole === "tourguide" ? "tourguide-form-container" : ""
          }`}
        >
          <h2>
            {selectedRole === "tourist"
              ? "Tourist Sign-Up"
              : "Tour Guide Sign-Up"}
          </h2>
          <div className="signup-input-group">
            <label>Name:</label>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className="signup-input-group">
            <label>Email:</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="signup-input-group">
            <label>Password:</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <div className="signup-input-group">
            <label>Confirm Password:</label>
            <input
              type="Confirm password"
              placeholder="confirm your password"
            />
          </div>

          {/* Conditional fields for Tour Guide Sign-Up */}
          {selectedRole === "tourguide" && (
            <>
              <div className="signup-input-group">
                <label>Address:</label>
                <input type="text" placeholder="Enter your address" />
              </div>
              <div className="signup-input-group">
                <label>Mobile Number:</label>
                <input type="tel" placeholder="Enter your mobile number" />
              </div>
              <div className="aadhar-policegroup">
                <div className="signup-input-group adhar-card">
                  <label>Aadhar Card (PDF):</label>
                  <input type="file" accept="application/pdf" />
                </div>
                <div className="signup-input-group police-verification">
                  <label>Police Verification Document (PDF):</label>
                  <input type="file" accept="application/pdf" />
                </div>
              </div>
            </>
          )}
          {selectedRole == "tourist" ? (
            <>
              <Link className="signup-submit-btn" to={"/bookguide"}>
                Sign up
              </Link>
            </>
          ) : (
            <>
              <Link className="signup-submit-btn" to={"/guideinfo"}>
                Sign up
              </Link>
            </>
          )}
          <button
            className="signup-back-btn"
            onClick={() => setSelectedRole(null)}
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default Signup;
