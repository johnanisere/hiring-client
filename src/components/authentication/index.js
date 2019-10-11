import React, { lazy } from 'react';

import { Route, Switch } from 'react-router-dom';

const Login = lazy(() => import('./Login'));
const SignUp = lazy(() => import('./SignUp'));
const UpdatePassword = lazy(() => import('./UpdatePassword'));
const ChangePassword = lazy(() => import('./ChangePassword'));
const Schedule = lazy(() => import('../dashboard/ScheduleInterview'));
const Invite = lazy(() => import('../InviteHirer'));

export default function() {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/update-password/:token" component={UpdatePassword} />

      <Route exact path="/schedule/:email" component={Schedule} />
      <Route exact path="/invite" component={Invite} />

      <Route
        exact
        path={`/change-password/:token`}
        component={ChangePassword}
      />
    </Switch>
  );
}
