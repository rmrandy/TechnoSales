import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <div style={{position: "relative"}}>
        <div className="loader-circle"></div>
        <div className="loader-line-mask" style={{position: "absolute", top: 0}}>
          <div className="loader-line"></div>
        </div>
      </div>
      <p>Cargando...</p>
    </div>
  );
};

export default Loader;
