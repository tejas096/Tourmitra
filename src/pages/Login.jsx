import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assests/logo.jpg";

const Login = () => {
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
              <Link to={"/signup"}>
                <i class="text-xl ri-user-heart-fill"></i>SignUp
              </Link>
            </button>
            {/* <button class="flex items-center font-medium gap-2"><i
                      class="text-xl ri-heart-pulse-fill"></i>Medical Tourism</button> */}
          </div>
        </div>
      </nav>
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
              {selectedRole === "tourist"
                ? "Tourist Login"
                : "Tour Guide Login"}
            </h2>
            <div className="input-group">
              <label>Email:</label>
              <input type="email" placeholder="Enter your email" />
            </div>
            <div className="input-group">
              <label>Password:</label>
              <input type="password" placeholder="Enter your password" />
            </div>
            {selectedRole == "tourist" ? (
              <>
                <Link className="s-btn" to={"/bookguide"}>
                  Login
                </Link>
              </>
            ) : (
              <>
                <Link className="s-btn" to={"/guideinfo"}>
                  Login
                </Link>
              </>
            )}
            <button className="back-btn" onClick={() => setSelectedRole(null)}>
              Back
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
