import React from "react";

import listArray from "../../../MentorList.json";
import MentorProfile from "./mentorProfile";
import "./mentorList.css";
export default function mentorList() {
  return (
    <div>
      <div className="display-flex mentor-filter">
        <h3>Featured Experts</h3>
        <select className="border">
          <option value="Best Match">Best Match</option>
          <option value="Average">Average</option>
          <option value="Free">Free</option>
        </select>
      </div>
      <div>
        {listArray.map((profile, index) => (
          <MentorProfile key={index} profile={profile} />
        ))}
      </div>
    </div>
  );
}
