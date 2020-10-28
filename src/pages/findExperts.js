import React from "react";

import MainHeader from "../components/Header/mainHeader";
import MentorList from "../components/Body/Mentor_menu/mentorList";
import FilterList from "../components/Body/Filter_Menu/filterList";

function FindExperts() {
  return (
    <React.Fragment>
      <MainHeader />

      <div className="display-flex">
        <FilterList />
        <MentorList />
      </div>
    </React.Fragment>
  );
}

export default FindExperts;
