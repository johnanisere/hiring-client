import React, { useState } from "react";
import { Grommet, Select } from "grommet";
import { grommet } from "grommet/themes";

function Dropdown(props) {
  const [values, setValues] = useState({
    options: ["All", "Male", "Female"],
    value: ""
  });

  const { theme, ...rest } = props;
  const { options, value } = values;


  const handleChange = ({ option }) => {
    setValues({ ...values, value: option });
  };
  return (
    <Grommet theme={theme || grommet}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          margin: "10px 8px"
        }}
      >
        <Select
          id="select"
          name="select"
          placeholder="Select Gender"
          value={value}
          options={options}
          onChange={handleChange}
          {...rest}
        />
      </div>
    </Grommet>
  );
}

export default Dropdown;
