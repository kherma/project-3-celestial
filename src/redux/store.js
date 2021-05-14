import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { initialState } from './initialState';
import asideReducer from './asideRedux';
import planetsReducer from './planetsRedux';
import cartReducer from './cartRedux';
import modalReducer from './modalRedux';
import planetReducer from './planetRedux';

// define reducers
const reducers = {
  aside: asideReducer,
  planets: planetsReducer,
  cart: cartReducer,
  modal: modalReducer,
  planet: planetReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach((item) => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
