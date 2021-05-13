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
      let page = action.payload;
      const max = Math.ceil(statePart.data.length / statePart.resultsPerPage);

      if (page > max) page = max;
      if (page < 1) page = 1;
      if (!page) page = statePart.currentPage;

      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
        currentPage: page,
      };
    }
    default:
      return statePart;
  }
}