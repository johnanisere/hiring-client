import React from 'react';
import MoreInfo from './MoreInfo';
import SelectCheck from '../selected/SelectCheck';
import { useSelector } from 'react-redux';

import { Box, Text, Image } from 'grommet';

const App = props => {
	const { dev, onToggle, open } = props;
	const { selectedDecadevs } = useSelector(
		({ shortlisted }) => shortlisted
	);
	const selected = !!selectedDecadevs[dev.email];

	return (
		<>
			<Box
				className="dev"
				key={dev._id}
				align="center"
				background={{
					color: 'light-2',
					opacity: 'strong',
					borderRadius: '0'
				}}
				gap="small"
				margin="medium"
				animation={['fadeIn']}
				style={{
					position: 'relative',
					minHeight: '561px'
				}}
			>
				<Image
					style={{
						width: '100%',
						height: 'auto',
						borderRadius: '0',
						objectFit: 'cover'
					}}
					fit="cover"
					src={dev.profilePhoto}
				/>

				<Text>{dev.name}</Text>
				<Text
					size="small"
					style={{ color: 'rgb(169, 169, 169)' }}
				>
					{dev.pod === 'c'
						? 'C#'
						: dev.pod.toUpperCase()}
				</Text>

				<MoreInfo
					email={dev.email}
					profilePhoto={dev.profilePhoto}
					phone={dev.phone}
					cv={dev.cv}
					bio={dev.bio}
					name={dev.name}
					open={open}
					onToggle={onToggle}
					dev={dev}
					selected={selected}
				/>
				<SelectCheck
					decadevObject={dev}
					selected={selected}
				/>
			</Box>
		</>
	);
};
export default App;
