import React from 'react';
import Profile from './blocks';
import PropTypes from 'prop-types';

function App({ employments }) {
  return (
    <>
      <Profile bottom>
        <Profile.Text bold grey size3 defined spacingsonLG>
          EMPLOYMENT
        </Profile.Text>
        <Profile fill="true" noPad>
          {employments.length !== 0
            ? employments.map((employment, key) => (
                <Profile fill="true" noPad key={key}>
                  <Profile noPad spacebetween>
                    <Profile.Text medium blue size2>
                      {employment.title}
                    </Profile.Text>
                    <Profile.Text small grey size4 spacingsonSM>
                      {employment.duration}
                    </Profile.Text>
                  </Profile>
                  <Profile.Text small black size2 mt5>
                    {employment.location}
                  </Profile.Text>
                  <Profile.List>
                    {employments.length > 0
                      ? employment.achievements.map((achievement, key) => (
                          <li key={key}>
                            <Profile.Text small grey l20>
                              {achievement}
                            </Profile.Text>
                          </li>
                        ))
                      : null}
                  </Profile.List>
                </Profile>
              ))
            : null}
        </Profile>
      </Profile>
    </>
  );
}

App.propTypes = {
  employments: PropTypes.array
};

export default React.memo(App);
