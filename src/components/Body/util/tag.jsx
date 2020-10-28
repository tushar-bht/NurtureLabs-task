import React from "react";

import "./tag.css";

export default function tag(props) {
  return (
    <button style={props.style} className={` ${props.className} tag`}>
      {props.children}
    </button>
  );
}
