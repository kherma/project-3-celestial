export const initialState = {
  app: {
    isLogged: false,
    navigation: [
      { text: 'explore', linkTo: '/explore', accessBy: 'user' },
      { text: 'discover', linkTo: '/discover', accessBy: 'admin' },
      { text: 'settings', linkTo: '/settings', accessBy: 'user' },
      { text: 'cart', linkTo: '/cart', accessBy: 'user' },
    ],
  },
};
