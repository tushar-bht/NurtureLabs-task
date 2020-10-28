import React from "react";

import CheckBox from "../util/checkBox";
import CheckBar from "../util/checkBar";
import "./checkList.css";

export default function CheckList(props) {
  return (
    <div>
      <CheckBar label="RATINGS">
        <CheckBox style={{ color: "rgb(243,132,84)" }}>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </CheckBox>
        <CheckBox style={{ color: "rgb(243,132,84)" }}>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </CheckBox>
        <CheckBox style={{ color: "rgb(243,132,84)" }}>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </CheckBox>
        <CheckBox style={{ color: "rgb(243,132,84)" }}>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </CheckBox>
      </CheckBar>
      <CheckBar label="PRICE">
        <CheckBox>Free</CheckBox>
        <CheckBox>Less than $25</CheckBox>
        <CheckBox>$25 - $50</CheckBox>
        <CheckBox>$50 - $100</CheckBox>
        <CheckBox>More than $100</CheckBox>
      </CheckBar>
      <CheckBar label="SESSION AVAILABILITY">
        <CheckBox>30 min</CheckBox>
        <CheckBox>60 min</CheckBox>
        <CheckBox>15 min</CheckBox>
      </CheckBar>
      <CheckBar label="LANGUAGE">
        <CheckBox>English</CheckBox>
        <CheckBox>French</CheckBox>
        <CheckBox>German</CheckBox>
        <CheckBox>Hindi</CheckBox>
        <CheckBox>Arabic</CheckBox>
        <CheckBox>Mandarin Chinese</CheckBox>
      </CheckBar>
    </div>
  );
}
