import React from "react";
import Proptypes from "prop-types";
import { errorMessageExtrator } from "../../helpers/utils";

const FormError = ({ error }) =>
  error && (
    <small
      className="error"
      style={{
        color: "red",
        textAlign: "center"
      }}
    >
      {errorMessageExtrator(error)}
    </small>
  );

FormError.propTypes = {
  error: Proptypes.object
};
export default FormError;
