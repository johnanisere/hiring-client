import React from 'react';
import { Box } from 'grommet';
import MenuItems from './MenuItems';
import CollapsibleMenu from './Collapsable';
import { useSelector } from 'react-redux';
import {
  hiringPartnerMenuItems,
  adminMenuItems
} from '../components/constants/menu-items';

export default function SideBar({ sidebar }) {
  const { hirer } = useSelector(({ hirer }) => hirer);
  const list = hirer ? hiringPartnerMenuItems : adminMenuItems;

  const handleClick = e => {
    console.log({ e });
  };

  return (
    <>
      {sidebar && (
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
          {list.map((value, index) =>
            typeof value === 'string' ? (
              <MenuItems name={value} key={value} />
            ) : (
              <CollapsibleMenu
                onClick={handleClick}
                key={Object.keys(value)[0]}
                list={Object.values(value)[0]}
                label={Object.keys(value)[0]}
              />
            )
          )}
        </Box>
      )}
    </>
  );
}
