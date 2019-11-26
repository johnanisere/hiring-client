import React, { useState } from "react";
import { useSelector } from "react-redux";

import Card from "../dashboard/Card";

import { Grommet, Grid, ResponsiveContext } from "grommet";

export default function Shortlisted(props) {
  
  const { selectedDecadevs } = useSelector(({ shortlisted }) => shortlisted);
  const shortlistedDevs = Object.values(selectedDecadevs);
  const [state, setState] = useState({
    open: false,
    pod: "All"
  });

  const onToggle = () => {
    setState({ ...state, open: !state.open });
  };

  return (
    <>
      <Grommet style={{ overflow: "scroll", minHeight: "100%" }}>
        <ResponsiveContext.Consumer>
          {size => (
            <Grid
              columns={
                size === "small"
                  ? ["1"]
                  : size === "medium"
                  ? ["1/2", "1/2"]
                  : size === "large"
                  ? ["1/4", "1/4", "1/4", "1/4"]
                  : ["1/4", "1/4", "1/4", "1/4"]
              }
            >
              {shortlistedDevs.map((dev, key) => (
                <Card
                  key={key}
                  dev={dev}
                  open={state.open}
                  onToggle={onToggle}
                />
              ))}
            </Grid>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    </>
  );
}
