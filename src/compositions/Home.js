import React from 'react';
import { connect } from 'react-redux';

// import Layout from '../components/Layout';
// import Cards from '../components/Cards';
import ScheduleInterview from '../components/ScheduleInterview';
function App(props) {
  return (
    <div className="App">
      <ScheduleInterview />
      {/* <Layout>
        <Cards />
      </Layout> */}
    </div>
  );
}
const mapStateToProps = state => ({ state });
export default connect(mapStateToProps)(App);
