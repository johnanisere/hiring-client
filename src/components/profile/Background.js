import React from 'react';
import { Grommet, Box, Grid, ResponsiveContext, Heading, Text } from 'grommet';
import { grommet } from 'grommet/themes';
import { Cloudlinux, User } from 'grommet-icons';

import Photo from './Photo';
import Info from './Info';
import Skills from './Skills';

const Background = () => {
  return (
    <Grommet theme={grommet} full>
      <ResponsiveContext.Consumer>
        {size => (
          <Box
            responsive
            fill
            background="#ffffff"
            elevation="large"
            round="small"
          >
            <Box
              responsive
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
                responsive
                style={{ marginLeft: 'auto' }}
                direction="row-responsive"
                gap="large"
              >
                <Text size="large"> Find People </Text>
                <Text size="large"> Messages </Text>
                <Text size="large"> My Contacts </Text>
                <User color="brand" />
              </Box>
            </Box>
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
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
};

export default Background;
