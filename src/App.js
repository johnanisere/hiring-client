import React from 'react';
import Root from './Root';
import { Provider } from 'react-redux';
import ErrorBoundary from './ErrorBoundary';
import store from './store';

import './App.css';
const App = () => (
  <ErrorBoundary>
    <Provider store={store}>
      <Root />
    </Provider>
  </ErrorBoundary>
);
export default App;
