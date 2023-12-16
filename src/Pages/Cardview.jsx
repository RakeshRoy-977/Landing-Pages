import React from "react";
import "./Cardview.css";
import { useNavigate } from "react-router-dom";

const Cardview = () => {
  const Pages = [
    {
      id: 1,
      title: "Page 1",
      img: "/Imgs/assets1/page1.png",
    },
    {
      id: 2,
      title: "Page 2",
      img: "/Imgs/assets2/page2.png",
    },
    {
      id: 3,
      title: "Page 3",
      img: "/Imgs/assets3/page3.png",
    },
    {
      id: 4,
      title: "Page 4",
      img: "/Imgs/page4.png",
      link: "https://rakeshroy-977.github.io/Nike-Landing-Page/",
    },
    {
      id: 5,
      title: "Page 5",
      img: "/Imgs/page5.png",
      link: "https://coke-landing-page-five.vercel.app/",
    },
    {
      id: 6,
      title: "Page 6",
      img: "/Imgs/assets1/page1.png",
    },
  ];

  const NAV = useNavigate();

  function HandelNavToPage(x) {
    const page = Pages.find((page) => page.id === x);
    if (page) {
      if (page.link) {
        console.log("have link");
        window.location.href = page.link;
      } else {
        NAV(`/LandingPage${x}`);
      }
    }
  }
  return (
    <>
      <div className="cardView">
        {Pages.map((x) => (
          <div key={x.id}>
            <img
              onClick={() => HandelNavToPage(x.id)}
              src={x.img}
              alt={x.title}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Cardview;
