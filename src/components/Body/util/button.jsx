import React from "react";

import "./button.css";

export default function button(props) {
  return (
    <button
      style={props.style}
      className={`button ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
