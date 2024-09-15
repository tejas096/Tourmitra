import React, { useState } from "react";

const Login = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const handleRoleClick = (role) => {
    setSelectedRole(role);
  };
  return (
    <div className="login-container">
      {!selectedRole ? (
        <>
          <h1 className="header">Choose Your Role</h1>
          <div className="role-selection">
            <div
              className="role-card tourist"
              onClick={() => handleRoleClick("tourist")}
            >
              <div className="content">
                <h2>Tourist</h2>
                <p>Explore new destinations</p>
              </div>
            </div>
            <div
              className="role-card tourguide"
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
        <div className="login-form">
          <h2>
            {selectedRole === "tourist" ? "Tourist Login" : "Tour Guide Login"}
          </h2>
          <form>
            <div className="input-group">
              <label>Email:</label>
              <input type="email" placeholder="Enter your email" />
            </div>
            <div className="input-group">
              <label>Password:</label>
              <input type="password" placeholder="Enter your password" />
            </div>
            <button type="submit" className="submit-btn">
              Login
            </button>
          </form>
          <button className="back-btn" onClick={() => setSelectedRole(null)}>
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
