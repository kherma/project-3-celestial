/* selectors */
export const getCart = ({ cart }) => cart.data;
export const getLimit = ({ cart }) => cart.cartLimit;
export const getTopbarData = (state) => {
  const {
    planets: { data: planetData },
    cart: { data: cartData },
  } = state;

  return cartData.map((idInCart) => {
    const planet = planetData.find(({ _id }) => _id === idInCart);
    const {
      data: { price, numberSize },
      _id,
      styles,
    } = planet;
    const newTransformValue = 100 - Math.floor((100 - numberSize) / 5);
    const newTransform = `scale(${
      newTransformValue === 100 ? 1 : `0.${newTransformValue}`
    })`;
    const newStyles = {
      ...styles,
      rings: {
        ...styles.rings,
        transform: `translate(-50%, -50%) ${newTransform}`,
      },
      planet: {
        ...styles.planet,
        transform: newTransform,
      },
    };
    return { price, _id, newStyles };
  });
};
export const getTotal = (state) => {
  const {
    planets: { data: planetData },
    cart: { data: cartData },
  } = state;

  if (cartData.length === 0) return 0;

  return planetData
    .filter(({ _id }) => cartData.some((idInCart) => idInCart === _id))
    .map(({ data: { price } }) => {
      return price;
    })
    .reduce((acc, price) => acc + price);
};

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
      const newCart = [...statePart.data];
      newCart.length < 10 && newCart.push(action.payload);
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
