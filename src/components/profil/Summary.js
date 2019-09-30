import React from 'react';
import Profile from './blocks';
import PropTypes from 'prop-types';

function App({ dev }) {
  const { profilePhoto, name, currentRole, description, stack } = dev;
  console.log({ profilePhoto });
  return (
    <>
      <Profile bottom>
        <Profile.Image src={profilePhoto} alt={`${name}'s picture`} />
        <Profile fill noPad>
          <Profile.Text size1 medium blue>
            {name}
          </Profile.Text>
          <br />
          <Profile.Text size5 medium black>
            {currentRole} &bull;
          </Profile.Text>
          <br />
          <Profile.Text size5 small grey l20>
            {description}
          </Profile.Text>
          <Profile tags>
            {stack.map((skill, key) => (
              <Profile.Tag key={key}>{skill}</Profile.Tag>
            ))}
          </Profile>
        </Profile>
      </Profile>
    </>
  );
}

App.propTypes = {
  profilePhoto: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  currentRole: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default React.memo(App);
