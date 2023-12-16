import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LandingPage1 from "./Pages/page1/LandingPage1";
import LandingPage2 from "./Pages/Page2/LandingPage2";
import LandingPage3 from "./Pages/Page3/LandingPage3";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/LandingPage1" element={<LandingPage1 />} />
        <Route path="/LandingPage2" element={<LandingPage2 />} />
        <Route path="/LandingPage3" element={<LandingPage3 />} />
      </Routes>
    </>
  );
};

export default App;
