// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import rootReducer from './common/reducers'
// import { createStore } from 'redux';
// import routes from './common/routes';
// import './index.scss';
// import registerServiceWorker from './registerServiceWorker'

// const store = createStore(rootReducer);

// ReactDOM.render(
//   <Provider store={store}> 
//     { routes }
//   </Provider>,
//   document.getElementById('root')
// );
// registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import routes from './common/routes';
import { Provider } from 'react-redux';
import rootReducer from './common/reducers';   //reducer
import { createStore } from 'redux';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    { routes }
  </Provider>
    , document.getElementById('root'));
registerServiceWorker(); 
