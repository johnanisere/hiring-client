import React from 'react';
import { Grommet, Box, Image } from 'grommet';
import { grommet } from 'grommet/themes';
import Work from './Work';

export default function Photo() {
  return (
    <Grommet theme={grommet}>
      <Box responsive align="start" gap="medium">
        <Box
          height="250px"
          width="80%"
          border
          style={{ marginTop: '5px', marginLeft: '5px', borderRadius: '5px' }}
        >
          <Image src="//v2.grommet.io/assets/IMG_4245.jpg" fit="cover" />
        </Box>
      </Box>
      <Work
        work="WORK"
        heading="Decagon Institute"
        stage="Primary"
        address="22 Familoni Street, Lekki Lagos."
        zip="ETI 10600 312-345-095 "
      />
      <Work
        heading="Google LLC"
        stage="Secondary"
        address="127 Silicon Valley, California."
        zip="CAR 10038-78 212-312-51 0256 "
      />
    </Grommet>
  );
}
