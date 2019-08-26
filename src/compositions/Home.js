import React from 'react';

import Layout from '../components/Layout';
import Cards from '../components/dashboard/Cards';
import ProtectedRoute from '../components/ProtectedRoute';

export default function App(props) {
  return (
    // <ProtectedRoute>
    <Layout>
      <Cards />
    </Layout>
    // </ProtectedRoute>
  );
}
