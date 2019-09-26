import React from "react";
import { connect } from "react-redux";
import { Star } from "grommet-icons";
import { Box, Text } from "grommet";
import selectedBoundActionCreator from "./selected.action";
function SelectCheck(props) {
  const { selected } = props;

  const onChange = () => {
    props.addToSelected(props.decadevObject, !selected);
  };

  return (
    <Box
      style={{
        position: "absolute",
        cursor: "pointer",
        zIndex: 5,
        bottom: "100px",
        left: "20px"
      }}
    >
      <Text color="white" style={{ display: "flex", alignItems: "center" }}>
        <Star onClick={onChange} color={selected ? "red" : "white"} />
      </Text>
    </Box>
  );
}

const mapDispatchToProps = {
  addToSelected: selectedBoundActionCreator
};

export default connect(
  null,
  mapDispatchToProps
)(SelectCheck);
