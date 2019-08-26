import React, { useState } from 'react';
import {
  Box,
  Button,
  Grid,
  Collapsible,
  Heading,
  Grommet,
  Text
} from 'grommet';
import { grommet } from 'grommet/themes';
import { User } from 'grommet-icons';
import Decagon from './decagon-logo.png';
import { useSelector } from 'react-redux';

import Photo from './Photo';
import Info from './Info';
import Skills from './Skills';
import Work from './Work';

function DecaDevProfile() {
  const [openNotification, setOpenNotification] = useState(false);

  const { data } = useSelector(({ user }) => user);

  return (
    <Grommet theme={grommet} full>
      <ResponsiveContext.Consumer>
        {size => (
          <Box fill background="#ffffff" round="small">
            <Box
              direction="row-responsive"
              align="center"
              pad={{ left: 'xlarge', right: 'xlarge' }}
              margin={{ bottom: 'small' }}
              style={{ boxShadow: '0px 1px 10px -8px' }}
            >
              <Box direction="row-responsive" gap="large" align="center">
                <Cloudlinux color="plain" size="large" />
                <Heading size="small">Decagon</Heading>
              </Box>
              <Box
                style={{ marginLeft: 'auto' }}
                direction="row-responsive"
                align="center"
                pad={{ top: 'large', left: 'xlarge', right: 'xlarge' }}
                margin={{ bottom: 'small' }}
              >
                <Grid
                  areas={[
                    { name: 'nav', start: [0, 0], end: [0, 0] },
                    { name: 'main', start: [1, 0], end: [1, 0] }
                  ]}
                  columns={['medium', 'flex']}
                  rows={['flex']}
                  gap="small"
                >
                  <Box gridArea="nav" background="">
                    <Photo />
                    <Skills />
                  </Box>
                  <Box
                    gridArea="main"
                    background=""
                    style={{ marginLeft: '50px' }}
                  >
                    <Info />
                  </Box>
                </Grid>
              </Box>
            </Box>
            <Collapsible direction="horizontal" open={openNotification}>
              <Box
                flex
                gap="medium"
                width="small"
                background="light-2"
                pad="small"
                elevation="small"
                style={{ cursor: 'pointer' }}

            <Box
              responsive
              direction="row-responsive"
              align="center"
              pad={{ top: 'large', left: 'xlarge', right: 'xlarge' }}
              margin={{ bottom: 'small' }}
            >
              <Grid
                areas={[
                  { name: 'nav', start: [0, 0], end: [0, 0] },
                  { name: 'main', start: [1, 0], end: [1, 0] }
                ]}
                columns={['medium', 'flex']}
                rows={['flex']}
                gap="small"

                <Text> size="medium">Account</Text>
                <Text size="medium">Settings</Text>
                <Text size="medium">Logout</Text>
              </Box>
            </Collapsible>
          </Box>
          <Collapsible direction="horizontal" open={openNotification}>
            <Box
              flex
              gap="medium"
              width="small"
              background="light-2"
              pad="small"
              elevation="small"
              style={{ cursor: 'pointer' }}
            >
              <Text size="medium">Account</Text>
              <Text size="medium">Settings</Text>
              <Text size="medium">Logout</Text>
            </Box>
          </Collapsible>
        </Box>
      </Box>
    </Grommet>
  );
}

export default DecaDevProfile;
