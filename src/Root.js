import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loading from "./components/Loading";

const Dashboard = lazy(() => import("./compositions/dashboard"));
const Authentication = lazy(() => import("./compositions/authentication"));
const Profile = lazy(() => import("./components/profile/"));
const ScheduleInterview = lazy(() =>
  import("./components/dashboard/ScheduleInterview")
);
const DecadevModal = lazy(() => import("./components/decadevModal/index"));

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path="/profile" component={Profile} />
        <Route path="/dashboard" component={Dashboard} />
        <Route exact path="/viewprofile" component={DecadevModal} />
        <Route exact path="/schedule-interview" component={ScheduleInterview} />
        <Route path="/" component={Authentication} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);
export default App;
