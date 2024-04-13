export const menus = [
  {
    label: 'Home',
  },
  {
    label: 'Profile',
    children: [
      {
        label: 'Details',

        children: [
          {
            label: 'Location',

            children: [
              {
                label: 'City',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'Settings',

    children: [
      {
        label: 'Account',
      },
      {
        label: 'Security',

        children: [
          {
            label: 'Login',
          },
          {
            label: 'Register',

            children: [
              {
                label: 'Random data',
              },
            ],
          },
        ],
      },
    ],
  },
]

export default menus
