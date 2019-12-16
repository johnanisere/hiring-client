import React from 'react';
import {Button} from 'grommet/components/Button'

function SignupButton(props) {
	return (
		<Button
        type="submit"
			primary
			width="large"
			color="dark-1"
			label={props.label}
			style={{
				width: '100%',
				margin: '20px 5px',
				borderRadius: '2px'
			}}

			  onClick={props.onClick}
		/>
	);
}

export default SignupButton;
