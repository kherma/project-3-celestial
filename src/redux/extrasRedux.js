/* selectors */
export const getExtras = ({ extras }) => extras.data;
export const getBasePrice = ({ extras }) => extras.tshirtBase;

/* action name creator */
const reducerName = 'extras';
const createActionName = (name) => `action/${reducerName}/${name}`;

/* action types */
const ADD_TO_EXTRAS = createActionName('ADD_TO_EXTRAS');
const REMOVE_FROM_EXTRAS = createActionName('REMOVE_FROM_EXTRAS');
const SET_EXTRAS_DATA = createActionName('SET_EXTRAS_DATA');
const SAVE_EXTRAS_CHANGES = createActionName('SAVE_EXTRAS_CHANGES');

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

export const saveExtrasChanges = (payload) => ({
  payload,
  type: SAVE_EXTRAS_CHANGES,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_TO_EXTRAS: {
      const newExtras = [...statePart.data];
      const index = newExtras.findIndex(
        ({ planetID, color, size }) =>
          planetID === action.payload.planetID &&
          color === action.payload.color &&
          size === action.payload.size
      );

      if (index !== -1) {
        newExtras[index].qunatity += action.payload.qunatity;
        newExtras[index].price += action.payload.price;
      }
      if (index === -1) {
        newExtras.push(action.payload);
      }

      localStorage.setItem('extras', JSON.stringify(newExtras));
      return {
        ...statePart,
        data: newExtras,
      };
    }
    case REMOVE_FROM_EXTRAS: {
      const newExtras = [...statePart.data];
      const index = newExtras.findIndex(({ id }) => id === action.payload);
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
    case SAVE_EXTRAS_CHANGES: {
      const { tshirtBase } = statePart;
      const newExtras = [...statePart.data];
      const index = newExtras.findIndex(({ id }) => id === action.payload.id);
      newExtras[index] = {
        ...action.payload,
        price: action.payload.qunatity * tshirtBase,
      };
      localStorage.setItem('extras', JSON.stringify(newExtras));
      return {
        ...statePart,
        data: newExtras,
      };
    }
    default:
      return statePart;
  }
}
