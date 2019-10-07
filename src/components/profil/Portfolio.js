import React from 'react';
import Profile from './blocks';
import PropTypes from 'prop-types';

function App({ portfolio, experience, skills }) {
  return (
    <>
      <Profile grid>
        <Profile fill="true" bottom>
          <Profile.Text bold grey size3>
            PORTFOLIO
          </Profile.Text>
          <Profile.List nobullet>
            {portfolio.map(({ title, languages, link }, key) => (
              <li key={key}>
                <Profile.Text bold blue size3 as="a" href={link}>
                  {title}
                </Profile.Text>
                <Profile.Text small grey size6 mtb1 l20>
                  {languages}
                </Profile.Text>
              </li>
            ))}
          </Profile.List>
        </Profile>
        <Profile fill="true" bottom left right>
          <Profile.Text bold grey size3>
            EXPERIENCE
          </Profile.Text>
          <Profile.List nobullet>
            {experience.map(({ title, years }, key) => (
              <li key={key}>
                <Profile.Text bold black size3 l20>
                  {title},<span className="small"> {years} years</span>
                </Profile.Text>
              </li>
            ))}
          </Profile.List>
        </Profile>
        <Profile fill="true" bottom>
          <Profile.Text bold grey size3>
            SKILLS
          </Profile.Text>
          <Profile.List nobullet>
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
  portfolio: PropTypes.array.isRequired,
  skills: PropTypes.array.isRequired,
  experience: PropTypes.array.isRequired
};

export default React.memo(App);
