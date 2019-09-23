import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Dashboard = lazy(() => import('./compositions/dashboard'));
const Authentication = lazy(() => import('./compositions/authentication'));
const Profile = lazy(() => import('./components/profile/'));
const ScheduleInterview = lazy(() =>
  import('./components/dashboard/ScheduleInterview')
);
const DecadevModal = lazy(() => import('./components/decadevModal/index'));
const Shortlisted = lazy(() => import('./components/selected/Shortlisted'));

const App = () => (
  <BrowserRouter>
    <Suspense fallback="loading..">
      <Switch>
        <Route exact path="/profile" component={Profile} />
        <Route path="/dashboard" component={Dashboard} />
        <Route exact path="/viewprofile" component={DecadevModal} />
        <Route exact path="/schedule-interview" component={ScheduleInterview} />
        <Route exact path="/shortlisted" component={Shortlisted} />

        <Route path="/" component={Authentication} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);
export default App;
