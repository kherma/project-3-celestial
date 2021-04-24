/* selectors */
export const getLoginStatus = ({ app }) => app.isLogged;
export const getNavLinks = ({ app }) => app.navigation;

/* action name creator */
const reducerName = 'app';
const createActionName = (name) => `action/${reducerName}/${name}`;

/* action types */
const USER_STATUS_UPDATE = createActionName('USER_STATUS_UPDATE');

/* action creators */
export const changeUserStatus = (payload) => ({
  payload,
  type: USER_STATUS_UPDATE,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case USER_STATUS_UPDATE: {
      return {
        ...statePart,
        isLogged: !statePart.isLogged,
      };
    }
    default:
      return statePart;
  }
}
