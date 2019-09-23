import React from 'react';
import { connect } from 'react-redux';
import request from '../../request';
import { getAllDecadevs } from './decadevs.action';
import MoonLoader from 'react-spinners/MoonLoader';
import Dropdown from '../Dropdown';
import Next from './Next';
import Finalize from '../selected/Finalize';
import Card from './Card';

import { Grommet, Box, Grid, ResponsiveContext } from 'grommet';

class Cards extends React.Component {
  state = {
    open: false,
    gender: 'All',
    fetching: false
  };
  componentDidMount() {
    this.props.getAllDecadevs(request);
  }
  handleChange = gender => {
    this.setState({ gender }, () => this.props.getAllDecadevs(request, gender));
  };

  handleNext = () => {
    const { gender } = this.state;
    this.props.getAllDecadevs(request, gender);
  };

  onToggle = () => {
    this.setState({ ...this.state, open: !this.state.open });
  };

  render() {
    const { loading, decadevs } = this.props;

    return (
      <>
        <Dropdown handleChange={this.handleChange} />
        <Grommet style={{ overflow: 'scroll', minHeight: '100%' }}>
          {loading && (
            <Box fill width="medium" align="center" justify="center">
              <MoonLoader size={30} />
            </Box>
          )}
          <Box align="start" justify="start">
            <Finalize />
          </Box>
          <ResponsiveContext.Consumer>
            {size => (
              <Grid
                columns={
                  size === 'small'
                    ? ['1']
                    : size === 'medium'
                    ? ['1/4', '1/4', '1/4', '1/4']
                    : size === 'large'
                    ? ['1/4', '1/4', '1/4', '1/4']
                    : size === 'xlarge'
                    ? ['1/5', '1/5', '1/5', '1/5', '1/5']
                    : ['1/6', '1/6', '1/6', '1/6', '1/6', '1/6']
                }
              >
                {decadevs.map((dev, key) => (
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
    decadevs: state.decadevs.decadevs
  };
};
const mapDispatchToProps = {
  getAllDecadevs
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Cards));
