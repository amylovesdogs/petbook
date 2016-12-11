import {createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { GET_PUPPIES, SELECT_PUPPY } from './action-creators';
const logger = createLogger();

const initialState = {
  allPuppies: [],
  selectedPuppy: {}
}

function rootReducer (previousState, action) {
  if (!action) return previousState;
  switch (action.type) {
    case GET_PUPPIES:
      return Object.assign({},previousState, {allPuppies: action.puppies});
    case SELECT_PUPPY:
      return Object.assign({},previousState, {selectedPuppy: action.puppy});
    default:
      return previousState;
  }
}

const appStore = createStore(rootReducer,
                             initialState,
                             applyMiddleware(logger,thunkMiddleware));

export default appStore;