import React from 'react';
import Proptypes from 'prop-types';
import { errorMessageExtrator } from '../../helpers/utils';

const FormError = ({ error }) => {
  if (error) {
    return (
      <small
        className="error"
        style={{
          color: 'red',
          textAlign: 'center'
        }}
      >
        {errorMessageExtrator(error)}
      </small>
    );
  } else {
    return null;
  }
};

FormError.propTypes = {
  error: Proptypes.object
};
export default FormError;
