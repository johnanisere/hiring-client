import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./compositions/Home'));
const Authentication = lazy(() => import('./compositions/authentication'));
const InviteForm = lazy(() => import('./components/settings/InviteForm'));
const Background = lazy(() => import('../src/components/profile/Background'));
const DecadevModal = lazy(() =>
  import('../src/components/decadevModal/DecadevModal')
);

const App = () => (
  <BrowserRouter>
    <Suspense fallback="loading..">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Background} />
        <Route exact path="/viewprofile" component={DecadevModal} />
        <Route exact path="/invitemail" component={InviteForm} />
        <Route path="/" component={Authentication} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);
export default App;
