import React, { lazy } from "react";

import { Route, Switch } from "react-router-dom";

const Login = lazy(() => import("./Login"));
const UpdatePassword = lazy(() => import("./UpdatePassword"));

export default function() {
  return (
    <Switch>
      <Route exact path={`/login`} component={Login} />
      <Route exact path={`/update-password`} component={UpdatePassword} />
    </Switch>
  );
}
