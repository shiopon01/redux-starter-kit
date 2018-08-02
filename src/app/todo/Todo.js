import React from 'react'

// import components
import Header from '../../shareComponents/Header'

import TodoList from './containers/TodoList'
import AddTodo from './containers/AddTodo'

const TodoComponent = () => (
  <div style={css.app}>
    <Header />

    <div style={css.container}>
      <div style={css.addTodo}>
        <AddTodo />
      </div>
      <div style={css.todoList}>
        <TodoList />
      </div>
    </div>
  </div>
)

const css = {
  app: {
    textAlign: 'center',
  },

  container: {
    marginTop: '10px',
    display: 'grid',
    gridGap: '15px',
    gridTemplateColumns: '10% repeat(3, 1fr) 10%',
    gridTemplateRows: '1fr',
  },

  addTodo: {
    gridColumn: '2',
    gridRow: '1',
  },

  todoList: {
    gridColumn: '3/5',
    gridRow: '1',
  },
}

export default TodoComponent
