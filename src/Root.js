import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import InviteForm from './components/Settings/InviteForm';
import Background from '../src/components/profile/Background';

const Home = lazy(() => import("./compositions/Home"));
const Authentication = lazy(() => import("./compositions/authentication"));

const App = () => (
  <BrowserRouter>
    <Suspense fallback="loading..">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Background} />
        <Route exact path="/invitemail" component={InviteForm} />
        <Route path="/" component={Authentication} />
      </Switch>
    </Suspense>
</BrowserRouter>
)
export default App;
