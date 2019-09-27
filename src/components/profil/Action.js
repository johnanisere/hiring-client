import React from "react";
import Profile from "./blocks";
import SelectCheck from "../selected/SelectCheck";

const App = ({ selected, dev }) => (
  <>
    <Profile
      bottom
      style={{
        width: "calc(100% - 50px)",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, .09)"
      }}
    >
      <Profile.Text
        style={{ marginRight: "10px" }}
        blue
        medium
        as="a"
        href={`/schedule-interview/${dev.email}`}
      >
        Schedule interview
      </Profile.Text>
      <Profile.Text style={{ marginRight: "10px" }} bold size2>
        OR
      </Profile.Text>
      <Profile.Text
        bold
        size6
        style={{ position: "relative", display: "flex", alignItems: "center" }}
      >
        <SelectCheck
          decadevObject={dev}
          selected={selected}
          style={{ position: "initial", marginRight: "5px" }}
        />
        Save for later
      </Profile.Text>
    </Profile>
  </>
);

export default App;