import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './modules/_reducers'

import registerServiceWorker from './unit/registerServiceWorker'
// import './style.css' // Possible to import css :)

let store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()