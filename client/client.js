import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/app';
import configureStore from '../redux/store';
import { Provider } from 'react-redux';

let initialState = {
  todos: [{
    id: 0,
    completed: false,
    text: 'This is my first todo list'
  }],
  user: {
    name: 'siv',
    id: 13
  }
};

let store = configureStore(initialState);

ReactDOM.render( 
    <Provider store={store}>
      <App/>
    </Provider>, document.getElementById('app')
  );
