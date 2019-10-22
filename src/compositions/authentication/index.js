import React, { Component } from 'react';
import Authentication from '../../components/authentication';

class App extends Component {
  render() {
    return <Authentication {...this.props} />;
  }
}

export default App;
