import React from 'react';
import { Box, Text } from 'grommet';
import MultipleChoices from '../../radio-button/RadioButton';
import Formlayout from '../../FormLayout';
import SignupButton from '../SignupButton';

function FormTalentsInfo(props) {
	const continueToNext = e => {
		e.preventDefault();
		props.nextStep();
	};

	const back = e => {
		e.preventDefault();
		props.prevStep();
	};

	const { values, handleChange } = props;

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
					<MultipleChoices
						question="Number of talents required"
						choices={[
							'1-5',
							'6-10',
							'11-20',
							'21 and above'
						]}
						changed={handleChange}
						name="numberOfTalentsRequired"
						random={
							values.numberOfTalentsRequired
						}
					/>
					<MultipleChoices
						question="How soon do you wish to onboard?"
						choices={[
							'Within 1 Month',
							'Within 2-3 Months',
							'It depends',
							"Let's Talk First"
						]}
						name="deadline"
						changed={handleChange}
						random={values.deadline}
					/>
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
							label={'Continue'}
							onClick={continueToNext}
						/>
					</Box>
				</Box>
			</Box>
		</Formlayout>
	);
}
export default React.memo(FormTalentsInfo);
