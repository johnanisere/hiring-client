import React, { useState } from 'react';

import { Box, Button, Collapsible, Grommet, Text } from 'grommet';
import { grommet } from 'grommet/themes';
import decadevSubmenu from '../components/constants/decadevs-submenu';

const MenuButton = ({ label, open, submenu, ...rest }) => {
  return (
    <Button hoverIndicator {...rest}>
      <Box
        background="dark-3"
        margin={submenu ? { left: 'small' } : undefined}
        direction="row"
        align="center"
        pad={{
          horizontal: 'medium',
          vertical: 'small'
        }}
      >
        <Text>{label}</Text>
      </Box>
    </Button>
  );
};

export default function CollapsibleMenu() {
  const [openMenu, setOpenMenu] = useState(false);
  function toggleMenu() {
    setOpenMenu(!openMenu);
  }

  return (
    <Grommet theme={grommet}>
      <Box width="small">
        <MenuButton open={openMenu} label="Decadevs" onClick={toggleMenu} />
        {decadevSubmenu.map(item => {
          return (
            <Collapsible open={openMenu} key={item}>
              <Button
                hoverIndicator="background"
                onClick={() => alert('Submenu item 1 selected')}
              >
                <Box
                  background="dark-3"
                  direction="row"
                  align="center"
                  pad={{ horizontal: 'medium', vertical: 'small' }}
                >
                  <Text size="small">{item}</Text>
                </Box>
              </Button>
            </Collapsible>
          );
        })}
      </Box>
    </Grommet>
  );
}
