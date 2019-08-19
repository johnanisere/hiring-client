import React from "react";

<<<<<<< HEAD
import Layout from "../components/Layout";
import Cards from "../components/dashboard/Cards";
import ProtectedRoute from "../components/ProtectedRoute";

export default function App(props) {
  return (
    <ProtectedRoute>
      <Layout>
        <Cards />
      </Layout>
    </ProtectedRoute>
=======
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
>>>>>>> adds DateTime component and manages state on scheduleInterview component
  );
}
