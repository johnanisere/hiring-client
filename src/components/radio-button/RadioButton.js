import React from 'react';
import { Box, Grommet, RadioButton, Text } from 'grommet';
import { grommet } from 'grommet/themes';

export default function MultipleChoices({ random, ...rest }) {
  return (
    <Grommet theme={grommet}>
      <Box
        pad={{
          top: 'small',
          bottom: 'small'
        }}
        gap="small"
      >
        <Text pad="none">{rest.question}</Text>
        {rest.choices.map(choice => {
          return (
            <RadioButton
              key={choice}
              label={choice}
              name={rest.name}
              value={choice}
              required
              checked={choice === random}
              onChange={rest.changed}
              {...rest}
            />
          );
        })}
      </Box>
    </Grommet>
  );
}
