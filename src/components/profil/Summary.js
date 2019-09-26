import React from "react";
import Profile from "./blocks";
import PropTypes from "prop-types";

const App = ({ image, name, role, description, skills }) => (
  <>
    <Profile bottom>
      <Profile.Image src={image} alt={`${name}'s picture`} />
      <Profile fill noPad>
        <Profile.Text size1 medium blue>
          {name}
        </Profile.Text>
        <br />
        <Profile.Text size5 medium black>
          {role} &bull;
        </Profile.Text>
        <br />
        <Profile.Text size5 small grey l20>
          {description}
        </Profile.Text>
        <Profile tags>
          {skills.map((skill, key) => (
            <Profile.Tag key={key}>{skill}</Profile.Tag>
          ))}
        </Profile>
      </Profile>
    </Profile>
  </>
);

App.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

App.defaultProps = {
  image:
    "https://uploads.toptal.io/user/photo/187971/large_03757b059dc06053c2884ebe2578abe1.jpeg",
  name: "April Leone",
  role: "JavaScript Developer in Seattle, WA, United States",
  joined: "Member since August 21, 2015",
  skills: [
    "css",
    "Agile Software Development",
    "WordPress",
    "Sass",
    "User Experience(UX)",
    "Javascript",
    "Angularjs"
  ],
  description:
    "April is a senior front-end web developer with over 15 years of experience at companies like Starbucks, Rosetta Stone, and Livemocha. She specializes in building front-ends for JavaScript web applications and has a deep expertise in the nuances of cross-platform development."
};

export default App;
