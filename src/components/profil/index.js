import React from "react";
import Summary from "./Summary";
import Portfolio from "./Portfolio";
import Employment from "./Employment";
import Skills from "./Skills";
import Action from "./Action";

const App = props => (
  <>
    <Summary />
    <Action dev={props.dev} selected={props.selected} />
    <Portfolio />
    <Employment />
    <Skills />
  </>
);

export default App;
