import React from 'react';
import {
  Grommet,
  Anchor,
  Box,
  Text,
  Image,
  Grid,
  ResponsiveContext
} from 'grommet';
import fake from './constants/fake';

export default function Cards() {
  return (
    <Grommet style={{ overflow: 'scroll' }}>
      <ResponsiveContext.Consumer>
        {size => (
          <Grid
            columns={
              size === 'small'
                ? ['1']
                : size === 'medium'
                ? ['1/2', '1/2']
                : size === 'large'
                ? ['1/4', '1/4', '1/4', '1/4']
                : size === 'xlarge'
                ? ['1/5', '1/5', '1/5', '1/5', '1/5']
                : ['1/6', '1/6', '1/6', '1/6', '1/6', '1/6']
            }
          >
            {fake.map(dev => {
              return (
                <Box
                  key={dev}
                  pad="medium"
                  align="center"
                  background={{
                    color: 'light-2',
                    opacity: 'strong'
                  }}
                  round
                  gap="small"
                  margin="medium"
                >
                  <Image
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '12px'
                    }}
                    fit="cover"
                    src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"
                  />
                  <Text>{dev}</Text>
                  <Anchor href="" label="More Info" />
                </Box>
              );
            })}
          </Grid>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}
