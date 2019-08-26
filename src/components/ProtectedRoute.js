import React from "react";

import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const App = props => {
  const { token } = useSelector(({ authentication }) => authentication);

  return (
    <>
      {!!!token && <Redirect to="/login" />}
      {props.children}
    </>
  );
};

export default App;
