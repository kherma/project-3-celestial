/* selectors */
export const getPaginatedResults = ({
  planets: { data, currentPage, resultsPerPage },
}) =>
  data.slice((currentPage - 1) * resultsPerPage, currentPage * resultsPerPage);

export const getNumberOfPages = ({ planets: { data, resultsPerPage } }) =>
  Math.ceil(data / resultsPerPage);

export const getCurrentPage = ({ planets: { currentPage } }) => currentPage;

/* action name creator */
const reducerName = 'planets';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const CHANGE_CURRENT_PAGE = createActionName('CHANGE_CURRENT_PAGE');

/* action creators */
export const changeCurrentPage = (payload) => ({
  payload,
  type: CHANGE_CURRENT_PAGE,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_CURRENT_PAGE: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
        currentPage: action.payload,
      };
    }
    default:
      return statePart;
  }
}
