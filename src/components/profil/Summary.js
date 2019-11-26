import React from "react";
import Profile from "./blocks";
import PropTypes from "prop-types";

function App({ profilePhoto, name, currentRole, description, stack }) {
  return (
    <>
      <Profile bottom>
        <Profile.Image src={profilePhoto} alt={`${name}'s picture`} />
        <Profile fill="true" noPad>
          <Profile.Text size1 medium blue>
            {name}
          </Profile.Text>
          <br />
          <Profile.Text size5 medium black>
            {currentRole ? currentRole : "Decadev"} &bull;
          </Profile.Text>
          <br />
          <Profile.Text size5 small grey l20>
            {description ? description : "Empty field"}
          </Profile.Text>
          <Profile tags>
            {stack ? (
              stack.map((skill, key) => (
                <Profile.Tag key={key}>{skill}</Profile.Tag>
              ))
            ) : (
              <Profile.Text>Empty field</Profile.Text>
            )}
          </Profile>
        </Profile>
      </Profile>
    </>
  );
}

App.propTypes = {
  profilePhoto: PropTypes.string,
  name: PropTypes.string,
  currentRole: PropTypes.string,
  description: PropTypes.string,
  stack: PropTypes.array
};

export default React.memo(App);
