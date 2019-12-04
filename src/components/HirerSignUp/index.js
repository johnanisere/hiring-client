import React, { useState } from "react";
import FormBio from "./MultistepForm/FormBio";
import FormConfirm from "./MultistepForm/FormConfirm";
import FormOrgData from "./MultistepForm/FormOrgData";
import FormTalentsInfo from "./MultistepForm/FormTalentsInfo";
import FormPassword from "./MultistepForm/FormPassword";
import Success from "./MultistepForm/Success";

function HirerSignUp() {
  const [values, setValues] = useState({
    step: 1,
    email: "",
    password: "",
    name: "",
    phone: "",
    companyURL: "",
    nameOfOrg: "",
    designation: "",
    numberOfTalentsRequired: "",
    deadline: "",
    industry: ""
  });
  const { step } = values;

  // Proceed to next step
  const nextStep = () => {
    setValues({
      ...values,
      step: step + 1
    });
  };

  // Go back to prev step
  const prevStep = () => {
    setValues({
      ...values,
      step: step - 1
    });
  };
  const handleChange = ({ target: { name, value } }) => {
    setValues({ ...values, [name]: value });
  };

  switch (step) {
    case 1:
      return (
        <FormBio
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 2:
      return (
        <FormOrgData
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 3:
      return (
        <FormTalentsInfo
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 4:
      return (
        <FormPassword
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 5:
      return (
        <FormConfirm nextStep={nextStep} prevStep={prevStep} values={values} />
      );
    case 6:
      return <Success />;
    default:
      return (
        <FormBio
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );
  }
}

export default React.memo(HirerSignUp);
