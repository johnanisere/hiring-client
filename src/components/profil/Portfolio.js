import React from "react";
import Profile from "./blocks";
import PropTypes from "prop-types";

function App({ portfolio, education, skills }) {
  return (
    <>
      <Profile grid>
        <Profile fill="true" bottom>
          <Profile.Text bold grey size3>
            PORTFOLIO
          </Profile.Text>
          <Profile.List nobullet>
            {portfolio ? (
              portfolio.map(({ title, languages, link }, key) => (
                <li key={key}>
                  <Profile.Text bold blue size3 as="a" href={link}>
                    {title}
                  </Profile.Text>
                  <Profile.Text small grey size6 mtb1 l20>
                    {languages}
                  </Profile.Text>
                </li>
              ))
            ) : (
              <Profile.Text>Empty field</Profile.Text>
            )}
          </Profile.List>
        </Profile>
        <Profile fill="true" bottom left right>
          <Profile.Text bold grey size3>
            EDUCATION
          </Profile.Text>
          <Profile.List nobullet>
            {education ? (
              education.map(
                ({ qualification, placeOfEducation, duration }, key) => (
                  <li key={key}>
                    <Profile.Text bold black size3 l20>
                      {qualification}
                    </Profile.Text>
                    {placeOfEducation}.{"   "}
                    <span className="small"> {duration}</span>
                  </li>
                )
              )
            ) : (
              <Profile.Text>No Education yet</Profile.Text>
            )}
          </Profile.List>
        </Profile>
        <Profile fill="true" bottom>
          <Profile.Text bold grey size3>
            SKILLS
          </Profile.Text>
          <Profile.List nobullet>
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
  portfolio: PropTypes.array,
  skills: PropTypes.array,
  experience: PropTypes.array
};

export default React.memo(App);
