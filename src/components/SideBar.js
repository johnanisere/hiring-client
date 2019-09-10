import React, { useEffect } from 'react';
import { Box } from 'grommet';
import MenuItems from './MenuItems';
import CollapsibleMenu from './Collapsable';
import { useSelector } from 'react-redux';
import {
  hiringPartnerMenuItems,
  adminMenuItems
} from '../components/constants/menu-items';

export default function SideBar({ sidebar }) {
  const { role } = useSelector(({ user }) => user.data);
  const list =
    role === 'hiringpartner' ? hiringPartnerMenuItems : adminMenuItems;
  useEffect(() => {
    console.log(list);
  });
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
          {list.map(value =>
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
