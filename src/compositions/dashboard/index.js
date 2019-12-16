import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../../components/Layout';
import ProtectedRoute from '../../components/ProtectedRoute';
import Profile from '../../components/profile';
import { useSelector } from 'react-redux';

const Cards = lazy(() =>
	import('../../components/dashboard/Cards')
);
const InviteForm = lazy(() =>
	import('../../components/settings/InviteForm')
);
const ActivateHirer = lazy(() =>
	import('../../components/activateHirer')
);
const DisplayActiveHirers = lazy(() =>
	import(
		'../../components/activateHirer/DisplayActivatedHirers'
	)
);
const Shortlisted = lazy(() =>
	import('../../components/selected/Shortlisted')
);
const AllInterviews = lazy(() =>
	import(
		'../../components/interviewActivities/AllInterviews'
	)
);
const DeclinedInterviewsTable = lazy(() =>
	import(
		'../../components/interviewActivities/DeclinedInterviews'
	)
);
const AcceptedInterviewsTable = lazy(() =>
	import(
		'../../components/interviewActivities/AcceptedInterviews'
	)
);

const RemoveHired = lazy(() =>
	import('../../components/hired')
);

const FeedBack = lazy(() => import('../../components/feedback'))

export default function App({ match }) {
	const { role } = useSelector(
		({ user }) => user.data
	);
	return (
		<ProtectedRoute>
			{role === 'dev' ? (
				<Profile />
			) : (
				<Layout>
					<Switch>
						<Route
							exact
							path={`${match.path}`}
							component={Cards}
						/>
						<Route
							exact
							path={`${match.path}/partner/feedback`}
							component={FeedBack}
						/>
						<Route
							exact
							path={`${match.path}/usermanagement/dev`}
							component={InviteForm}
						/>
            <Route exact path={`${match.path}/usermanagement/dev-settings`} component={RemoveHired}/>
						<Route
							exact
							path={`${match.path}/usermanagement/inactivehirers`}
							component={ActivateHirer}
						/>
						<Route
							exact
							path={`${match.path}/usermanagement/hiringpartner`}
							component={DisplayActiveHirers}
						/>
						<Route
							exact
							path={`${match.path}/shortlisted`}
							component={Shortlisted}
						/>
						<Route
							exact
							path={`${match.path}/interviews/scheduledinterviews`}
							component={AllInterviews}
						/>
						<Route
							exact
							path={`${match.path}/interviews/declinedinterviews`}
							component={DeclinedInterviewsTable}
						/>
						<Route
							exact
							path={`${match.path}/interviews/acceptedinterviews`}
							component={AcceptedInterviewsTable}
						/>
						
					</Switch>
				</Layout>
			)}
		</ProtectedRoute>
	);
}
