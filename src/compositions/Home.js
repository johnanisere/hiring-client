import React from 'react';
import { connect } from 'react-redux';
import UpdatePassword from '../components/UpdatePassword';

function App(props) {
  return (
    <div className="App">
      {/* <Layout>
        <Cards />
      </Layout> */}

      <UpdatePassword />
    </div>
  );
}
const mapStateToProps = state => ({ state });
export default connect(mapStateToProps)(App);
