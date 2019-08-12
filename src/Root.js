import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import InviteForm from "../src/components/mailInvite/InviteForm";

const Home = lazy(() => import("./compositions/Home"));

const App = () => (
  <BrowserRouter>
    <Switch>
      <Suspense fallback="loading..">
        <Route exact path="/" component={Home} />
        <Route path="/invitemail" component={InviteForm} />
      </Suspense>
    </Switch>
  </BrowserRouter>
);

export default App;
