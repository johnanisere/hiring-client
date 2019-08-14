import React, { useState, useEffect } from "react";
import { getDetails } from "./getDetails";
import { Link } from "react-router-dom";
import { Heading, Text } from "grommet";

export default function Info() {
  const [values, setValues] = useState([]);

  useEffect(() => {
    const obj = getDetails();
    setValues(obj);
  }, []);

  return (
    <>
      <Heading level={3}>{values.name}</Heading>
      <Text>Software Developer</Text>
      <Heading level={4}>
        Resume:{" "}
        <Link to="/" className="nav-link" style={{ textDecoration: "none" }}>
          {values.resume}
        </Link>
      </Heading>
      <Heading level={3}>
        Contact Information
        <hr />
      </Heading>
      <Heading level={4}>Email: {values.email}</Heading>
      <Heading level={4}>Phone: {values.phone}</Heading>
      <Heading level={4}>
        GitHub Profile:{" "}
        <Link to="/" className="nav-link" style={{ textDecoration: "none" }}>
          {values.github}
        </Link>
      </Heading>
      <Heading level={4}>Squad: {values.squad}</Heading>
    </>
  );
}
