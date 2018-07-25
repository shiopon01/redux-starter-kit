import React from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../modules/todos'

const AddTodoComponent = ({
  addTodoClick
}) => {

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
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  const addTodoClick = (value) => dispatch(addTodo(value))

  return {
    addTodoClick
  }
}

const AddTodoContainer = connect(
  null,
  mapDispatchToProps
)(AddTodoComponent)

export default AddTodoContainer