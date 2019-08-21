import React from 'react';

import Layout from '../components/Layout';
import Cards from '../components/dashboard/Cards';
// import ScheduleInterview from '../components/dashboard/ScheduleInterview';
export default function App(props) {
  return (
    <div className="App">
      {/* <ScheduleInterview /> */}
      <Layout>
        <Cards />
      </Layout>
    </div>
  );
}
