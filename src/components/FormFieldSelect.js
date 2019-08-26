import React, { Component } from "react";

import { grommet, Box, FormField, Select, Grommet } from "grommet";

const allOptions = Array(100)
  .fill()
  .map((_, i) => `option ${i + 1}`);

class FormFieldSelect extends Component {
  state = { options: allOptions };

  render() {
    const { decadev } = this.props;
    const { options } = this.state;
    return (
      <Grommet theme={grommet}>
        <Box>
          <FormField label="Add Decadevs" htmlFor="select" {...this.props}>
            <Select
              id="select"
              placeholder="placeholder"
              options={options}
              value={decadev}
              onChange={({ option }) =>
                this.props.setDecadev({ decadev: option })
              }
            />
          </FormField>
        </Box>
      </Grommet>
    );
  }
}
export default FormFieldSelect;
