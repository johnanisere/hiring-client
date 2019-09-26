import React, { useState } from "react";
import { Box, Layer, Anchor } from "grommet";
import Profil from "../profil";

export default function MoreInfo(props) {
  const [open, setOpen] = useState(false);

  function onOpen() {
    return setOpen(true);
  }
  function onClose() {
    setOpen(undefined);
  }
  return (
    <Box
      align="center"
      justify="center"
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        cursor: "pointer"
      }}
      onClick={onOpen}
    >
      <Anchor label="" />
      {open && (
        <Layer
          pad="small"
          modal
          onClickOutside={onClose}
          onEsc={onClose}
          style={{ width: "100%", maxWidth: "1000px" }}
        >
          <Box
            pad="none"
            onSubmit={onClose}
            style={{ backgroundColor: "transparent", overflowY: "scroll" }}
          >
            <Profil />
          </Box>
        </Layer>
      )}
    </Box>
  );
}
