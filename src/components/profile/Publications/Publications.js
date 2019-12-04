import React, { useState } from "react";
import { Box } from "grommet";

import PublicationDetails from "./PublicationDetails";
import AddNewPublication from "./AddNewPublication";

export default function Publications(props) {
  const { data } = props;
 

  const [hidden, setHidden] = useState(true);
  function handleVisibilityOfEdit() {
    setHidden(!hidden);
  }

  return (
    <section
      style={{
        width: "60%",
        margin: "auto",
        marginBottom: "10px"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px"
        }}
      >
        <div>Publications</div>
        <div
          style={{ fontSize: "15px", cursor: "pointer" }}
          onClick={handleVisibilityOfEdit}
        >
          {hidden ? "Edit" : "Done"}
        </div>
      </div>
      <Box style={{ border: "0.5px solid #d9dadc" }}>
        <div
          style={{
            padding: "20px",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <AddNewPublication decadev={data} />
        </div>
        {data.publications && data.publications.map((publication, index) => (
          <PublicationDetails
            publication={publication}
            index={index}
            hidden={hidden}
            decadev={data}
            key={`publication${index}`}
          />
        ))}
      </Box>
    </section>
  );
}
