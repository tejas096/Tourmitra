import React, { useState } from "react";
import GuideAvatar from "../assests/Raveena.jpg";

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
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <div className="guide-info">
          <img className="guide-avatar" alt="Guide Avatar" src={GuideAvatar} />
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
  );
};

export default Guide;
