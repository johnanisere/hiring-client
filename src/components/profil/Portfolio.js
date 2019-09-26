import React from 'react';
import Profile from './blocks';
import PropTypes from 'prop-types';

const App = ({ portfolio, experience }) => (
  <>
    <Profile grid>
      <Profile fill bottom>
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
      <Profile fill bottom left right>
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
      <Profile fill bottom>
        <Profile.Text bold grey size3>
          EXPERIENCE
        </Profile.Text>
        <Profile.List nobullet>
          {experience.map(({ title, years }, key) => (
            <li key={key}>
              <Profile.Text bold black size3>
                {title},<span className="small"> {years} years</span>
              </Profile.Text>
            </li>
          ))}
        </Profile.List>
      </Profile>
    </Profile>
  </>
);

App.propTypes = {
  portfolio: PropTypes.array.isRequired
};

App.defaultProps = {
  portfolio: [
    {
      title: 'Rosetta Stone',
      languages: 'JavaScript, AngularJS, HTML, CSS, Bower, Grunt, Git',
      link: 'https://www.toptal.com/resume/april-leone#employment-101111'
    },
    {
      title: 'Livemocha',
      languages: 'JavaScript, HTML, CSS, SproutCore, WordPress',
      link: 'https://www.toptal.com/resume/april-leone#employment-101111'
    },
    {
      title: 'Starbucks',
      languages: 'Visual Studio, HTML, Sitecore',
      link: 'https://www.toptal.com/resume/april-leone#employment-101111'
    }
  ],
  experience: [
    {
      title: 'HTML',
      years: '16'
    },
    {
      title: 'CSS',
      years: '16'
    },
    {
      title: 'WordPress',
      years: '16'
    },
    {
      title: 'JavaScript',
      years: '16'
    },
    {
      title: 'Agile Software Development',
      years: '16'
    },
    {
      title: 'User Experience (UX)',
      years: '16'
    },
    {
      title: 'AngularJS',
      years: '16'
    }
  ]
};

export default App;
