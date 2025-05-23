import React from "react";
import "../styles/index.css";  // Assuming your CSS is here

export default function Home() {
  return (
    <>
      <div className="circles">
        <div id="one" className="circle"></div>
        <div id="two" className="circle"></div>
        <div id="three" className="circle"></div>
      </div>

      <div className="wrapper">
        <div className="box">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i}></div>
          ))}
        </div>
      </div>
    </>
  );
}
