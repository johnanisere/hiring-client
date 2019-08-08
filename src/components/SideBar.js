import React from 'react';
import { Box } from 'grommet';
import MenuItems from './MenuItems';
import CollapsibleMenu from './Collapsable';
import menuItems from '../components/constants/menu-items';

export default function SideBar(props) {
  return (
    <>
      {props.sidebar && (
        <Box
          gridArea="sidebar"
          background="dark-3"
          width="small"
          animation={[
            { type: 'fadeIn', duration: 300 },
            {
              type: 'slideRight',
              size: 'xlarge',
              duration: 150
            }
          ]}
        >
          <CollapsibleMenu />
          {menuItems.map(name => (
            <MenuItems name={name} key={name} />
          ))}
        </Box>
      )}
    </>
  );
}
