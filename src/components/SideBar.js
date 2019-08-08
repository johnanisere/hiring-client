import React from 'react';
import { Box, Button, Text } from 'grommet';

export default function SideBar(props) {
  return (
    <>
      {props.sidebar && (
        <Box
          gridArea="sidebar"
          background="dark-3"
          width="small"
          animation={[
            { type: 'fadeIn', duration: 300 },
            {
              type: 'slideRight',
              size: 'xlarge',
              duration: 150
            }
          ]}
        >
          {['Decadev', 'Feedback', 'Notification', 'Settings'].map(name => (
            <Button key={name} href="#" hoverIndicator>
              <Box
                pad={{
                  horizontal: 'medium',
                  vertical: 'small'
                }}
              >
                <Text>{name}</Text>
              </Box>
            </Button>
          ))}
        </Box>
      )}
    </>
  );
}
