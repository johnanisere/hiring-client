import React, { lazy } from "react";

import { Route, Switch } from "react-router-dom";

const Login = lazy(() => import("./Login"));
const SignUp = lazy(() => import("./SignUp"));
const UpdatePassword = lazy(() => import("./UpdatePassword"));
const ChangePassword = lazy(() => import("./ChangePassword"));

export default function() {
  return (
    <Switch>
      <Route exact path={`/login`} component={Login} />
      <Route exact path={`/signup`} component={SignUp} />
      <Route exact path={`/update-password`} component={UpdatePassword} />
      <Route exact path={`/change-password`} component={ChangePassword} />
    </Switch>
  );
}
