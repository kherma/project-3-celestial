/* selectors */
export const getCart = ({ cart }) => cart.data;
export const getLimit = ({ cart }) => cart.cartLimit;

/* action name creator */
const reducerName = 'cart';
const createActionName = (name) => `action/${reducerName}/${name}`;

/* action types */
const ADD_TO_CART = createActionName('ADD_TO_CART');
const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');

/* action creators */
export const addToCart = (payload) => ({
  payload,
  type: ADD_TO_CART,
});

export const removeFromCart = (payload) => ({
  payload,
  type: REMOVE_FROM_CART,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_TO_CART: {
      const limit = statePart.cartLimit;
      const newCart = [...statePart.data];
      newCart.length < limit && newCart.push(action.payload);
      return {
        ...statePart,
        data: newCart,
      };
    }
    case REMOVE_FROM_CART: {
      const newCart = [...statePart.data];
      const index = newCart.indexOf(action.payload);
      newCart.splice(index, 1);
      return {
        ...statePart,
        data: newCart,
      };
    }
    default:
      return statePart;
  }
}
