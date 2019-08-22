import React from 'react';

import Layout from '../components/Layout';
import Cards from '../components/dashboard/Cards';

export default function App(props) {
  return (
    <div className="App">
      <Layout>
        <Cards />
      </Layout>
    </div>
  );
}
