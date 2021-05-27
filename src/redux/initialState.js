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
  planets: {
    currentPage: 1,
    resultsPerPage: 24,
    data: [],
    loading: {
      active: false,
      error: false,
    },
  },
  planet: {
    data: {},
    loading: {
      active: false,
      error: false,
    },
  },
  discover: {
    data: {},
    loading: {
      active: false,
      error: false,
    },
  },
  cart: {
    cartLimit: 10,
    data: [],
  },
  extras: {
    tshirtBase: 1,
    data: [],
  },
  order: {
    description: '',
    deliveryPrice: 0,
    loading: {
      processed: false,
      error: false,
    },
  },
  modal: {
    show: false,
    message: '',
  },
  user: {
    username: 'username',
    persona: true,
  },
};
