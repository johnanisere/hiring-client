import React from 'react';
import { connect } from 'react-redux';
import request from '../../request';
import { getAllDecadevs } from './decadevs.action';
import MoonLoader from 'react-spinners/MoonLoader';
import Dropdown from '../Dropdown';
import Next from './Next';
import MoreInfo from './MoreInfo';
import Finalize from '../selected/Finalize';
import SelectCheck from '../selected/SelectCheck';

import { Grommet, Box, Text, Image, Grid, ResponsiveContext } from 'grommet';

class Cards extends React.Component {
  state = {
    open: false,
    gender: 'All'
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
            <Box
              fill
              width="medium"
              pad="medium"
              align="center"
              justify="center"
            >
              <MoonLoader />
            </Box>
          )}
          <Finalize />
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
                {decadevs.map(dev => {
                  return (
                    <Box
                      key={dev._id}
                      pad="medium"
                      align="center"
                      background={{
                        color: 'light-2',
                        opacity: 'strong'
                      }}
                      round
                      gap="small"
                      margin="medium"
                      animation={['fadeIn']}
                    >
                      <Image
                        style={{
                          width: '100%',
                          height: 'auto',
                          borderRadius: '12px'
                        }}
                        fit="cover"
                        src={dev.profilePhoto}
                      />

                      <Text>{dev.email}</Text>
                      <MoreInfo
                        email={dev.email}
                        profilePhoto={dev.profilePhoto}
                        phone={dev.phone}
                        cv={dev.cv}
                        bio={dev.bio}
                        name={dev.name}
                        open={this.state.open}
                        onToggle={this.onToggle}
                      />
                      <SelectCheck decadevObject={dev} />
                    </Box>
                  );
                })}
              </Grid>
            )}
          </ResponsiveContext.Consumer>
          <Next handleNext={this.handleNext} />
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
