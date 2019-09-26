import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import { Button } from "grommet";

export default function Finalize(props) {
  const [state, setState] = useState(false);
  const handleClick = () => setState(true);

  if (state) {
    return <Redirect to="/dashboard/shortlisted" />;
  }

  return (
    <Button
      primary
      label="Finalize"
      onClick={handleClick}
      color="dark-1"
      style={{ borderRadius: "5px" }}
    />
  );
}
