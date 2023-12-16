import React from "react";
import "./LandingPage2.css";
const infos = [
  {
    id: "01",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus",
  },
  {
    id: "02",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus",
  },
  {
    id: "03",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus",
  },
];
const LandingPage2 = () => {
  return (
    <>
      <div className="LandingPage2Box">
        <div className="LandingPage2Texts">
          <h1>DESIGN THE FUTURE</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
            imperdiet sed id elementum. Quam vel aliquam sit vulputate. Faucibus
            nec gravida ipsum pulvinar vel non dui.
          </p>
          <button>Get Started</button>
        </div>
        <div className="LandingPage2InfoBox">
          {infos.map((x, i) => (
            <div key={i} className="innerCardView">
              <h3>{x.id}</h3>
              <p>{x.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LandingPage2;
