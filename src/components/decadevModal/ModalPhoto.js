import React from 'react';
import { Box, Image } from 'grommet';
import ModalWork from './ModalWork';

export default function Photo(props) {
  const { profilePhoto } = props;
  return (
    <Box align="start" responsive>
      <Box
        height="250px"
        width="90%"
        border
        style={{ margin: 'auto', borderRadius: '5px' }}
      >
        <Image src={profilePhoto} fit="cover" />
      </Box>
      <ModalWork
        work="WORK"
        heading="Decagon Institute"
        stage="Primary"
        address="22 Familoni Street, Lekki Lagos."
        zip="ETI 10600 312-345-095 "
      />
      <ModalWork
        work="WORK"
        heading="Google LLC"
        stage="Secondary"
        address="127 Silicon Valley, California."
        zip="CAR 10038-78 212-312-51 0256 "
      />
    </Box>
  );
}
