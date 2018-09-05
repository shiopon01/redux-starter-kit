import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import App from './app/App';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

const history = createBrowserHistory();

const store = createStore(
  connectRouter(history)(rootReducer),
  compose(applyMiddleware(routerMiddleware(history), thunk, logger))
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
