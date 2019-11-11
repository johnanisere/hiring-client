export const hiringPartnerMenuItems = [
  { Decadevs: ['All Decadevs', 'Decadevs Interviewed', 'Decadevs Hired'] },
  'Feedback',
  'Notification',
  'Settings'
];

export const adminMenuItems = [
  'Dashboard',
  'Recent Activity',
  {
    Interviews: [
      {
        'Scheduled Interviews': '/dashboard/interviews/scheduledinterviews'
      },
      {
        'Attended Interviews': '/dashboard/interviews/acceptedinterviews'
      },
      {
        'Declined Interviews': '/dashboard/interviews/declinedinterviews'
      }
    ]
  },
  'Settings',
  'Announcements',
  {
    'User Management': [
      { Decadevs: '/dashboard/usermanagement/dev' },
      { HiringPartners: '/dashboard/usermanagement/hiringpartner' },
      { Admin: '/dashboard/usermanagement/admin' }
    ]
  }
];
