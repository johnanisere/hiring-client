export const hiringPartnerMenuItems = [
	{
		Decadevs: [
			{ 'All Decadevs': '/dashboard' },
			'Decadevs Interviewed',
			'Decadevs Hired'
		]
	},
	{
		Feedback: [
			{
				Reschedules: '/dashboard/partner/feedback'
			}
		]
	},
	'Notification',
	'Settings'
];

export const adminMenuItems = [
	'Dashboard',
	'Recent Activity',
	{
		Interviews: [
			{
				'Scheduled Interviews':
					'/dashboard/interviews/scheduledinterviews'
			},
			{
				'Attended Interviews':
					'/dashboard/interviews/acceptedinterviews'
			},
			{
				'Declined Interviews':
					'/dashboard/interviews/declinedinterviews'
			}
		]
	},
	'Settings',
	'Announcements',
	{
		'User Management': [
			{
				'Invite Devs':
					'/dashboard/usermanagement/dev'
			},
			{
				Decadevs:
					'/dashboard/usermanagement/dev-settings'
			},
			{
				Admin: '/dashboard/usermanagement/admin'
			},
			{
				'Activate Hirers':
					'/dashboard/usermanagement/inactivehirers'
			},
			{
				'Hiring Partners':
					'/dashboard/usermanagement/hiringpartner'
			}
		]
	}
];
