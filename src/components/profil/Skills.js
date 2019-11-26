import React from "react";
import Profile from "./blocks";
import PropTypes from "prop-types";

function App({ skills }) {
  return (
    <>
      <Profile bottom style={{ width: "100%" }}>
        <Profile.Text bold grey size3 defined spacingsonLG>
          SKILLS
        </Profile.Text>
        <Profile fill="true" noPad>
          <Profile.List nobullet nomargin>
            {skills ? (
              skills.map(({ type, description }, key) => (
                <li key={key}>
                  <Profile.Text bold blue size3>
                    {type}
                  </Profile.Text>
                  <Profile.Text small grey size6 mtb1 l20>
                    {description}
                  </Profile.Text>
                </li>
              ))
            ) : (
              <Profile.Text>Empty field</Profile.Text>
            )}
          </Profile.List>
        </Profile>
      </Profile>
    </>
  );
}

App.propTypes = {
  skills: PropTypes.array
};

export default React.memo(App);
