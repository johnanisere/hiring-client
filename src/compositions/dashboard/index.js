import React, { lazy } from 'react';

import { Route, Switch } from 'react-router-dom';
import Layout from '../../components/Layout';
import ProtectedRoute from '../../components/ProtectedRoute';
import Profile from '../../components/profile';
import { useSelector } from 'react-redux';

const Cards = lazy(() => import('../../components/dashboard/Cards'));
const InviteForm = lazy(() => import('../../components/settings/InviteForm'));
const ActivateHirer = lazy(() => import('../../components/activateHirer'));
const Shortlisted = lazy(() => import('../../components/selected/Shortlisted'));

export default function App({ match }) {
  const { role } = useSelector(({ user }) => user.data);
  return (
    <ProtectedRoute>
      {role === 'dev' ? (
        <Profile />
      ) : (
        <Layout>
          <Switch>
            <Route exact path={`${match.path}`} component={Cards} />
            <Route
              exact
              path={`${match.path}/usermanagement/dev`}
              component={InviteForm}
            />
            <Route
              exact
              path={`${match.path}/usermanagement/hiringpartner`}
              component={ActivateHirer}
            />
            <Route
              exact
              path={`${match.path}/shortlisted`}
              component={Shortlisted}
            />
          </Switch>
        </Layout>
      )}
    </ProtectedRoute>
  );
}
