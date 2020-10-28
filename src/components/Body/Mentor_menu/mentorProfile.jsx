import React from "react";

import Card from "../util/card";
import Tag from "../util/tag";
import Button from "../util/button";
import "./mentorProfile.css";

const mentorProfile = (props) => {
  return (
    <Card className="profile-card">
      <div className="mentor-profile display-flex">
        <div className="m-10">
          <img src={props.profile.profilePhoto} alt="pic" />
          <br />
          <br />
          <p style={{ color: "grey" }}>
            Price:{" "}
            <span style={{ color: "rgb(50,188,155)" }}>
              {props.profile.price}
            </span>
          </p>
          <br />
          <p style={{ color: "rgb(243,142,98)" }}>
            <i className="fas fa-star"></i> {props.profile.rating}
          </p>
        </div>
        <div className="m-10">
          <div
            className="display-flex"
            style={{ justifyContent: "space-between" }}
          >
            <h2>{props.profile.name}</h2>

            <div>
              <i className="fa-lg far fa-heart like-profile"></i>
              <Button
                style={{ color: "white", backgroundColor: "rgb(243,132,84)" }}
              >
                View Profile
              </Button>
            </div>
          </div>
          <h5 style={{ color: "rgb(82,89,109)" }}>
            {props.profile.designation}
          </h5>

          <div className="profile-stats">
            <span>
              <i className="fas fa-stopwatch"></i> {props.profile.sessions}
            </span>
            <span>
              <i className="fas fa-map-marker-alt"></i> {props.profile.location}
            </span>
            <span>
              <i className="fas fa-text-height"></i> {props.profile.languages}
            </span>
          </div>
          <br />

          <p className="profile-description">{props.profile.description}</p>
          <div className="profile-skills">
            {props.profile.skills.map((skill, index) => (
              <Tag
                style={{
                  color: "rgb(19,97,157)",
                  backgroundColor: "rgb(237,241,247)",
                }}
                key={index}
              >
                {skill}
              </Tag>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default mentorProfile;
