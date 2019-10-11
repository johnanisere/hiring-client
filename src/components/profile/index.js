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
    <Grommet full theme={grommet}>
      <Box fill>
        <Box
          as="header"
          direction="row"
          align="center"
          pad={{ vertical: 'small', horizontal: 'small' }}
          justify="between"
          background="#555555"
          elevation="large"
          style={{ zIndex: '1000', color: '#f8f8f8', height: '60px' }}
        >
          <img
            src={Decagon}
            alt="Decagon-logo"
            style={{ width: '50px', height: 'auto' }}
          />
          <Heading level={3} margin="none" color="white">
            <strong>Welcome Decagon</strong>
          </Heading>
          <Button
            onClick={() => setOpenNotification(!openNotification)}
            icon={<User color="white" />}
          />
        </Box>
        <Box flex direction="row">
          <Box flex align="center" justify="center">
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
              >
                <Box gridArea="nav" background="">
                  <Photo profilePhoto={data.profilePhoto} />
                  <Work decadev={data} />
                  <Skills decadev={data} />
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
