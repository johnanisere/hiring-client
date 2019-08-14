import React from 'react';

import { Route, Switch } from 'react-router-dom';
// import UpdatePassword from './UpdatePassword';
import Login from './Login';
import ChangePassword from '../passwordPage/changePass'

export default function({ match: { path } }) {
  return (
    <Switch>
      {/* <Route to={`${path}/update-password`} component={UpdatePassword} /> */}
      <Route to={`${path}/login`} component={Login} />
      <Route to={`${path}/change-password`} component={ChangePassword} />
    </Switch>
  );
}
