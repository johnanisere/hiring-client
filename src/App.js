import React from 'react';
import Root from './Root';
import { Provider } from 'react-redux';
import ErrorBoundary from './ErrorBoundary';
import store, { persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';
const App = () => (
  <ErrorBoundary>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Root />
      </PersistGate>
    </Provider>
  </ErrorBoundary>
);
export default App;
