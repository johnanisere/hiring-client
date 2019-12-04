import React from "react";
import Profile from "./blocks";
import PropTypes from "prop-types";
import { Github } from "grommet-icons/icons/Github";
import { Linkedin } from "grommet-icons/icons/Linkedin";
import { StackOverflow } from "grommet-icons/icons/StackOverflow";
import { Domain } from "grommet-icons/icons/Domain";

function App({
  profilePhoto,
  name,
  currentRole,
  stack,
  bio,
  github,
  linkedIn,
  stackOverflow,
  website
}) {
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
            {currentRole ? currentRole : "Software Developer at Decagon"} &bull;
          </Profile.Text>
          <br />
          <Profile.Text size5 small grey l20>
            {bio ? bio : ""}
          </Profile.Text>
          <Profile tags>
            {stack
              ? stack.map((skill, key) => (
                  <Profile.Tag key={key}>{skill}</Profile.Tag>
                ))
              : ""}
          </Profile>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "10px"
            }}
          >
            {github && (
              <a
                href={github}
                style={{ marginRight: "20px", display: "block" }}
              >
                <Github size="15px" style={{ cursor: "pointer" }} />
              </a>
            )}
            {linkedIn && (
              <a
                href={linkedIn}
                style={{ marginRight: "20px", display: "block" }}
              >
                <Linkedin size="15px" style={{ cursor: "pointer" }} />
              </a>
            )}
            {stackOverflow && (
              <a
                href={stackOverflow}
                style={{ marginRight: "20px", display: "block" }}
              >
                <StackOverflow size="15px" style={{ cursor: "pointer" }} />
              </a>
            )}
            {website && (
              <a
                href={website}
                style={{ marginRight: "20px", display: "block" }}
              >
                <Domain size="15px" style={{ cursor: "pointer" }} />
              </a>
            )}
          </div>
        </Profile>
      </Profile>
    </>
  );
}

App.propTypes = {
  profilePhoto: PropTypes.string,
  name: PropTypes.string,
  currentRole: PropTypes.string,
  bio: PropTypes.string,
  stack: PropTypes.array
};

export default React.memo(App);
