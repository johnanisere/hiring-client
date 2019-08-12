import React from "react";
import { connect } from "react-redux";
import Layout from "../components/Layout";

function App(props) {
  return (
    <div className="App">
      <Layout />
    </div>
  );
}
const mapStateToProps = state => ({ state });
export default connect(mapStateToProps)(App);
