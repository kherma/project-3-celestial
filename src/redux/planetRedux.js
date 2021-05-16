import Axios from 'axios';

/* selectors */
export const getData = ({ planet }) => planet.data;
export const getLoading = ({ planet }) => planet.loading;

/* action name creator */
const reducerName = 'planet';
const createActionName = (name) => `action/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const RESET_ERROR = createActionName('RESET_ERROR');

/* action creators */
export const fetchStarted = () => ({ type: FETCH_START });
export const fetchSuccess = (payload) => ({ payload, type: FETCH_SUCCESS });
export const fetchError = (payload) => ({ payload, type: FETCH_ERROR });
export const resetError = () => ({ type: RESET_ERROR });

export const fetchSingleFromApi = (id) => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios.get(`http://localhost:8000/api/planets/${id}`)
      .then((res) => {
        dispatch(fetchSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchError(err.message || true));
        dispatch(resetError());
      });
  };
};

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case RESET_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
      };
    }
    default:
      return statePart;
  }
}
