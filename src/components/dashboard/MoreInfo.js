import React, { useState } from 'react';
import { Box, Layer, Anchor } from 'grommet';
import DecadevModal from '../decadevModal/index';

export default function MoreInfo(props) {
  const [open, setOpen] = useState(false);

  const { email, profilePhoto, phone, cv, bio, name } = props;

  function onOpen() {
    return setOpen(true);
  }
  function onClose() {
    setOpen(undefined);
  }
  return (
    <Box align="center" justify="center">
      <Anchor label="More Info" onClick={onOpen} />
      {open && (
        <Layer pad="small" modal onClickOutside={onClose} onEsc={onClose}>
          <Box
            pad="none"
            onSubmit={onClose}
            style={{ backgroundColor: 'transparent' }}
          >
            <DecadevModal
              email={email}
              profilePhoto={profilePhoto}
              phone={phone}
              cv={cv}
              bio={bio}
              name={name}
            />
          </Box>
        </Layer>
      )}
    </Box>
  );
}
