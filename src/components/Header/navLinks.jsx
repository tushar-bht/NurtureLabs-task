import React from "react";

import "./navLinks.css";

function NavLink(props) {
  return (
    <div className="nav-links display-flex">
      <strong>
        <a className="link" href="/">
          Dashboard
        </a>
      </strong>
      <strong>
        <a className="link active" href="/">
          Find Experts
        </a>
      </strong>
      <strong>
        <a className="link" href="/">
          Discussion
        </a>
      </strong>
    </div>
  );
}

export default NavLink;
