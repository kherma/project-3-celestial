import Axios from 'axios';

/* selectors */
export const getData = ({ order }) => order;
export const getTotal = (state) => {
  const {
    cart: { data: cart },
    extras: { data: extras },
  } = state;

  if (!cart.length && !extras.length) return 0;

  return cart
    .concat(extras)
    .map(({ price }) => price)
    .reduce((acc, price) => {
      return acc + price;
    }, 0);
};

/* action name creator */
const reducerName = 'order';
const createActionName = (name) => `action/${reducerName}/${name}`;

/* action types */
const POST_START = createActionName('POST_START');
const POST_SUCCESS = createActionName('POST_SUCCESS');
const POST_ERROR = createActionName('POST_ERROR');

/* action creators */
export const postStart = () => ({
  type: POST_START,
});
export const postSuccess = (payload) => ({
  payload,
  type: POST_SUCCESS,
});
export const postError = (payload) => ({
  payload,
  type: POST_ERROR,
});

/* thunk creators */
export const addOrderRequest = (data) => {
  return async (dispatch) => {
    dispatch(postStart());
    try {
      const res = await Axios.post('http://localhost:8000/api/order', data);
      dispatch(postSuccess(res.data));
    } catch (error) {
      dispatch(postError(error.message || true));
    }
  };
};

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case POST_START: {
      return {
        ...statePart,
        loading: {
          processed: false,
          error: false,
        },
      };
    }
    case POST_SUCCESS: {
      return {
        ...statePart,
        loading: {
          processed: action.payload,
          error: false,
        },
      };
    }
    case POST_ERROR: {
      return {
        ...statePart,
        loading: {
          processed: false,
          error: action.payload,
        },
      };
    }

    default:
      return statePart;
  }
}
