import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// Aggregate Reducers of each routes

import todo from './app/todo/modules/reducers';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  todo,
});

export default rootReducer;
