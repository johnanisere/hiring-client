import React from "react";
import Summary from "./Summary";
import Portfolio from "./Portfolio";
import Employment from "./Employment";
import Skills from "./Skills";
import Action from "./Action";

const App = props => {



  return (
    
    <>
      <Summary
        profilePhoto={props.dev.profilePhoto}
        name={props.dev.name}
        currentRole={props.dev.currentRole}
        description={props.dev.description}
        stack={props.dev.stack}
        bio={props.dev.bio}
        github={props.dev.github}
        linkedIn={props.dev.linkedIn}
        stackOverflow={props.dev.stackOverflow}
        website={props.dev.website}
      />
      <Action dev={props.dev} selected={props.selected} />
      <Portfolio
        portfolio={props.dev.portfolio}
        skills={props.dev.skills}
        education={props.dev.education}
      />
      <Employment employments={props.dev.employments} />
      <Skills publications={props.dev.publications} />
    </>
  );
}

export default App;
