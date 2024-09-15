import { Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Guide from "./pages/Guide";
import GuideDetail from "./pages/GuideDetail";
import BookGuide from "./pages/BookGuide";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/bookguide" element={<BookGuide />} />
      <Route path="/aboutguide" element={<GuideDetail />} />
      <Route path="/guideinfo" element={<Guide />} />
    </Routes>
  );
}

export default App;
