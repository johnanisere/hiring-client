import React, { lazy } from 'react';

<<<<<<< HEAD
import { Route, Switch, Redirect } from 'react-router-dom';
=======
import { Route, Switch } from 'react-router-dom';
>>>>>>> init

const Login = lazy(() => import('./Login'));
const SignUp = lazy(() => import('./SignUp'));
const UpdatePassword = lazy(() => import('./UpdatePassword'));
const ChangePassword = lazy(() => import('./ChangePassword'));
const Schedule = lazy(() => import('../dashboard/ScheduleInterview'));
const Invite = lazy(() => import('../InviteHirer'));

export default function() {
  return (
    <Switch>
      <Route exact path={`/login`} component={Login} />
      <Route exact path={`/update-password`} component={UpdatePassword} />
      <Route
        exact
        path={`/change-password/:token`}
        component={ChangePassword}
      />
    </Switch>
  );
}
