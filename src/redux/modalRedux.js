/* selectors */
export const getData = ({ modal: { show, message } }) => ({
  show,
  message,
});

/* action name creator */
const reducerName = 'modal';
const createActionName = (name) => `action/${reducerName}/${name}`;

/* action types */
const SET_MODAL = createActionName('SET_MODAL');

/* action creators */
export const setModal = (payload) => ({
  payload,
  type: SET_MODAL,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_MODAL: {
      const { show, message } = action.payload;
      return {
        ...statePart,
        show: show,
        message: message,
      };
    }
    default:
      return statePart;
  }
}
