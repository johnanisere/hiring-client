import React from "react";

import { Box, CheckBox, Grommet } from "grommet";

const boxStyle = {
  position: "relative",
  fontWeight: "lighter",
  display: "flex"
};
const titleBoxBackground = { color: "neutral-1" };
const checkBoxStyle = { fontSize: "12px" };
const titleBoxStyle = { position: "sticky", top: 0, marginBottom: "20%" };

const checkboxes = [
  "CSS",
  "HTML",
  "JavaScript",
  "TypeScript",
  "ReactJS",
  "Java",
  "Python",
  "C#",
  "Kotlin",
  "Jest",
  "MongoDB",
  "SQL",
  "GraphQL",
  "CircleCI",
  "Heroku",
  "Docker"
];

const removeItemFromArray = (array, value) =>
  array.filter(item => item !== value);

const Stack = props => {
  const { checks, setChecks } = props;
  const onCheck = value => ({ target }) => {
    if (target.checked) {
      setChecks([...checks, value]);
    } else {
      setChecks(removeItemFromArray(checks, value));
    }
  };

  return (
    <Grommet>
      <Box height="120px" width="120px" overflow="scroll" style={boxStyle}>
        <Box style={titleBoxStyle}>Add Relevants</Box>
        <Box style={checkBoxStyle}>
          {checkboxes.map(item => (
            <CheckBox
              key={item}
              checked={checks.includes(item)}
              label={item}
              onChange={onCheck(item)}
            />
          ))}
        </Box>
      </Box>
    </Grommet>
  );
};

export default Stack;
