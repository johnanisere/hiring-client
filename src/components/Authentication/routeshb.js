import React from 'react';

import { Route, Switch } from 'react-router-dom';
// import UpdatePassword from './UpdatePassword';
import Login from './Login';

export default function({ match: { path } }) {
  return (
    <Switch>
      {/* <Route to={`${path}/update-password`} component={UpdatePassword} /> */}
      <Route to={`${path}/login`} component={Login} />
    </Switch>
  );
}
