import React from 'react'

// import components
import TodoList from './containers/TodoList'
import AddTodo from './containers/AddTodo'

const EmptyComponent = () => (
  <div style={css.app}>
    <header style={css.appHeader}>
      <h1 style={css.appTitle}>Welcome to React/Redux starter kit</h1>
    </header>
    <div>
      <AddTodo />
      <TodoList />
    </div>
  </div>
)

const css = {
  app: {
    textAlign: 'center',
  },

  appHeader: {
    backgroundColor: '#222',
    height: '100px',
    padding: '10px',
    color: 'white',
    textAlign: 'center',
  },

  appTitle: {
    fontSize: '1.5em',
  },
}

export default EmptyComponent
