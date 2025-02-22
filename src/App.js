import React from "react";
import "./css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./jsx/Navbar";
import Home from "./jsx/Home";  // 기본 페이지
import Map from "./jsx/Map";
import Perform from "./jsx/Perform";
import Volunteer from "./jsx/Volunteer";
import Education from "./jsx/Education";
import Gym from "./jsx/Gym";
import Art from "./jsx/Art";
import Hobby from "./jsx/Hobby";
import Religion from "./jsx/Religion";

const App = () => {
  return (
      <Router>
        <Navbar /> {/* 모든 페이지에서 네비게이션 바 유지 */}
        <Routes>
          <Route path="/" element={<Home />} />  {/* 기본 경로를 Home 페이지로 설정 */}
          <Route path="/map" element={<Map />} />
          <Route path="/perform" element={<Perform />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/education" element={<Education />} />
          <Route path="/gym" element={<Gym />} />
          <Route path="/art" element={<Art />} />
          <Route path="/hobby" element={<Hobby />} />
          <Route path="/religion" element={<Religion />} />
        </Routes>
      </Router>
  );
};

export default App;
