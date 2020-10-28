import React from "react";

import "./checkBar.css";

export default function CheckBar(props) {
  return (
    <div className="filter-bar check-bar">
      <label>{props.label}</label>
      <div className="check-boxes">{props.children}</div>
    </div>
  );
}
