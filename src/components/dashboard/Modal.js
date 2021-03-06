import React, { Component } from 'react';
import { Box, Button, FormField, Grommet, Layer } from 'grommet';
import { grommet } from 'grommet/themes';

class Modal extends Component {
  state = {
    code: ''
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value });
  };
  onSubmit = () => {
    this.props.submit(this.props.onToggle, this.state.code);
  };
  render() {
    const { open, onToggle } = this.props;
    return (
      <Grommet theme={grommet}>
        <Box align="center" justify="center">
          {open && (
            <Layer modal onClickOutside={onToggle} onEsc={onToggle}>
              <Box
                as="form"
                fill="vertical"
                overflow="auto"
                width="medium"
                pad="medium"
                onSubmit={onToggle}
              >
                <Box flex="grow" overflow="auto" pad={{ vertical: 'medium' }}>
                  <FormField
                    label="Please enter your authorization code from google"
                    name="code"
                    value={this.state.code}
                    onChange={this.onChange}
                  />
                  
                </Box>
                <Box flex={false} as="footer" align="center">
                  <Button
                    type="submit"
                    label="Submit"
                    onClick={this.onSubmit}
                    primary
                  />
                </Box>
              </Box>
            </Layer>
          )}
        </Box>
      </Grommet>
    );
  }
}

export default Modal;
