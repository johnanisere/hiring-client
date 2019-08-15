import React from 'react';
import { Box, Button, Text } from 'grommet';

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
        <Text size="large">Title</Text>
      </Button>

      <Text>email@example.com</Text>
    </Box>
  );
}
