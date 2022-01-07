import React from "react";
import "./App.css";
import "./fonts/gunplay-3d.ttf";
import NavBar from "./Navbar";
import useWindowDimensions from "./hooks/useWindowDimensions";

const App = () => {
  const { width } = useWindowDimensions();
  return (
    <div>
      <NavBar />
      <div className="position-absolute top-50 start-50 translate-middle text-center">
        <div
          className={width > 398 ? "gunplay-font h1" : width > 346 ? "gunplay-font h2" : "gunplay-font h3"}>
          EK Specialties
        </div>
        <div className={width > 398 ? "h2" : width > 346 ? "h3" : "h4"}>
          <div>Property Management & Heavy Equipment maintenance and repair</div>
          <div>for the Portland Oregon area</div>
          <div className="gunplay-font">(406) 998-9555</div>
        </div>
      </div>
    </div>
  );
};

export default App;
