import React from "react";
import "./Layouts.css";

const Preloader = ({color, fontColor}) => {
  return (
    <div class="wrapper">
      <div style={{borderTop: `13px solid ${color}`}} class="loader"></div>
      <div class="loader-img"></div>
      <h3 style={{color: fontColor, display: "inline-block"}}>Loading</h3>
    </div>
  );
};

export default Preloader;
