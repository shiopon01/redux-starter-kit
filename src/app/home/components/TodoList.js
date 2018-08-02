import React from 'react'
import PropTypes from 'prop-types'

import Todo from './Todo'

const TodoList = ({ todos, onTodoClick }) => (
  <ol style={style.list}>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </ol>
)

const style = {
  list: {
    listStyle: 'none',
    color: 'rgba(0,0,0,.7)',
  },
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
}

export default TodoList
