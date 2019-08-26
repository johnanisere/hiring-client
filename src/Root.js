import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Dashboard = lazy(() => import("./compositions/dashboard"));
const Authentication = lazy(() => import("./compositions/authentication"));
const InviteForm = lazy(() => import("./components/settings/InviteForm"));
const Profile = lazy(() => import("../src/components/profile/"));

const App = () => (
  <BrowserRouter>
    <Suspense fallback="loading..">
      <Switch>
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/invitemail" component={InviteForm} />
        <Route path="/" component={Authentication} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);
export default App;
