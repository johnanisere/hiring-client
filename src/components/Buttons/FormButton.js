import React from "react";
import PropTypes from "prop-types";
import { BeatLoader } from "react-spinners";
import { Box, Button } from "grommet";

const FormButton = ({ loading, type, onClick, text }) => (
  <Box
    direction="row"
    justify="center"
    align="center"
    margin={{ top: "medium" }}
  >
    <Button
      primary
      width="large"
      color="dark-1"
      label={loading ? <BeatLoader size={5} color="#fff" /> : `${text}`}
      type={type}
      onClick={onClick}
      style={{ width: "100%", marginTop: 20 }}
    />
  </Box>
);

FormButton.propTypes = {
  loading: PropTypes.bool,
  type: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string
};
export default FormButton;
