import React from 'react';

import { Box, CheckBox, Text } from 'grommet';
import SignupButton from '../SignupButton';

import Formlayout from '../../FormLayout';

const InterestedLanguages = props => {
	const {
		nextStep,
		prevStep,
		onCheck,
		onCheckAll,
		checkboxes,
		checked
	} = props;

	const continueToNext = e => {
		e.preventDefault();
		nextStep();
	};

	const back = e => {
		e.preventDefault();
		prevStep();
	};

	return (
		<Formlayout>
			<Box
				fill
				align="center"
				justify="center"
				width="100%"
			>
				<Text
					width="auto"
					size="large"
					margin="small"
					style={{
						fontWeight: 'bold',
						fontSize: '25px'
					}}
				>
					Get In Touch
				</Text>
				<Box
					align="start"
					justify="start"
					width="100%"
				>
					<CheckBox
						checked={
							checked.length === 5
						}
						indeterminate={
							
							checked.length > 0 &&
							checked.length < 5
						}
						label="All"
						onChange={onCheckAll}
					/>
					{checkboxes.map(item => (
						<CheckBox
							key={item}
							checked={checked.includes(item)}
							label={item}
							onChange={e => onCheck(e, item)}
						/>
					))}
				</Box>
				<Box width="large">
					<Box
						direction="row"
						justify="between"
						margin={{ top: 'medium' }}
					>
						<SignupButton
							label="Back"
							onClick={back}
						/>
						<SignupButton
							label="Continue"
							onClick={continueToNext}
						/>
					</Box>
				</Box>
			</Box>
		</Formlayout>
	);
};

export default InterestedLanguages;
