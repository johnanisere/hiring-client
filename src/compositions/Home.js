import React from "react";
import { connect } from "react-redux";

import Layout from "../components/Layout";
import Cards from "../components/Cards";

function App(props) {
  return (
    <div className="App">
      <Layout>
        <Cards />
      </Layout>
    </div>
  );
}
const mapStateToProps = state => ({ state });
export default connect(mapStateToProps)(App);
