import React from 'react';
import { connect } from 'react-redux';
import { deepMerge } from 'grommet/utils';
import { grommet } from 'grommet/themes';
import request from '../../request';
import getAllDecadevs from './decadevs.action';
import allowNext, { resetNextToDefault } from '../AllowNext/allowNext.action';
import MoonLoader from 'react-spinners/MoonLoader';
import Dropdown from '../Dropdown';
import Next from './Next';

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

class Cards extends React.Component {
  state = {
    open: false,
    pod: 'Java',
    fetching: false,
  };
  componentDidMount() {
    this.props.getAllDecadevs(request, this.state.pod);
    console.log(this.props.allownext);
  }
  handleChange = pod => {
    this.setState({ pod }, () => this.props.getAllDecadevs(request, pod));
  };

  handleNext = () => {
    const { pod } = this.state;
    this.props.getAllDecadevs(request, pod);
    this.props.resetNextToDefault();
  };

  onToggle = () => {
    this.setState({
      ...this.state,
      open: !this.state.open,
    });
  };

  render() {
    const { loading, total } = this.props;
    return (
      <>
        <Dropdown handleChange={this.handleChange} />
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
                  this.props.decadevs.map((dev, key) => (
                    <Card
                      key={key}
                      dev={dev}
                      open={this.state.open}
                      onToggle={this.onToggle}
                    />
                  ))}
              </Grid>
            )}
          </ResponsiveContext.Consumer>
          {!loading && (
            <Next
              handleNext={this.handleNext}
              style={{ borderRadius: '5px' }}
              isDisabled={this.props.allownext.disable}
            />
          )}
        </Grommet>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    loading: state.decadevs.loading,
    decadevs: state.decadevs.decadevs,
    total: state.decadevs.total,
    allownext: state.allowNext,
  };
};
const mapDispatchToProps = {
  getAllDecadevs,
  allowNext,
  resetNextToDefault,
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Cards));
