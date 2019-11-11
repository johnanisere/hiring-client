import React from 'react';
import { Box, Button, Heading, Layer, Text } from 'grommet';

const ViewDeclineReason = props => {
  return (
    <>
      {props.open && (
        <Layer
          position="center"
          modal
          onClickOutside={props.onClose}
          onEsc={props.onClose}
        >
          <Box pad="medium" gap="small" width="medium">
            <Heading level={3} margin="none">
              Reason for Decline
            </Heading>
            <Text> {props.declineReason}</Text>
            <Text> {props.decaDev}</Text>
            <Box
              as="footer"
              gap="small"
              direction="row"
              align="center"
              justify="end"
              pad={{ top: 'medium', bottom: 'small' }}
            >
              <Button
                label={
                  <Text color="white">
                    <strong>Close</strong>
                  </Text>
                }
                onClick={props.onClose}
                primary
                color="status-critical"
              />
            </Box>
          </Box>
        </Layer>
      )}
    </>
  );
};

export default ViewDeclineReason;
