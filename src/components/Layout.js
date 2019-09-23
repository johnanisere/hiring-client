import React, { useState } from 'react';

import { Grommet, Box, Grid } from 'grommet';
import { grommet } from 'grommet/themes';
import Header from './Header';
import SideBar from './SideBar';

export default function Layout(props) {
  const [sidebar, setSidebar] = useState(false);

  function toggleSidebar() {
    setSidebar(!sidebar);
  }

  return (
    <Grommet full theme={grommet}>
      <Grid
        fill
        rows={['auto', 'flex']}
        columns={['auto', 'flex']}
        areas={[
          { name: 'header', start: [0, 0], end: [1, 0] },
          { name: 'sidebar', start: [0, 1], end: [0, 1] },
          { name: 'main', start: [1, 1], end: [1, 1] }
        ]}
      >
        <Header toggleSidebar={toggleSidebar} />
        <SideBar sidebar={sidebar} />
        <Box gridArea="main" style={{ overflowY: 'scroll' }}>
          {props.children}
        </Box>
      </Grid>
    </Grommet>
  );
}
