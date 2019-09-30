import React from 'react';
import Profile from './blocks';
import PropTypes from 'prop-types';

function App({ dev }) {
  const { skills } = dev;
  return (
    <>
      <Profile bottom style={{ width: '100%' }}>
        <Profile.Text bold grey size3 defined spacingsonLG>
          SKILLS
        </Profile.Text>
        <Profile fill noPad>
          <Profile.List nobullet nomargin>
            {skills.map(({ type, description }, key) => (
              <li key={key}>
                <Profile.Text bold blue size3>
                  {type}
                </Profile.Text>
                <Profile.Text small grey size6 mtb1 l20>
                  {description}
                </Profile.Text>
              </li>
            ))}
          </Profile.List>
        </Profile>
      </Profile>
    </>
  );
}

App.propTypes = {
  skills: PropTypes.array.isRequired
};

export default React.memo(App);
