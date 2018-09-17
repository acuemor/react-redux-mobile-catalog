import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import PhonesApp from './reducers';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(
  PhonesApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // In order to work with redux extension
  );

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
