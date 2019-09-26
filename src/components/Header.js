import React from "react";
// import { useSelector } from "react-redux";
import { Box, Button } from "grommet";
import { Menu } from "grommet-icons";
import { Down } from "grommet-icons";

export default function Header(props) {
  // const { email } = useSelector(({ user }) => user.data);
  return (
    <Box
      gridArea="header"
      direction="row"
      align="center"
      justify="between"
      pad={{ horizontal: "medium", vertical: "small" }}
      background="dark-2"
    >
      <Button onClick={props.toggleSidebar}>
        <Menu size="medium" />
      </Button>

      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer"
        }}
      >
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt="profile"
          className="profile--photo"
        />
        <Down color="#fff" size="small" />
      </Box>
    </Box>
  );
}
