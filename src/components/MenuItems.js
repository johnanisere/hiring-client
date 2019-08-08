import React from 'react';
import { Box, Button, Text } from 'grommet';

export default function MenuItems(props) {
  return (
    <>
      <Button key={props.name} href="#" hoverIndicator>
        <Box
          pad={{
            horizontal: 'medium',
            vertical: 'small'
          }}
        >
          <Text>{props.name}</Text>
        </Box>
      </Button>
    </>
  );
}
