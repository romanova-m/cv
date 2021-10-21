import {applyMiddleware, combineReducers, createStore} from "redux";
import themeReducer from "./theme";

const logger = store => next => action => {
  console.groupCollapsed('dispatching', action.type)
  console.log('prev state', store.getState())
  console.log('action', action)
  let result = next(action)
  console.log('next state', store.getState)
  console.groupEnd()
  return result;
}

const saver = store => next => action => {
  let result = next(action)
  localStorage['romanova-cv'] = JSON.stringify(store.getState())
  return result;
}

const initStorage = (initialState = {}) => {
  return JSON.parse(localStorage['romanova-cv']? localStorage['romanova-cv'] : initialState);
}

export const storeFactory = (initialState={}) => {
  return applyMiddleware(logger, saver)(createStore)(combineReducers({theme: themeReducer}), initStorage(initialState))
}