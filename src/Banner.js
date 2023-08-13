import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://wallpapercave.com/wp/wp1917118.jpg')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">Movie Name</h1>
        <div className="banner-buttons">
          <button>Play</button>
          <button>My List</button>
        </div>
      </div>
    </header>
  );
}

export default Banner;
