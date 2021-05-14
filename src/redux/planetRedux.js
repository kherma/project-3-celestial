/* selectors */
export const getData = (state) => {
  const {
    planet: { current },
  } = state;
  const {
    planets: { data },
  } = state;

  return data.find((data) => data.id === current);
};

/* action name creator */
const reducerName = 'planet';
const createActionName = (name) => `action/${reducerName}/${name}`;

/* action types */
const SET_CURRENT = createActionName('SET_CURRENT');

/* action creators */
export const setCurrent = (payload) => ({
  payload,
  type: SET_CURRENT,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_CURRENT: {
      return {
        ...statePart,
        current: action.payload,
      };
    }
    default:
      return statePart;
  }
}
