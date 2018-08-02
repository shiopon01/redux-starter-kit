import React from 'react'
import PropTypes from 'prop-types'

const AddTodo = ({ addTodoClick }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          addTodoClick(input.value)
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

AddTodo.propTypes = {
  addTodoClick: PropTypes.func.isRequired,
}

export default AddTodo
