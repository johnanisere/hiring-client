import React, { lazy } from "react";

import Layout from "../../components/Layout";
import ProtectedRoute from "../../components/ProtectedRoute";
import { Route, Switch } from "react-router-dom";

const Cards = lazy(() => import("../../components/dashboard/Cards"));
const InviteForm = lazy(() => import("../../components/settings/InviteForm"));
const InviteHirer = lazy(()=>import("../../components/InviteHirer"))

export default function App({ match }) {
  return (
    <ProtectedRoute>
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
            component={InviteHirer}
          />
        </Switch>
      </Layout>
    </ProtectedRoute>
  );
}
