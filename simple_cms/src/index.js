import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import routes from './common/routes';
import './index.scss';


ReactDOM.render(
  <Provider > 
    { routes }
  </Provider>,
  document.getElementById('root')
);