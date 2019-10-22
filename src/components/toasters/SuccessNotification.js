import React from 'react';
import PropTypes from 'prop-types';
import { Layer, Box, Button, Text } from 'grommet';
import { FormClose, StatusGood } from 'grommet-icons';

const App = ({ message, onClose }) => (
  <Layer
    position="top"
    modal={false}
    margin={{ vertical: 'medium', horizontal: 'small' }}
    onEsc={onClose}
    responsive={false}
    plain
  >
    <Box
      align="center"
      direction="row"
      gap="small"
      justify="between"
      round="medium"
      elevation="medium"
      pad={{ vertical: 'xsmall', horizontal: 'small' }}
      background="status-ok"
    >
      <Box align="center" direction="row" gap="xsmall">
        <StatusGood />
        <Text>{message}</Text>
      </Box>
      <Button icon={<FormClose />} onClick={onClose} plain />
    </Box>
  </Layer>
);

App.propTypes = {
  message: PropTypes.string,
  onClose: PropTypes.func
};
export default App;
