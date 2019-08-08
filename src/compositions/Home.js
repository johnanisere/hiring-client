import React from 'react';
import { connect } from 'react-redux';
import Layout from '../components/Layout';
// import NestedCollapsible from '../components/Collapsable';

function App(props) {
  return (
    <div className="App">
      <Layout>
        <p>Hey!</p>
      </Layout>

      {/* <NestedCollapsible /> */}
    </div>
  );
}
const mapStateToProps = state => ({ state });
export default connect(mapStateToProps)(App);
