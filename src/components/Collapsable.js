import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, Collapsible, Grommet, Text } from "grommet";

const MenuButton = ({ label, open, submenu, ...rest }) => {
  return (
    <Button hoverIndicator {...rest}>
      <Box
        margin={submenu ? { left: "small" } : undefined}
        direction="row"
        align="center"
        pad={{
          horizontal: "medium",
          vertical: "small"
        }}
        style={{ minWidth: "200px" }}
      >
        <Text style={{ color: "white" }}>{label}</Text>
      </Box>
    </Button>
  );
};

export default function CollapsibleMenu({ list, label }) {
  const [openMenu, setOpenMenu] = useState(false);
  function toggleMenu() {
    setOpenMenu(!openMenu);
  }

  return (
    <Grommet>
      <Box width="small">
        <MenuButton open={openMenu} label={label} onClick={toggleMenu} />
        {list.map(item => {
          return (
            <Collapsible open={openMenu} key={item}>
              <Button
                hoverIndicator
                onClick={() => alert("Submenu item 1 selected")}
              >
                <Box
                  direction="row"
                  align="center"
                  pad={{ horizontal: "medium", vertical: "small" }}
                >
                  <Text size="small" style={{ color: "white" }}>
                    {item}
                  </Text>
                </Box>
              </Button>
            </Collapsible>
          );
        })}
      </Box>
    </Grommet>
  );
}

CollapsibleMenu.propTypes = {
  list: PropTypes.array,
  label: PropTypes.string
};
