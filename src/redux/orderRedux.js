import Axios from 'axios';

/* selectors */
export const getData = ({ order }) => order;
export const getDescription = ({ order }) => order.description;
export const getTotal = (state) => {
  const {
    cart: { data: cart },
    extras: { data: extras },
    order: { deliveryPrice },
  } = state;
  if (!cart.length && !extras.length) return 0;

  return (
    cart
      .concat(extras)
      .map(({ price }) => price)
      .reduce((acc, price) => {
        return acc + price;
      }, 0) + deliveryPrice
  );
};

/* action name creator */
const reducerName = 'order';
const createActionName = (name) => `action/${reducerName}/${name}`;

/* action types */
const ADD_DESCRIPTION = createActionName('ADD_DESCRIPTION');
const SET_DESCRIPTION = createActionName('SET_DESCRIPTION');
const POST_START = createActionName('POST_START');
const POST_SUCCESS = createActionName('POST_SUCCESS');
const POST_ERROR = createActionName('POST_ERROR');
const ADD_DELIVERY_TO_TOTAL = createActionName('ADD_DELIVERY_TO_TOTAL');

/* action creators */
export const addDescription = (payload) => ({
  payload,
  type: ADD_DESCRIPTION,
});
export const setDescription = () => ({
  type: SET_DESCRIPTION,
});
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
export const addToTotal = (payload) => ({
  payload,
  type: ADD_DELIVERY_TO_TOTAL,
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
    case ADD_DESCRIPTION: {
      const { description } = action.payload;
      localStorage.setItem('description', JSON.stringify(description));
      return {
        ...statePart,
        description: description,
      };
    }
    case SET_DESCRIPTION: {
      const description = JSON.parse(localStorage.getItem('description'));
      return {
        ...statePart,
        description: description,
      };
    }
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
    case ADD_DELIVERY_TO_TOTAL: {
      return {
        ...statePart,
        deliveryPrice: action.payload,
      };
    }
    default:
      return statePart;
  }
}
