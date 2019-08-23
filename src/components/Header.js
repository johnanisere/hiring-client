import React from 'react';
import { Box, Button, Text } from 'grommet';
import { NavLink } from 'react-router-dom';
import { Menu } from 'grommet-icons';

export default function Header(props) {
  return (
    <Box
      gridArea="header"
      direction="row"
      align="center"
      justify="between"
      pad={{ horizontal: 'medium', vertical: 'small' }}
      background="dark-2"
    >
      <Button onClick={props.toggleSidebar}>
        <Menu size="medium" />
      </Button>

      <Text>email@example.com</Text>
      <NavLink className="link" to="/updatepassword">
        <Text>Update Password</Text>
      </NavLink>
    </Box>
  );
}
