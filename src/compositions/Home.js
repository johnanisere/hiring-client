import React from 'react';
import {connect} from "react-redux"

function App(props) {
  return <div className="App">Hey!</div>;
}
const mapStateToProps=state=>({state})
export default connect(mapStateToProps)(App);
