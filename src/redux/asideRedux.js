/* selectors */
export const getMenuLinks = ({ aside }) => aside.navigation;
export const getMenuStatus = ({ aside }) => aside.show;
export const getUserData = ({ user: { username, persona } }) => ({
  username,
  persona,
});

/* action name creator */
const reducerName = 'aside';
const createActionName = (name) => `action/${reducerName}/${name}`;

/* action types */
const TOGGLE_MENU = createActionName('TOGGLE_MENU');

/* action creators */
export const toggleMenu = () => ({
  type: TOGGLE_MENU,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case TOGGLE_MENU: {
      return {
        ...statePart,
        show: !statePart.show,
      };
    }
    default:
      return statePart;
  }
}
