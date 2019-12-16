import React, {
	useState,
	useEffect
} from 'react';
import { Form } from 'grommet/components/Form';
import { ResponsiveContext } from 'grommet';
import { Box } from 'grommet/components/Box';
import { Heading } from 'grommet/components/Heading';
import {
	connect,
	useSelector
} from 'react-redux';
import { BeatLoader } from 'react-spinners';
import request from 'superagent';
import { FormClose, Save } from 'grommet-icons';

import Stack from './Stack';

import updateUserDetailBoundActionCreator from '../actions/updateDetails.action';
import FormError from '../../formError';
import instance from '../../../request';

function PhotoForm(props) {
	const { loading } = useSelector(
		({ user }) => user
	);
	const { error } = useSelector(
		({ error }) => error
	);


	const { decadev, setIsEditing } = props;
	const { token, email } = decadev;
	const [stack, setStack] = useState(
		decadev.stack || []
	);
	function handleCancel() {
		return setIsEditing(false);
	}
	function handleSave() {
		return setIsEditing(false);
	}

	const [values, setValues] = useState({
		name: decadev.name || '',
		location: decadev.location || '',
		profilePhoto: decadev.profilePhoto || '',
		bio: decadev.bio || '',
		github: decadev.github || '',
		linkedIn: decadev.linkedIn || '',
		stackOverflow: decadev.stackOverflow || '',
		website: decadev.website || ''
	});

	const {
		name,
		location,
		bio,
		github,
		linkedIn,
		stackOverflow,
		website
	} = values;
	const type = 'userInfo';
	const handleChange = e => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	const handleImageChange = e => {
		const url =
			'https://api.cloudinary.com/v1_1/decagon/upload';
		const { name, files } = e.target;

		request
			.post(url)
			.field('upload_preset', 'default_preset')
			.field('file', files[0])
			.on('progress', progress =>
				console.log({ progress })
			)
			.end((error, response) => {
				setValues({
					...values,
					[name]: response.body.secure_url
				});
			});
  };

	async function handleSubmit(e) {
		e.preventDefault();
		await props.onUpdateDetails(
			{ ...values, stack },
			email,
			instance,
			token,
      type,
      handleSave
		);
	}

	useEffect(() => {
		return () => {
			setIsEditing(false);
		};
	}, [setIsEditing]);

	return (
		<ResponsiveContext.Consumer>
			{size => (
				<>
					<div
						style={{
							width: '60%',
							margin: 'auto',
							alignItems: 'center',
							background: '#f9f9fa',
							height: 'auto',
							padding: '10px'
						}}
					>
						<div
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								borderBottom: '1px solid #e7e9eb',
								marginBottom: '20px'
							}}
						>
							<Heading
								level={2}
								pad="small"
								style={{ fontWeight: 'lighter' }}
							>
								{decadev.name}
							</Heading>

							<div
								style={{ display: 'flex' }}
								className="action"
							>
								<div
									onClick={e => handleSubmit(e)}
									style={{
										cursor: 'pointer'
									}}
								>
									{loading ? (
										<BeatLoader
											size={5}
											color="black"
										/>
									) : (
										<Save />
									)}
								</div>
								<div
									onClick={handleCancel}
									style={{
										cursor: 'pointer',
										marginLeft: '10px'
									}}
								>
									<FormClose />
								</div>
							</div>
						</div>
						<Form
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								flexDirection:
									size === 'small' ? 'column' : ''
							}}
						>
							<FormError error={error} />
							<Box
								style={{
									width:
										size === 'small'
											? '100%'
											: '50%'
								}}
							>
								<Heading
									level={5}
									style={{ margin: '10px' }}
								>
									Basics
								</Heading>
								<div
									style={{
										display: 'flex',
										margin: '10px',
										alignItems: 'center'
									}}
								>
									<label
										htmlFor="name"
										style={{
											flex: '1 1 20%',
											paddingRight: '10px',
											fontSize: '15px',
											fontWeight: 'lighter'
										}}
									>
										Name
									</label>

									<input
										style={{
											flex: '1 1 80%',
											padding: '3%'
										}}
										name="name"
										placeholder="type here"
										value={name}
										onChange={handleChange}
										required
									/>
								</div>

								<div
									style={{
										display: 'flex',
										margin: '10px',
										alignItems: 'center'
									}}
								>
									<label
										htmlFor="photoURL"
										style={{
											flex: '1 1 20%',
											paddingRight: '10px',
											fontSize: '15px',
											fontWeight: 'lighter'
										}}
									>
										Photo URL
									</label>
									<input
										type="file"
										onChange={handleImageChange}
										name="profilePhoto"
									/>
								</div>

								<div
									style={{
										display: 'flex',
										margin: '10px',
										alignItems: 'center'
									}}
								>
									<label
										htmlFor="location"
										style={{
											flex: '1 1 20%',
											paddingRight: '10px',
											fontSize: '15px',
											fontWeight: 'lighter'
										}}
									>
										Location
									</label>

									<input
										style={{
											flex: '1 1 80%',
											padding: '3%'
										}}
										name="location"
										placeholder="type here"
										value={location}
                    onChange={handleChange}
                    required
									/>
								</div>
								<div
									style={{
										display: 'flex',
										margin: '10px',
										alignItems: 'center'
									}}
								>
									<label
										htmlFor="bio"
										style={{
											flex: '1 1 20%',
											paddingRight: '10px',
											fontSize: '15px',
											fontWeight: 'lighter'
										}}
									>
										Short Bio
									</label>

									<textarea
										style={{
											flex: '1 1 100%',
											padding: '3%',
											margin: '5%'
										}}
										name="bio"
										placeholder="type here"
										value={bio}
                    onChange={handleChange}
                    required
									/>
								</div>
								<Stack
									checks={stack}
									setChecks={setStack}
								/>
							</Box>
							<Box
								style={{
									width:
										size === 'small'
											? '100%'
											: '50%'
								}}
							>
								<Heading
									level={5}
									style={{ margin: '10px' }}
								>
									Links
								</Heading>
								<div
									style={{
										display: 'flex',
										margin: '10px',
										alignItems: 'center'
									}}
								>
									<label
										htmlFor="github"
										style={{
											flex: '1 1 20%',
											paddingRight: '10px',
											fontSize: '15px',
											fontWeight: 'lighter'
										}}
									>
										GitHub
									</label>

									<input
										style={{
											flex: '1 1 80%',
											padding: '3%'
										}}
										name="github"
										placeholder="type here"
										value={github}
                    onChange={handleChange}
                    required
									/>
								</div>
								<div
									style={{
										display: 'flex',
										margin: '10px',
										alignItems: 'center'
									}}
								>
									<label
										htmlFor="linkedIn"
										style={{
											flex: '1 1 20%',
											paddingRight: '10px',
											fontSize: '15px',
											fontWeight: 'lighter'
										}}
									>
										LinkedIn
									</label>

									<input
										style={{
											flex: '1 1 80%',
											padding: '3%'
										}}
										name="linkedIn"
										placeholder="type here"
										value={linkedIn}
                    onChange={handleChange}
                    required
									/>
								</div>
								<div
									style={{
										display: 'flex',
										margin: '10px',
										alignItems: 'center'
									}}
								>
									<label
										htmlFor="stackOverflow"
										style={{
											flex: '1 1 20%',
											paddingRight: '10px',
											fontSize: '15px',
											fontWeight: 'lighter'
										}}
									>
										Stack Overflow
									</label>

									<input
										style={{
											flex: '1 1 80%',
											padding: '3%'
										}}
										name="stackOverflow"
										placeholder="type here"
										value={stackOverflow}
                    onChange={handleChange}
                    required
									/>
								</div>
								<div
									style={{
										display: 'flex',
										margin: '10px',
										alignItems: 'center'
									}}
								>
									<label
										htmlFor="website"
										style={{
											flex: '1 1 20%',
											paddingRight: '10px',
											fontSize: '15px',
											fontWeight: 'lighter'
										}}
									>
										Website
									</label>

									<input
										style={{
											flex: '1 1 80%',
											padding: '3%'
										}}
										name="website"
										placeholder="type here"
										value={website}
                    onChange={handleChange}
                    required
									/>
								</div>
							</Box>
						</Form>
					</div>
				</>
			)}
		</ResponsiveContext.Consumer>
	);
}

const mapDispatchToProps = {
	onUpdateDetails: updateUserDetailBoundActionCreator
};
export default connect(
	null,
	mapDispatchToProps
)(PhotoForm);
