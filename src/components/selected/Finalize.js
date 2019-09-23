import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import { grommet, Box, Button, Grommet } from 'grommet';

export default function Finalize(props) {
  const [state, setState] = useState(false);
  const handleClick = () => setState(true);

  if (state) {
    return <Redirect to="/dashboard/shortlisted" />;
  }

  return (
    <Grommet theme={grommet}>
      <Box align="center" pad="medium" margin="large">
        <Button primary label="Finalize" onClick={handleClick} color="dark-1" />
      </Box>
    </Grommet>
  );
}
