import React, { useState } from 'react';
import { useSelector } from 'react-redux';


import FormBio from './MultistepForm/FormBio';
import FormConfirm from './MultistepForm/FormConfirm';
import FormOrgData from './MultistepForm/FormOrgData';
import FormTalentsInfo from './MultistepForm/FormTalentsInfo';
import FormInterestedLanguages from './MultistepForm/FormInterestedLanguages';
import FormPassword from './MultistepForm/FormPassword';
import Success from './MultistepForm/Success';

function HirerSignUp() {
  const { loading } = useSelector(({ user }) => user);
	const [values, setValues] = useState({
		step: 1,
		email: '',
		password: '',
		name: '',
		phone: '',
		companyURL: '',
		nameOfOrg: '',
		designation: '',
		numberOfTalentsRequired: '',
		deadline: '',
		industry: '',
		interestLanguage: []
  });
  
  const [checked, setChecked] = useState([]);
  const checkboxes = [
		'Java',
		'C#',
		'Android',
		'NodeJS',
		'Python'
	];

  const onCheckAll = event => {
		if (event.target.checked) {
			setChecked(checkboxes);
		} else {
			setChecked([]);
		}
	};

	const onCheck = (event, value) => {
		if (event.target.checked) {
			setChecked([...checked, value]);
		} else {
			setChecked(
				checked.filter(item => item !== value)
			);
		}
	};
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
	const handleChange = ({
		target: { name, value }
	}) => {
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
				<FormInterestedLanguages
					nextStep={nextStep}
					prevStep={prevStep}
          onCheck={onCheck}
          onCheckAll ={onCheckAll}
          checkboxes = {checkboxes}
          checked ={checked}
				/>
			);

		case 4:
			return (
				<FormTalentsInfo
					nextStep={nextStep}
					prevStep={prevStep}
					handleChange={handleChange}
					values={values}
				/>
			);
		case 5:
			return (
				<FormPassword
					nextStep={nextStep}
					prevStep={prevStep}
					handleChange={handleChange}
					values={values}
				/>
			);
		case 6:
			return (
				<FormConfirm
					nextStep={nextStep}
					prevStep={prevStep}
          values={values}
          interestLanguage={checked}
				/>
			);
		case 7:
			return !loading && <Success />;
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
