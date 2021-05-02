import { v4 as uuidv4 } from 'uuid';

export const initialState = {
  aside: {
    navigation: [
      { text: 'dashboard', linkTo: '/dashboard', id: uuidv4() },
      { text: 'explore', linkTo: '/explore', id: uuidv4() },
      { text: 'discover', linkTo: '/discover', id: uuidv4() },
      { text: 'persona', linkTo: '/settings', id: uuidv4() },
    ],
    show: false,
  },
  user: {
    username: '',
    persona: false,
  },
};
