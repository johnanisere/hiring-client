import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { deepMerge } from 'grommet/utils';
import { grommet } from 'grommet/themes';

import { Grommet, Grid, ResponsiveContext } from 'grommet';

import Card from '../dashboard/Card';

const customBreakpoints = deepMerge(grommet, {
  global: {
    breakpoints: {
      small: {
        value: 600,
      },
      medium: {
        value: 1200,
      },
      large: {
        value: 2400,
      },
    },
  },
});

export default function Shortlisted(props) {
  const { selectedDecadevs } = useSelector(({ shortlisted }) => shortlisted);
  const shortlistedDevs = Object.values(selectedDecadevs);
  const [state, setState] = useState({
    open: false,
    pod: 'Java',
  });

  const onToggle = () => {
    setState({ ...state, open: !state.open });
  };

  return (
    <>
      <Grommet
        style={{ overflow: 'scroll', minHeight: '100%' }}
        theme={customBreakpoints}
      >
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
                  : ['1/4', '1/4', '1/4', '1/4']
              }
            >
              {shortlistedDevs.map((dev, key) => (
                <Card
                  key={key}
                  dev={dev}
                  open={state.open}
                  onToggle={onToggle}
                />
              ))}
            </Grid>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    </>
  );
}
