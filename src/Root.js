import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import InviteForm from '../src/components/mailInvite/InviteForm';
import Background from '../src/components/profile/Background';

const Home = lazy(() => import('./compositions/Home'));
const Authentication = lazy(() => import('./components/Authentication'));

const App = () => (
  <BrowserRouter>
    <Switch>
      <Suspense fallback="loading..">
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Background} />
        <Route path="/invitemail" component={InviteForm} />
        <Route to="/" component={Authentication} />
      </Suspense>
    </Switch>
  </BrowserRouter>
);

export default App;
