import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./compositions/Home'));
const Authentication = lazy(() => import('./components/Authentication'));

const App = () => (
  <BrowserRouter>
    <Switch>
      <Suspense fallback="loading..">
        <Route to="/" component={Authentication} />
        <Route to="/" component={Home} />
      </Suspense>
    </Switch>
  </BrowserRouter>
);

export default App;
