import React from "react";

import NavLinks from "./navLinks";
import NavIcons from "./navIcons";
import "./mainHeader.css";

function MainHeader() {
  return (
    <div className="main-header  display-flex">
      <div className="display-flex logo m-10">
        <div className="logo-color"></div>
        <h2>Logo</h2>
      </div>

      <NavLinks />
      <NavIcons />
    </div>
  );
}

export default MainHeader;
