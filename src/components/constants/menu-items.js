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
      'Scheduled Interviews',
      'Attended Interviews',
      'Declined Interviews'
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
