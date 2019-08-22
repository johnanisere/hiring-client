import React from 'react';

import Layout from '../components/Layout';
import Cards from '../components/dashboard/Cards';
import Dropdown from "../components/Dropdown";
import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";

const customRoundedTheme = deepMerge(grommet, {
  global: {
    control: {
      border: {
        radius: "24px"
      }
    },
    input: {
      weight: 400
    },
    font: {
      size: "12px"
    }
  },
  text: {
    medium: "13px"
  },
  textInput: {
    extend: "padding: 0 12px;"
  },
  select: {
    control: {
      extend: "padding: 3px 6px;",
      open: {
        background: "#ece0fa",
        border: "1px solid #7D4CDB"
      }
    }
  }
});

export default function App(props) {
  return (
    <div className="App">
      <Layout>
        <Dropdown open theme={customRoundedTheme} />
        <Cards />
      </Layout>
    </div>
  );
}
