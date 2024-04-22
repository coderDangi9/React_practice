import React from "react";
import "./myStyle.css";
function Stylesheet(props) {
  let className = props.primary ? "primary" : "";
  return (
    <div>
      <h1 className={`${className} font-xl`}>The name of Mine is Sandip.</h1>
    </div>
  );
}

export default Stylesheet;
