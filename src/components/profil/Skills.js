import React from 'react';
import Profile from './blocks';
import PropTypes from 'prop-types';

const App = ({ skills }) => (
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

App.propTypes = {
  skills: PropTypes.array.isRequired
};

App.defaultProps = {
  skills: [
    {
      type: 'Languages',
      description: 'CSS, HTML, Sass, JavaScript'
    },
    {
      type: 'Frameworks',
      description: 'Unity3D, Unity, SproutCore, AngularJS, Jasmine'
    },
    {
      type: 'Tools',
      description: 'Bower, Git, Karma, Grunt'
    },
    {
      type: 'Paradigms',
      description: 'Agile Software Development'
    },
    {
      type: 'Platforms',
      description: 'WordPress, WordPress Theme Design, MacOS'
    },
    {
      type: 'Storage',
      description: 'NoSQL, MySQL'
    },
    {
      type: 'Other',
      description:
        'PSD to HTML, PSD Slicing, Freelance, Programming, Freelance Programmer, ADK, IT, User Experience (UX), Localization'
    }
  ]
};

export default App;
