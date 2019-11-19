import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import { Box, Button, Collapsible, Grommet, Text } from 'grommet';
import { getAllInterviews } from './interviewActivities/interviews.action';
import request from '../request';

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

const CollapsibleMenu = ({ list, label, history, ...props }) => {
  const [openMenu, setOpenMenu] = useState(false);
  function toggleMenu() {
    setOpenMenu(!openMenu);
    if (!openMenu) {
      props.getAllInterviews(request);
    }
  }

  return (
    <Grommet>
      <Box width="small">
        <MenuButton open={openMenu} label={label} onClick={toggleMenu} />

        {list.map(item => {
          const text = typeof item === 'string' ? item : Object.keys(item)[0];
          const to = typeof item === 'string' ? '/' : Object.values(item)[0];

          const key =
            typeof item === 'string' ? item : item[Object.keys(item)[0]];
          return (
            <Collapsible open={openMenu} key={key}>
              <Link to={`${to}`} style={{ textDecoration: 'none' }}>
                <Box
                  direction="row"
                  align="center"
                  pad={{ horizontal: 'medium', vertical: 'small' }}
                >
                  <Text size="small" style={{ color: 'white' }}>
                    {text}
                  </Text>
                </Box>
              </Link>
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

const mapDispatchToProps = {
  getAllInterviews
};
export default connect(
  null,
  mapDispatchToProps
)(withRouter(CollapsibleMenu));
