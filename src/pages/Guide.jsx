import React, { useState } from "react";
import GuideAvatar from "../assests/Raveena.jpg";
import { Link } from "react-router-dom";
import Logo from "../assests/logo.jpg";

const Guide = () => {
  const [isActive, setIsActive] = useState(true);
  const toggleStatus = () => {
    setIsActive(!isActive);
  };
  const guideName = "Kuhu Sharma";
  const totalEarnings = "₹50,000";
  const weeklyEarnings = "₹12,000";
  const jobs = [
    {
      client: "Amit Patel",
      job: "Agra City Tour",
      date: "15th Sep",
      status: "Upcoming",
      duration: "9 Hours",
      payment: "₹5,000",
    },
    {
      client: "Sita Roy",
      job: "Fatehpur Sikri",
      date: "14th Sep",
      status: "Completed",
      duration: "6 hours",
      payment: "₹1000",
    },
    {
      client: "Rahul Verma",
      job: "Agra Taj Mahal Tour",
      date: "13th Sep",
      status: "Completed",
      duration: "5 hours",
      payment: "₹800",
    },
  ];
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
            <Link to={"/"}>
              <button className="flex items-center font-medium gap-2">
                Logout
              </button>
            </Link>
            {/* <button class="flex items-center font-medium gap-2"><i
                      class="text-xl ri-heart-pulse-fill"></i>Medical Tourism</button> */}
          </div>
        </div>
      </nav>
      <div className="dashboard-container">
        {/* Header */}
        <header className="dashboard-header">
          <div className="guide-info">
            <img
              className="guide-avatar"
              alt="Guide Avatar"
              src={GuideAvatar}
            />
            <h1>Welcome, {guideName}</h1>
          </div>
          <button
            className={`status-btn ${isActive ? "active" : "inactive"}`}
            onClick={toggleStatus}
          >
            {isActive ? "Active" : "Inactive"}
          </button>
        </header>

        {/* Earnings Section */}
        <section className="earnings-section">
          <h2>Earnings</h2>
          <div className="earnings-details">
            <div className="total-earnings">
              <h3>Total Earnings</h3>
              <p className="amount">{totalEarnings}</p>
            </div>
            <div className="weekly-earnings">
              <h3>Weekly Earnings</h3>
              <p className="amount">{weeklyEarnings}</p>
            </div>
          </div>
        </section>

        {/* Job Listings Section */}
        <section className="job-listings">
          <h2>Upcoming & Recent Jobs</h2>
          {jobs.map((job, index) => (
            <div className="job-card" key={index}>
              <h3>{job.job}</h3>
              <p>
                <strong>Client:</strong> {job.client}
              </p>
              <p>
                <strong>Date:</strong> {job.date}
              </p>
              <p>
                <strong>Status:</strong> {job.status}
              </p>
              <p>
                <strong>Duration:</strong> {job.duration}
              </p>
              <p>
                <strong>Payment:</strong> {job.payment}
              </p>
            </div>
          ))}
        </section>

        {/* Feedback Section */}
        <section className="feedback-section">
          <h2>Feedback</h2>
          <div className="feedback-card">
            <h3>"Great Tour!"</h3>
            <p>
              <strong>Client:</strong> Sita Roy
            </p>
            <p>
              <strong>Rating:</strong> ⭐⭐⭐⭐⭐
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Guide;
