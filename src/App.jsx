import { Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Guide from "./pages/Guide";
import BookGuide from "./pages/BookGuide";
import Home from "./pages/Home";
import RajYadav from "./pages/RajYadav";
import AyushSingh from "./pages/AyushSingh";
import HemantTiwari from "./pages/HemantTiwari";
import GoldyKumari from "./pages/GoldyKumari";
import ShivamSahu from "./pages/ShivamSahu";
import RadhaMishra from "./pages/RadhaMishra";
import AyushiOberoi from "./pages/AyushiOberoi";
import ElvishYadav from "./pages/ElvishYadav";
import HimanshuMeena from "./pages/HimanshuMeena";
import JethalalGada from "./pages/JethalalGada";
import ShubhamKirar from "./pages/ShubhamKirar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/radhamishra" element={<RadhaMishra />} />
      <Route path="/ayushioberoi" element={<AyushiOberoi />} />
      <Route path="/elvishyadav" element={<ElvishYadav />} />
      <Route path="/himanshumeena" element={<HimanshuMeena />} />
      <Route path="/jethalalgada" element={<JethalalGada />} />
      <Route path="/shubhamkirar" element={<ShubhamKirar />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/bookguide" element={<BookGuide />} />
      <Route path="/rajyadav" element={<RajYadav />} />
      <Route path="/shivamsahu" element={<ShivamSahu />} />
      <Route path="/ayushsingh" element={<AyushSingh />} />
      <Route path="/hemanttiwari" element={<HemantTiwari />} />
      <Route path="/goldykumari" element={<GoldyKumari />} />
      <Route path="/guideinfo" element={<Guide />} />
    </Routes>
  );
}

export default App;
