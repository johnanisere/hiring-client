import React from "react";
import Summary from "./Summary";
import Portfolio from "./Portfolio";
import Employment from "./Employment";
import Skills from "./Skills";

const App = ({ skills }) => (
  <>
    <Summary />
    <Portfolio />
    <Employment />
    <Skills />
  </>
);

export default App;
