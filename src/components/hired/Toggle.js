import React, { useState } from 'react';
import { css } from 'styled-components';
import { connect } from 'react-redux';
import request from '../../request';
import hireDevBoundActionCreator from './hired.action';

import { Box, Grommet, CheckBox } from 'grommet';
import { deepMerge } from 'grommet/utils';



const checkboxCheckStyle = css`
	background-color: #2196f3;
	border-color: #2196f3;
`;

const customToggleTheme = {
	global: {
		colors: {
			'toggle-bg': '#757575',
			'toggle-knob': 'white',
			'toggle-accent': 'accent-2'
		}
	},
	checkBox: {
		border: {
			color: {
				light: 'toggle-bg'
			}
		},
		color: {
			light: 'toggle-knob'
		},
		check: {
			radius: '2px'
		},
		hover: {
			border: {
				color: undefined
			}
		},
		toggle: {
			background: { light: 'toggle-accent' },
			color: {
				light: 'toggle-knob'
			},
			size: '36px',
			knob: {
				extend: `
          top: -4px;
          box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.12),
           0px 2px 2px 0px rgba(0,0,0,0.24);
        `
			},
			extend: ({ checked }) => `
        height: 14px;
        ${checked && checkboxCheckStyle}
      `
		},
		gap: 'xsmall',
		size: '18px'
	}
};

const App = props => {
	const [checked, setChecked] = useState(props.initialState);

	return (
		<Grommet theme={deepMerge(customToggleTheme)}>
			<Box>
				<CheckBox
					{...props}
					label={
						checked
							? 'Yes'
							: 'No'
					}
					checked={checked}
					onChange={event => {
                        setChecked(event.target.checked);
                        props.toggleHired(request, {
                            email: props.email,
                            hired: !checked
                        });
                    }}
					toggle
				/>
			</Box>
		</Grommet>
	);
};

const mapDispatchToProps = {
	toggleHired: hireDevBoundActionCreator
};

export default connect(null, mapDispatchToProps)(App);
