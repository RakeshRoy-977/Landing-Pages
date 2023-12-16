import React from "react";
import "./HomePage.css";
import Cardview from "./Cardview";
const HomePage = () => {
  return (
    <>
      <div className="homepageBox">
        <div className="titelBox">
          <h1>Welcome to Landing Pages</h1>
        </div>
        <div className="pagesBox">
          <Cardview />
        </div>
      </div>
    </>
  );
};

export default HomePage;
