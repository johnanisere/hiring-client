import React from 'react';
import Summary from './Summary';
import Portfolio from './Portfolio';
import Employment from './Employment';
import Skills from './Skills';
import Action from './Action';

const App = props => (
  <>
    <Summary dev={props.dev} />
    <Action dev={props.dev} selected={props.selected} />
    <Portfolio dev={props.dev} />
    <Employment dev={props.dev} />
    <Skills dev={props.dev} />
  </>
);

export default App;
