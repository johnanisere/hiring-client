import React from "react";
import { Heading } from "grommet";


const skills = ["UI/UX, SQL, Java, JavaScript, TypeScript, React, MongoDB"];

export default function Skills() {
  return (
    <>
      <Heading level={3} style={{ marginLeft: "15px" }}>
        Skills <hr />
      </Heading>
      {skills.map((value, i) => (
        <Heading
          level={4}
          key={i}
          style={{ marginTop: "-15px", marginLeft: "15px" }}
        >
          {value}
        </Heading>
      ))}
    </>
  );
}
