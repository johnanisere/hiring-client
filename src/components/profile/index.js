import React from 'react';
import { Box, Button, Heading, Grommet, Image } from 'grommet';
import { Notification } from 'grommet-icons';
import { grommet } from 'grommet/themes';
import Decagon from './decagon-logo.png';
import { useSelector } from 'react-redux';
import PhotoForm from './Photo/PhotoForm';

import Photo from './Photo/Photo';
import Skills from './Skills/Skills';
import Work from './Work/Work';
import Projects from './Projects/Projects';

const DecaDevProfile = () => {
  const { data } = useSelector(({ user }) => user);
  const [isEditing, setIsEditing] = React.useState(false);

  const [openNotification, setOpenNotification] = React.useState();

  return (
    <Grommet theme={grommet}>
      <Box
        as="header"
        direction="row"
        align="center"
        pad={{ vertical: 'small', horizontal: 'medium' }}
        justify="between"
        background="dark-3"
        elevation="large"
        style={{
          zIndex: '1000',
          position: 'fixed',
          top: 0,
          width: '100%',
          overflow: 'hidden'
        }}
      >
        <Heading level={3} margin="none" color="white">
          <Image
            src="https://res.cloudinary.com/deepockets/image/upload/v1570959913/hiring%20client/decagon-logo_i5cbks.png"
            fit="contain"
            fallback={Decagon}
            style={{ width: '50px', height: 'auto' }}
          />
        </Heading>
        <Button
          onClick={() => setOpenNotification(!openNotification)}
          icon={<Notification color="white" />}
        />
      </Box>
      <Box as="main" style={{ marginTop: '82px', maxWidth: '100%' }}>
        {isEditing ? (
          <PhotoForm decadev={data} setIsEditing={setIsEditing} />
        ) : (
          <Photo data={data} setIsEditing={setIsEditing} />
        )}
        <Work decadev={data} />
        <Skills decadev={data} />
        <Projects data={data} />
      </Box>
    </Grommet>
  );
};
export default DecaDevProfile;
