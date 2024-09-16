import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assests/logo.jpg";

const Signup = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const handleRoleClick = (role) => {
    setSelectedRole(role);
  };
  return (
    <>
      <button className="fixed hidden lg:flex z-20 flex gap-1 bg-gray-100 border border-[#FD6512] px-3 rounded-[20px] py-1 top-[88%] right-[11%]">
        <i className="ri-phone-line" />
        <h1>51848484</h1>
      </button>
      <Link to={"/bookguide"}>
        <button className="fixed hidden lg:flex z-20 flex gap-1 border bg-[#FD6512] text-white px-3 rounded-[20px] py-1 top-[88%] right-[1%]">
          <i className="ri-map-pin-2-line" />
          <h1>Plan Your Trip</h1>
        </button>
      </Link>
      <div className="fixed hidden lg:flex h-[12vh] border-gray-100 bg-zinc-100 border items-center justify-center gap-10 flex w-full z-10 bg-white top-[90%] p-2">
        <Link to={"/bookguide"}>
          <div className="flex flex-col items-center justify-center">
            <div className="bg-[url(https://www.tourmyindia.com/imgnew/india-tour.svg)] bg-cover bg-center h-[5vh] w-[2vw]"></div>
            <h1 className="text-gray-500 font-normal">India Tour-Guides</h1>
          </div>
        </Link>
        <Link to={"/bookguide"}>
          <div className="flex flex-col items-center justify-center">
            <div className="bg-[url(https://www.tourmyindia.com/imgnew/international-tour.svg)] bg-cover bg-center h-[5vh] w-[2vw]"></div>
            <h1 className="text-gray-500 font-nornal">
              International Tour-Guides
            </h1>
          </div>
        </Link>
      </div>
      <nav className="nav flex w-full h-[10vh] justify-between items-center p-5 bg-white shadow-lg">
        {/* img and buttons section */}
        <div className="part1 flex items-center gap-4">
          {/* Logo */}
          <div className="h-[8vh] w-[15vw] lg:h-[10vh] lg:w-[4vw] bg-center bg-cover">
            <img className="logo-jpg-file" src={Logo} alt="" />
          </div>
          {/* Dropdown Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link to={"/"}>
              <button className="flex items-center font-medium">
                Home{" "}
                <i className="text-gray-500 text-2xl ri-arrow-drop-down-line" />
              </button>
            </Link>
            <Link to={"/bookguide"}>
              <button className="flex items-center font-medium">
                Destination
                <i className="text-gray-500 text-2xl ri-arrow-drop-down-line" />
              </button>
            </Link>
            <Link to={"/bookguide"}>
              <button className="lg:flex hidden items-center font-medium">
                Booking{" "}
                <i className="text-gray-500 text-2xl ri-arrow-drop-down-line" />
              </button>
            </Link>
            <button className="lg:flex hidden items-center font-medium">
              Contact Us{" "}
              <i className="text-gray-500 text-2xl ri-arrow-drop-down-line" />
            </button>
            <button className="lg:flex hidden items-center font-medium">
              Weekend Getaways{" "}
              <i className="text-gray-500 text-2xl ri-arrow-drop-down-line" />
            </button>
          </div>
          {/* Mobile Hamburger Icon */}
          <button className="md:hidden ml-[200px] text-gray-500 text-3xl">
            <i className="ri-menu-line" />
          </button>
        </div>
        {/* icons and buttons section */}
        <div className="part2 flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-5">
            <button className="flex items-center font-medium gap-2">
              <Link to={"/login"}>
                <i class="text-xl ri-map-pin-user-fill"></i>Login
              </Link>
            </button>
            {/* <button class="flex items-center font-medium gap-2"><i
                      class="text-xl ri-heart-pulse-fill"></i>Medical Tourism</button> */}
          </div>
        </div>
      </nav>
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
    </>
  );
};

export default Signup;
