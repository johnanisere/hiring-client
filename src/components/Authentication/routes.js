import React from 'react';

import { Route } from 'react-router-dom';
import Login from './Login';
import ChangePassword from '../passwordPage/changePass'

export default function({ match: { path } ,...props}) {
  console.log({props})
  return (
  <>
    <Route exact to={`${path}/login`} component={Login} /> 
    <Route  exact to={`${path}/change-password`} component={ChangePassword} />
  </>
  );
}
