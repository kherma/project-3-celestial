import Axios from 'axios';

/* selectors */
export const getPaginatedResults = ({
  planets: { data, currentPage, resultsPerPage },
}) =>
  data.slice((currentPage - 1) * resultsPerPage, currentPage * resultsPerPage);
export const getNumberOfPages = ({ planets: { data, resultsPerPage } }) =>
  Math.ceil(data.length / resultsPerPage);
export const getCurrentPage = ({ planets: { currentPage } }) => currentPage;

/* action name creator */
const reducerName = 'planets';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const CHANGE_CURRENT_PAGE = createActionName('CHANGE_CURRENT_PAGE');

/* action creators */
export const fetchStarted = () => ({ type: FETCH_START });
export const fetchSuccess = (payload) => ({ payload, type: FETCH_SUCCESS });
export const fetchError = (payload) => ({ payload, type: FETCH_ERROR });
export const changeCurrentPage = (payload) => ({
  payload,
  type: CHANGE_CURRENT_PAGE,
});

/* thunk creators */
export const fetchAllFromAPI = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    const {
      planets: {
        data,
        loading: { active },
      },
    } = getState();

    if (!data.length && active) {
      Axios.get('http://localhost:8000/api/planets')
        .then((res) => {
          dispatch(fetchSuccess(res.data));
        })
        .catch((err) => {
          dispatch(fetchError(err.message || true));
        });
    }
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
    case CHANGE_CURRENT_PAGE: {
      let page = action.payload;
      const max = Math.ceil(statePart.data.length / statePart.resultsPerPage);

      if (page > max) page = max;
      if (page < 1) page = 1;
      if (!page) page = statePart.currentPage;

      return {
        ...statePart,
        currentPage: page,
      };
    }
    default:
      return statePart;
  }
}
