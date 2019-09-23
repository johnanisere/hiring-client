import React from 'react';

import Layout from '../components/Layout';
import ProtectedRoute from '../components/ProtectedRoute';
import Routes from './Routes';

export default function App(props) {
  return (
    <ProtectedRoute>
      <Layout>
        <Routes />
      </Layout>
    </ProtectedRoute>
  );
}
