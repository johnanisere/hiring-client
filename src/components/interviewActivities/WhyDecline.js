import React, { useState } from 'react';
import {
	Box,
	Button,
	RadioButtonGroup
} from 'grommet';

import { BeatLoader } from 'react-spinners';
import request from '../../request';
import {
	connect,
	useSelector
} from 'react-redux';
import FormError from '../formError';
import Formlayout from '../FormLayout';
import whyDecline from './decline.action';
import SuccessNotification from '../toasters/SuccessNotification';

function WhyDecline(props) {
	const { loading } = useSelector(
		({ interviews }) => interviews
	);
	const { error } = useSelector(
		({ error }) => error
	);

	const [success, onSuccess] = useState('');
	const handleSuccess = val => {
		onSuccess(val);
	};

	const [value, setValue] = useState('');


	const handleSubmit = e => {
		e.preventDefault();
		props.whyDecline(
			request,
			{
				declineReason: value,
				interviewId: props.interviewId
			},
			handleSuccess
		);
	};
	const closeToaster = () => onSuccess('');

	return (
		<>
			{success && (
				<SuccessNotification
					message={success}
					onClose={closeToaster}
				/>
			)}

			<Formlayout>
				<FormError error={error} />
				<Box align="center">
					<h4>
						Please provide a reason for reschedule
					</h4>
					<RadioButtonGroup
						name="radio"
						options={[
							{
								label: 'Time Conflict',
								value: 'Time Conflict'
							},
							{
								label: 'Health Challenge',
								value: 'Health Challenge'
							}
						]}
						value={value}
						onChange={event =>
							setValue(event.target.value)
						}
						{...props}
					/>
					<Box
						direction="row"
						justify="between"
						margin={{ top: 'medium' }}
					>
						<Button
							primary
							width="large"
							color="dark-1"
							label={
								loading ? (
									<BeatLoader
										color="#fff"
										size={5}
									/>
								) : (
									'submit'
								)
							}
							style={{
								width: '100%',
								margin: '20px 0'
							}}
							type="submit"
							onClick={handleSubmit}
						/>
					</Box>
				</Box>
			</Formlayout>
		</>
	);
}

const mapDispatchToProps = {
	whyDecline
};

export default connect(
	null,
	mapDispatchToProps
)(React.memo(WhyDecline));
