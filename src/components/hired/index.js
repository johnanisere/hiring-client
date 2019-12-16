import React, { useEffect } from 'react';
import './styles.css';
import Toggle from './Toggle';
import {
	useSelector,
	connect
} from 'react-redux';
import { getTotalDecadevs } from './hired.action';
import request from '../../request';

function App(props) {
	const { allDevs } = useSelector(
		({ hired }) => hired
	);

	useEffect(() => {
		props.getTotalDecadevs(request);
	}, [props]);

	return (
		<div className="table-container">
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Pod</th>
						<th>Squad</th>
						<th>Hired?</th>
						<th>Company</th>
					</tr>
				</thead>
				<tbody>
					{allDevs &&
						allDevs.map(dev => (
							<tr key={dev._id}>
								<td>{dev.name}</td>
								<td>{dev.pod}</td>
								<td>SQ002</td>
								<td>
									<Toggle
										email={dev.email}
										id={dev.id}
										initialState={dev.hired}
									/>
								</td>
								<td>Decagon</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
}

const mapDispatchToProps = {
	getTotalDecadevs
};

export default connect(
	null,
	mapDispatchToProps
)(App);
