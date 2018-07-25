import * as todos from './todos'

describe('todo actions', () => {
  it('addTodo should create ADD_TODO action', () => {
    expect(todos.addTodo('Use Redux')).toEqual({
      type: 'ADD_TODO',
      id: 0,
      text: 'Use Redux'
    })
  })
})