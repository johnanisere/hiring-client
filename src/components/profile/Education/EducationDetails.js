import React, { useState } from "react";
import { Text, ResponsiveContext } from "grommet";
import { Book } from "grommet-icons";

import EducationEdit from "./EducationEdit";

function EducationDetails(props) {
  const [editing, setEditing] = useState(false);
  const { education, index, hidden, decadev } = props;

  function handleEdit() {
    setEditing(true);
  }
  return (
    <ResponsiveContext.Consumer>
      {size => (
        <div key={`a${index}`} style={{ padding: "20px" }}>
          <div style={{ display: "flex" }}>
            {size === "small" ? (
              hidden
            ) : (
              <div style={{ flex: "1 1 10%", marginRight: "40px" }}>
                <div
                  style={{
                    height: "auto",
                    width: "100%"
                  }}
                >
                  <Book
                    size="large"
                    color="#d0d2d3"
                    style={{
                      margin: "0 auto"
                    }}
                  />
                </div>
              </div>
            )}
            {editing && !hidden ? (
              <EducationEdit
                setEditing={setEditing}
                education={education}
                decadev={decadev}
              />
            ) : (
              <>
                <div
                  style={{
                    flex: "1 1 90%",
                    paddingLeft: "10px",
                    color: "#666"
                  }}
                >
                  <div style={{ fontSize: "20px" }}>
                    <Text style={{ fontWeight: "bold", paddingRight: "10%" }}>
                      {education.qualification}
                    </Text>
                    <Text style={{ marginLeft: "4px", fontWeight: "lighter" }}>
                      {education.duration}
                    </Text>
                  </div>
                  <div>
                    <div style={{ fontSize: "14px " }}>
                      {education.placeOfEducation}
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    padding: "6px 8px",
                    backgroundColor: "#dde2e7",
                    height: "10%",
                    borderRadius: "3px",
                    cursor: "pointer",
                    visibility: hidden ? "hidden" : "visible"
                  }}
                >
                  <span onClick={handleEdit}>Edit</span>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </ResponsiveContext.Consumer>
  );
}

export default React.memo(EducationDetails);
