import React from 'react';

import { Box, Button, Menu } from 'grommet';

import { Menu as MenuIcon, Down } from 'grommet-icons';
import signOut from '../components/authentication/signout.action';
import { connect } from 'react-redux';

const Header = props => {
  const handleSignout = e => {
    e.preventDefault();
    props.signOut();
  };

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
        <MenuIcon size="medium" />
      </Button>

      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }}
      >
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt="profile"
          className="profile--photo"
        />
        <Menu
          dropProps={{ align: { top: 'bottom', left: 'left' } }}
          items={[{ label: 'Sign-Out', onClick: handleSignout }]}
          icon={<Down color="#fff" size="small" />}
        />
      </Box>
    </Box>
  );
};
const mapDispatchToProps = {
  signOut: signOut
};
export default connect(
  null,
  mapDispatchToProps
)(Header);
