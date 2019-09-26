import React from 'react';
import Profile from './blocks';
import PropTypes from 'prop-types';

const App = ({ employments }) => (
  <>
    <Profile bottom>
      <Profile.Text bold grey size3 defined spacingsonLG>
        EMPLOYMENT
      </Profile.Text>
      <Profile fill noPad>
        {employments.map(({ title, duration, location, achievements }, key) => (
          <Profile fill noPad key={key}>
            <Profile noPad spacebetween>
              <Profile.Text medium blue size2>
                {title}
              </Profile.Text>
              <Profile.Text small grey size4 spacingsonSM>
                {duration}
              </Profile.Text>
            </Profile>
            <Profile.Text small black size2 mt5>
              {location}
            </Profile.Text>
            <Profile.List>
              {achievements.map((achievement, key) => (
                <li key={key}>
                  <Profile.Text small grey l20>
                    {achievement}
                  </Profile.Text>
                </li>
              ))}
            </Profile.List>
          </Profile>
        ))}
      </Profile>
    </Profile>
  </>
);

App.propTypes = {
  employments: PropTypes.array.isRequired
};

App.defaultProps = {
  employments: [
    {
      title: 'Senior Front-End Engineer',
      duration: '2013 - PRESENT',
      location: 'Rosetta Stone',
      achievements: [
        'Built a language-learning app for Arabic learners in AngularJS',
        "Constructed a reporting tool so administrators could see their students' progress in real-time.",
        'Developed custom AngularJS services and corresponding tests.',
        'Created custom exact-target email templates and data extensions, and a tool to allow administrators to email users at the click of a button.'
      ]
    },
    {
      title: 'Senior Front-End Engineer',
      duration: '2013 - PRESENT',
      location: 'Rosetta Stone',
      achievements: [
        'Built a language-learning app for Arabic learners in AngularJS',
        "Constructed a reporting tool so administrators could see their students' progress in real-time.",
        'Developed custom AngularJS services and corresponding tests.',
        'Created custom exact-target email templates and data extensions, and a tool to allow administrators to email users at the click of a button.'
      ]
    },
    {
      title: 'Senior Front-End Engineer',
      duration: '2013 - PRESENT',
      location: 'Rosetta Stone',
      achievements: [
        'Built a language-learning app for Arabic learners in AngularJS',
        "Constructed a reporting tool so administrators could see their students' progress in real-time.",
        'Developed custom AngularJS services and corresponding tests.',
        'Created custom exact-target email templates and data extensions, and a tool to allow administrators to email users at the click of a button.'
      ]
    }
  ]
};

export default App;
