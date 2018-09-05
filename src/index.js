import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store'

import './index.css';
import Todo from './todo';

const App = (
  <Provider store={store}>
    <Todo />
  </Provider>
)

ReactDOM.render(App, document.getElementById('root'));
