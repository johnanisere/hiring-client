import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { deepMerge } from 'grommet/utils';
import { grommet } from 'grommet/themes';
import request from '../../request';
import getAllDecadevs from './decadevs.action';
import getHirer from '../dashboard/hirer.action';
import allowNext, { resetNextToDefault } from '../AllowNext/allowNext.action';
import setPod from '../SetPod/setPod.action';
import MoonLoader from 'react-spinners/MoonLoader';
import Dropdown from '../Dropdown';
import Next from './Next';
import { GET_HIRER } from './hirer.action';
import { HIRER_LOGIN } from '../HirerSignUp/hirerLogin/hirerLogin.action';

import Card from './Card';

import { Grommet, Box, Grid, ResponsiveContext, Text } from 'grommet';

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

function Cards(props) {
  let [state, setState] = useState({
    open: false,
    pod: 'Java',
    fetching: false,
    nextFromTheBack: null,
    counts: '',
  });

  const { data: userData } = useSelector(({ user }) => user);

  const dispatch = useDispatch();

  const normalizePod = pod => {
    return pod === 'C#' ? pod.split('')[0].toLowerCase() : pod.toLowerCase();
  };

  const setNextButton = () => {
    props.getAllDecadevs(request, state.pod);
    props.setPod(state.pod);
    props.getHirer(request);

    let partnerDetails = props.userData;

    if (partnerDetails) {
      let inviteCounts = partnerDetails.currentInviteCount;
      localStorage.setItem('counts', JSON.stringify(inviteCounts));

      let currentPod = normalizePod(state.pod);

      let nextDisabled = inviteCounts.filter(count => count.pod === currentPod);

      if (nextDisabled.length && nextDisabled[0].next >= 1) {
        setState({ ...state, nextFromTheBack: nextDisabled[0].next });
      }
    }
  };

  useEffect(() => {
    setNextButton();
  }, [state.pod]);

  const handleChange = pod => {
    props.setPod(pod);

    const storedCounts = JSON.parse(localStorage.getItem('counts'));

    let currentPod = normalizePod(state.pod);

    let currentPodCount = storedCounts.filter(
      count => count.pod === currentPod,
    );

    setState({ ...state, pod, nextFromTheBack: currentPodCount.next });
  };

  const handleNext = () => {
    const { pod } = state;
    const isNext = true;

    let currentInviteCount = userData.currentInviteCount;

    let currentPod = normalizePod(state.pod);

    currentInviteCount.forEach(count => {
      if (count.pod === currentPod) {
        if (count.count >= 1) {
          count.next = true;
        } else {
          ++count.count;
        }
      }
    });

    const payload = { partner: { ...userData, currentInviteCount } };

    dispatch({ type: GET_HIRER, payload });
    dispatch({ type: HIRER_LOGIN, payload: payload.partner });

    props.getAllDecadevs(request, pod, isNext);
    props.setPod(state.pod);
    setState({ ...state, nextFromTheBack: true });
  };

  const onToggle = () => {
    setState({
      ...state,
      open: !state.open,
    });
  };

  const { loading, total } = props;

  return (
    <>
      <Dropdown handleChange={handleChange} />
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
          <Text>{total} Developers</Text>
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
                props.decadevs.map((dev, key) => (
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
        {!loading && (
          <Next
            handleNext={handleNext}
            style={{ borderRadius: '5px' }}
            isDisabled={state.nextFromTheBack}
          />
        )}
      </Grommet>
    </>
  );
}

const mapStateToProps = state => {
  return {
    loading: state.decadevs.loading,
    decadevs: state.decadevs.decadevs,
    total: state.decadevs.total,
    allownext: state.allowNext,
    token: state.user.data.token,
    pod: state.pod,
    userData: state.user.data,
    hirerData: state.getHirer,
  };
};
const mapDispatchToProps = {
  getAllDecadevs,
  allowNext,
  resetNextToDefault,
  setPod,
  getHirer,
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Cards));
