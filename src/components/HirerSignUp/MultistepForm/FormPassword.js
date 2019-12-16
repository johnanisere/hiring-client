import React from 'react';
import { Hide, View } from 'grommet-icons';
import Formlayout from '../../FormLayout';
import SignupButton from '../SignupButton';

import {
	Box,
	TextInput,
	Button,
	Text,
	Form
} from 'grommet';

const FormPassword = props => {
	const [reveal, setReveal] = React.useState(
		false
	);

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

				<Box width="large">
					<Form onSubmit={continueToNext}>
						<Box
							margin={{
								bottom: '20px'
							}}
						>
							<Text>Password</Text>
						</Box>
						<Box
							width="medium"
							direction="row"
							align="center"
							round="small"
							border
						>
							<TextInput
								id="password"
								plain
								label="Password"
								name="password"
								type={
									reveal ? 'text' : 'password'
								}
								value={values.password}
								onChange={handleChange}
							/>
							<Button
								icon={
									reveal ? (
										<View size="medium" />
									) : (
										<Hide size="medium" />
									)
								}
								onClick={() => setReveal(!reveal)}
							/>
						</Box>

						<Box
							direction="row"
							justify="between"
							margin={{ top: 'medium' }}
						>
							<SignupButton
								label="Back"
								onClick={back}
							/>
							<SignupButton label="Continue" />
						</Box>
					</Form>
				</Box>
			</Box>
		</Formlayout>
	);
};

export default FormPassword;
