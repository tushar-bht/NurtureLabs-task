import React from "react";

import "./card.css";

export default function card(props) {
  return (
    <div className={`card border ${props.className}`}>{props.children}</div>
  );
}
