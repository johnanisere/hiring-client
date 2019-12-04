import React, { useState } from "react";
import { Heading } from "grommet/components/Heading";
import { connect, useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";

import EducationForm from "./EducationForm";
import updateUserDetailBoundActionCreator from "../actions/updateDetails.action";
import request from "../../../request";

function EducationEdit(props) {
  const { loading } = useSelector(({ user }) => user);
  const { error } = useSelector(({ error }) => error);
  const { setEditing, education, decadev } = props;
  const { token, email } = decadev;
  const { qualification, placeOfEducation, startDate, endDate } = education;
  const [values, setValues] = useState({
    qualification: qualification || "",
    placeOfEducation: placeOfEducation || "",
    startDate: startDate || "",
    endDate: endDate || ""
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  function handleCancel() {
    setEditing(false);
  }
  function handleSave() {
    setEditing(false);
  }

  let paper;

  async function handleSubmit(e) {
    e.preventDefault();
    const routeName = "educationInfo";

    if (values.startDate !== "" && values.endDate !== "") {
      paper = {
        id: education._id,
        qualification: values.qualification,
        placeOfEducation: values.placeOfEducation,
        duration: `${values.startDate} - ${values.endDate}`
      };
    } else {
      paper = {
        id: education._id,
        qualification: values.qualification,
        placeOfEducation: values.placeOfEducation
      };
    }
    props.onUpdateDetails(paper, email, request, token, routeName);
    handleSave();
    setValues({
      qualification: "",
      placeOfEducation: "",
      startDate: "",
      endDate: ""
    });
  }
  async function handleDelete(e) {
    e.preventDefault();
    const routeName = "delete-education";
    props.onUpdateDetails(paper, email, request, token, routeName);
    handleSave();
  }

  return (
    <div
      style={{
        flex: "1 1 90%",
        height: "auto",
        padding: "10px",
        color: "#666",
        background: "#f9f9fa"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Heading level={5}>EDUCATION</Heading>

        <div style={{ display: "flex" }}>
          <div onClick={handleCancel} style={{ cursor: "pointer" }}>
            Cancel
          </div>
          <div
            onClick={handleSubmit}
            style={{ marginLeft: "10px", cursor: "pointer" }}
          >
            {loading ? <BeatLoader size={5} color="black" /> : "Save"}
          </div>
          <div
            onClick={handleDelete}
            style={{ marginLeft: "10px", cursor: "pointer" }}
          >
            {loading ? <BeatLoader size={5} color="black" /> : "Delete"}
          </div>
        </div>
      </div>
      <EducationForm values={values} handleChange={handleChange} error={error} />
    </div>
  );
}

const mapDispatchToProps = {
  onUpdateDetails: updateUserDetailBoundActionCreator
};
export default connect(null, mapDispatchToProps)(EducationEdit);
