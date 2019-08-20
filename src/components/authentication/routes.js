import React, { lazy } from 'react';

import { Route } from 'react-router-dom';
import Login from './Login';
import ChangePassword from './ChangePassword';
const SignUp = lazy(() => import('./SignUp'));

export default function({ match: { path } }) {
  return (
    <>
      <Route exact to={`${path}/login`} component={Login} />
      <Route exact to={`${path}/signup`} component={SignUp} />
      <Route exact to={`${path}/change-password`} component={ChangePassword} />
    </>
  );
}
