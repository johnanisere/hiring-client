import React from 'react';

import Layout from '../components/Layout';
import Cards from '../components/dashboard/Cards';
// import Dropdown from "../components/Dropdown";
// import { grommet } from "grommet/themes";
// import { deepMerge } from "grommet/utils";


export default function App(props) {
  return (
    <div className="App">
      <Layout>
        <Cards />
      </Layout>
    </div>
  );
}
