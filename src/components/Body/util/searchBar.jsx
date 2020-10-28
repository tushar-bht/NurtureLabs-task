import React from "react";

import "./searchBar.css";

export default function SearchBar(props) {
  return (
    <div className="filter-bar">
      <label>{props.label}</label>
      <div className="filter-input display-flex border">
        <div>{props.children}</div>
        <i className="fas fa-search"></i>
      </div>
    </div>
  );
}
