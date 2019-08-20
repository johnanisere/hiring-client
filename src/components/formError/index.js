import React from 'react';
import Proptypes from 'prop-types';
import { errorMessageExtrator } from '../../helpers/utils';

const formError = ({ error }) =>
  error && (
    <small
      className="error"
      style={{
        color: 'red',
        textAlign: 'center',
        marginBottom: '0.75rem'
      }}
    >
      {errorMessageExtrator(error)}
    </small>
  );

formError.propTypes = {
  error: Proptypes.object
};
export default formError;
