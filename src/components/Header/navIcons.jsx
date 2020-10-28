import React from "react";

import "./navIcons.css";

export default function NavIcons() {
  return (
    <div className="nav-icons display-flex">
      <i className="far fa-lg fa-bell"></i>
      <i className="far fa-lg fa-comment-dots"></i>
      <img
        className="m-10 nav-image"
        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="profile "
      />
    </div>
  );
}
