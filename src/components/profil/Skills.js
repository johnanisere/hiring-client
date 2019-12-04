import React from "react";
import Profile from "./blocks";
import PropTypes from "prop-types";
import { Link } from "grommet-icons";

function App({ publications }) {
  return (
    <>
      <Profile bottom style={{ width: "100%" }}>
        <Profile.Text bold grey size3 defined spacingsonLG>
          PUBLICATIONS
        </Profile.Text>
        <Profile fill="true" noPad>
          <Profile.List nobullet nomargin>
            {publications ? (
              publications.map(({ title, link }, key) => (
                <li key={key}>
                  <Profile.Text bold blue size3>
                    {title}
                    <a href={link}>
                      <Link size="15px" style={{ cursor: "pointer" }} />
                    </a>
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
