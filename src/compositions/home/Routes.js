import React, { lazy } from 'react';

import { Route, Switch } from 'react-router-dom';

const Cards = lazy(() => import('../../components/dashboard/Cards'));
const InviteForm = lazy(() => import('../../components/settings/InviteForm'));

export default function App({ match }) {
  return (
    <Switch>
      <Route exact path={`${match.path}`} component={Cards} />
      <Route exact path={`${match.path}/shortlisted`} component={InviteForm} />
    </Switch>
  );
}
