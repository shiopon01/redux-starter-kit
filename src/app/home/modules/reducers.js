import { combineReducers } from 'redux'

// Aggregate Reducers for each modules

import todos from './todos'
import visibilityFilter from './visibilityFilter'

const reducers = combineReducers({
  todos,
  visibilityFilter
})

export default reducers
