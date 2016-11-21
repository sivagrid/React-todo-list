import { applyMiddleware, compose, createStore } from 'redux';
import reducers from './reducers';
import logger from 'redux-logger';

//create a middleware that do compose
const finalCreateStore = compose(
  applyMiddleware(logger())
)(createStore);


export default function configureStore(initialState = {todos: []}) {
  return finalCreateStore(reducers, initialState)
}
