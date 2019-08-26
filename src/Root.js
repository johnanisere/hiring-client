import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Dashboard = lazy(() => import("./compositions/dashboard"));
const Authentication = lazy(() => import("./compositions/authentication"));
const Profile = lazy(() => import("../src/components/profile/"));
const ScheduleInterview = lazy(() =>
  import("./components/dashboard/ScheduleInterview")
);

const App = () => (
  <BrowserRouter>
    <Suspense fallback="loading..">
      <Switch>
        <Route path="/" component={Authentication} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/schedule-interview" component={ScheduleInterview} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);
export default App;
