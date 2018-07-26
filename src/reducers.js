import { combineReducers } from 'redux'

// Aggregate Reducers of each routes
import home from './app/home/modules/reducers'

const rootReducer = combineReducers({
  home
})

export default rootReducer