import React, { lazy } from 'react';

import { Route, Switch } from 'react-router-dom';

const Login = lazy(() => import('./Login'));
const SignUp = lazy(() => import('../SignUp/SignUp'));
const UpdatePassword = lazy(() => import('./UpdatePassword'));

export default function({ match: { path }, login, loading, error }) {
  return (
    <Switch>
      <Route exact path={`/login`} component={Login} />
      <Route exact path={`/signup`} component={SignUp} />
      <Route exact path={`/update-password`} component={UpdatePassword} />
    </Switch>
  );
}
