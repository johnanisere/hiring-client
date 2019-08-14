import React, { Component } from 'react';
import { connect } from 'react-redux';
import Authentication from '../../components/Authentication';
import loginBoundActionCreator from './login.action';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <Authentication
        login={this.props.login}
        match={this.props.match}
        error={this.props.error}
        loading={this.props.loading}
      />
    );
  }
}

const mapDispatchToProps = {
  login: loginBoundActionCreator
};
const mapStateToProps = state => ({
  loading: state.user.loading,
  error: state.user.error
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
