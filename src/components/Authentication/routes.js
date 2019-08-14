import React, { lazy } from 'react';

import { Route, Switch } from 'react-router-dom';
import UpdatePassword from './UpdatePassword';

const Login = lazy(() => import('./Login'));

export default function({ match: { path }, login, loading, error }) {
  return (
    <Switch>
      <Route to={`${path}/update-password`} component={UpdatePassword} />
      <Route
        to={`${path}/login`}
        component={() => (
          <Login login={login} loading={loading} error={error} />
        )}
      />
    </Switch>
  );
}
