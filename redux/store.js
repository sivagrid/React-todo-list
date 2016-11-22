import { applyMiddleware, compose, createStore } from 'redux';
import rootReducers from './reducers';
import logger from 'redux-logger';

//create a middleware that do compose
const finalCreateStore = compose(
  applyMiddleware(logger())
)(createStore);


export default function configureStore(initialState = {todos: [], user: {}}) {
  return finalCreateStore(rootReducers, initialState)
}
