import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import './styles/styles.scss';
import storeData from './store';
import { loading, loadTodos } from 'actions';


storeData.dispatch(loading());
storeData.dispatch(loadTodos());
render(
  <Provider store={storeData}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
