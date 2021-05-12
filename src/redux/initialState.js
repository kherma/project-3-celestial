import { v4 as uuidv4 } from 'uuid';

// *MOVE DATA TO DB
import Planet from '../utils/seed';

const planetData = [...Array(162)].map((item) => {
  const planetData = new Planet();
  planetData.generatePlanet();
  const { data, styles } = planetData;
  return { data, styles, id: uuidv4() };
});
// =================================================

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
    resultsPerPage: 25,
    data: planetData,
    loading: {
      active: true,
      error: false,
    },
  },
  user: {
    username: '',
    persona: false,
  },
};
