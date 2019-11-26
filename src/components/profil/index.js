import React from "react";
import Summary from "./Summary";
import Portfolio from "./Portfolio";
import Employment from "./Employment";
import Skills from "./Skills";
import Action from "./Action";

const App = props => (
  <>
    <Summary
      profilePhoto={props.dev.profilePhoto}
      name={props.dev.name}
      currentRole={props.dev.currentRole}
      description={props.dev.description}
      stack={props.dev.stack}
    />
    <Action dev={props.dev} selected={props.selected} />
    <Portfolio
      portfolio={props.dev.portfolio}
      skills={props.dev.skills}
      experience={props.dev.experience}
    />
    <Employment employments={props.dev.employments} />
    <Skills skills={props.dev.skills} />
  </>
);

export default App;
