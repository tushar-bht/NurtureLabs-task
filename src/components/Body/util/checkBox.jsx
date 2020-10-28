import React from "react";

import "./checkBox.css";

export default function CheckBox(props) {
  return (
    <div className="check-box">
      <input type="checkbox" />
      <span style={props.style} className="m-10">
        {props.children}
      </span>
    </div>
  );
}
