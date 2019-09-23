import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Box, Button, Collapsible, Grommet, Text } from 'grommet';

const MenuButton = ({ label, open, submenu, ...rest }) => {
  return (
    <Button hoverIndicator {...rest}>
      <Box
        margin={submenu ? { left: 'small' } : undefined}
        direction="row"
        align="center"
        pad={{
          horizontal: 'medium',
          vertical: 'small'
        }}
        style={{ minWidth: '200px' }}
      >
        <Text style={{ color: 'white' }}>{label}</Text>
      </Box>
    </Button>
  );
};

const CollapsibleMenu = ({ list, label, history }) => {
  const [openMenu, setOpenMenu] = useState(false);
  function toggleMenu() {
    setOpenMenu(!openMenu);
  }

  return (
    <Grommet>
      <Box width="small">
        <MenuButton open={openMenu} label={label} onClick={toggleMenu} />
        {list.map(item => {
          const text = typeof item === 'string' ? item : Object.keys(item)[0];
          const handleClick = () => {
            typeof item === 'string'
              ? history.push('/')
              : history.push(Object.values(item)[0]);

            if (item === 'All Decadevs') {
              console.log('HALLELUJAH!!!!!');
              history.push('/dashboard');
            } else if (item === 'Decadevs Interviewed') {
              console.log('DECADEV INTERVIEWED');
            } else {
              console.log('DECADEV HIRED');
            }
          };

          const key =
            typeof item === 'string' ? item : item[Object.keys(item)[0]];
          return (
            <Collapsible open={openMenu} key={key}>
              <Button hoverIndicator onClick={handleClick}>
                <Box
                  direction="row"
                  align="center"
                  pad={{ horizontal: 'medium', vertical: 'small' }}
                >
                  <Text size="small" style={{ color: 'white' }}>
                    {text}
                  </Text>
                </Box>
              </Button>
            </Collapsible>
          );
        })}
      </Box>
    </Grommet>
  );
};

CollapsibleMenu.propTypes = {
  list: PropTypes.array,
  label: PropTypes.string
};

export default withRouter(CollapsibleMenu);
