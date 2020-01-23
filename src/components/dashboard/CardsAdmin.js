import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { deepMerge } from 'grommet/utils';
import { grommet } from 'grommet/themes';
import request from '../../request';
import MoonLoader from 'react-spinners/MoonLoader';

import { getTotalDecadevs } from '../hired/hired.action';

import Card from './Card';

import { Grommet, Box, Grid, ResponsiveContext, Text } from 'grommet';

const customBreakpoints = deepMerge(grommet, {
  global: {
    breakpoints: {
      small: {
        value: 600
      },
      medium: {
        value: 1200
      },
      large: {
        value: 2400
      }
    }
  }
});

function Cards(props) {
  let [state, setState] = useState({
    open: false,
    pod: 'Java',
    fetching: false,
    nextFromTheBack: null,
    counts: ''
  });

  useEffect(() => {
    props.allDevs(request);
  }, [props]);

  const { allDevs } = useSelector(({ hired }) => hired);

  const onToggle = () => {
    setState({
      ...state,
      open: !state.open
    });
  };

  const { loading } = props;

  return (
    <>
      <Grommet
        style={{ overflow: 'scroll', minHeight: '100%' }}
        theme={customBreakpoints}
      >
        {loading && (
          <Box fill width="medium" align="center" justify="center">
            <MoonLoader size={30} />
          </Box>
        )}
        <Box align="start" justify="start"></Box>
        <Box pad="small">
          <Text>{allDevs.length} Developers</Text>
        </Box>
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
              {!loading &&
                allDevs.map((dev, key) => (
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

const mapDispatchToProps = {
  allDevs: getTotalDecadevs
};

export default connect(null, mapDispatchToProps)(React.memo(Cards));
