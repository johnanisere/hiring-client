import React, { lazy } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

const Login = lazy(() => import('./Login'));
const SignUp = lazy(() => import('./SignUp'));
const UpdatePassword = lazy(() => import('./UpdatePassword'));
const ChangePassword = lazy(() => import('./ChangePassword'));
const Schedule = lazy(() => import('../dashboard/ScheduleInterview'));
const Invite = lazy(() => import('../InviteHirer'));
const HirerSignUp = lazy(() => import('../HirerSignUp'));
const VerifyHirer = lazy(() => import('../HirerSignUp/VerifyHirer'));
const HirerLogin = lazy(() => import('../HirerSignUp/hirerLogin/HirerLogin'));

export default function() {
  return (
    <Switch>
      <Redirect exact from="/" to="/login" />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/signup/partner" component={HirerSignUp} />
      <Route exact path="/update-password/:token" component={UpdatePassword} />

      <Route exact path="/schedule/:email" component={Schedule} />
      <Route exact path="/invite" component={Invite} />
      <Route exact path="/verify-hirer/:token/:email" component={VerifyHirer} />

      <Route
        exact
        path={`/change-password/:token`}
        component={ChangePassword}
      />
      <Route exact path="/login/partner" component={HirerLogin} />
    </Switch>
  );
}
