import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={Object.assign(
      {
        textDecoration: completed ? 'line-through' : 'none',
      },
      style.li
    )}
  >
    {text}
  </li>
)

const style = {
  li: {
    // float: 'left',
    // width: '100%'
  },
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}

export default Todo
