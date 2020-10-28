import React from "react";

import CheckList from "./checkList";
import Card from "../util/card";
import SearchBar from "../util/searchBar";
import Tag from "../util/tag";
import "./filterList.css";

export default function FilterList() {
  return (
    <div className="filter-box">
      <h3 style={{ margin: "30px 30px 40px 30px " }}>Filters</h3>
      <Card className="">
        <div className="filter-list">
          <SearchBar label="EXPERTISE">
            <Tag
              style={{
                color: "white",
                backgroundColor: "rgb(60,103,232)",
              }}
            >
              {"  "}
              Branding <i className="fa-xs fas fa-times"></i>
            </Tag>
          </SearchBar>

          <Tag
            style={{
              color: "white",
              backgroundColor: "rgb(167,205,110)",
              margin: "5px 22px",
            }}
          >
            Strategy{"  "} <i className="fa-xs fas fa-times"></i>
          </Tag>
          <SearchBar label="FOCUS AREA">
            <Tag
              style={{
                color: "white",
                backgroundColor: "rgb(60,103,232)",
              }}
            >
              {"  "}
              Focus Area <i className="fa-xs fas fa-times"></i>
            </Tag>
            <Tag
              style={{
                color: "white",
                backgroundColor: "rgb(60,103,232)",
              }}
            >
              {"  "}
              Focus Area <i className="fa-xs fas fa-times"></i>
            </Tag>
          </SearchBar>
          <Tag
            style={{
              color: "white",
              backgroundColor: "rgb(167,205,110)",
              margin: "5px 22px",
            }}
          >
            Focus Area{"  "} <i className="fa-xs fas fa-times"></i>
          </Tag>
          <Tag
            style={{
              color: "white",
              backgroundColor: "rgb(60,103,232)",
              margin: "5px 0px 5px 0px",
            }}
          >
            Focus Area{"  "} <i className="fa-xs fas fa-times"></i>
          </Tag>
          <CheckList />
          <h3
            style={{
              color: "rgb(74,196,167)",
              cursor: "pointer",
              margin: "5px",
            }}
          >
            More
          </h3>
        </div>
      </Card>
    </div>
  );
}
