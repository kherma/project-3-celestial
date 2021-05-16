/* selectors */
export const getExtras = ({ extras }) => extras.data;

/* action name creator */
const reducerName = 'extras';
const createActionName = (name) => `action/${reducerName}/${name}`;

/* action types */
const ADD_TO_EXTRAS = createActionName('ADD_TO_EXTRAS');
const REMOVE_FROM_EXTRAS = createActionName('REMOVE_FROM_EXTRAS');
const SET_EXTRAS_DATA = createActionName('SET_EXTRAS_DATA');

/* action creators */
export const addToExtras = (payload) => ({
  payload,
  type: ADD_TO_EXTRAS,
});

export const removeFromExtras = (payload) => ({
  payload,
  type: REMOVE_FROM_EXTRAS,
});

export const setExtrasData = () => ({
  type: SET_EXTRAS_DATA,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_TO_EXTRAS: {
      const newExtras = [...statePart.data];
      newExtras.push(action.payload);
      localStorage.setItem('extras', JSON.stringify(newExtras));
      return {
        ...statePart,
        data: newExtras,
      };
    }
    case REMOVE_FROM_EXTRAS: {
      const newExtras = [...statePart.data];
      const index = newExtras.indexOf(action.payload);
      newExtras.splice(index, 1);
      localStorage.setItem('extras', JSON.stringify(newExtras));
      return {
        ...statePart,
        data: newExtras,
      };
    }
    case SET_EXTRAS_DATA: {
      const newExtras = JSON.parse(localStorage.getItem('extras'));
      return {
        ...statePart,
        data: newExtras,
      };
    }
    default:
      return statePart;
  }
}
