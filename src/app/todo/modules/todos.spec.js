import * as todos from './todos'

describe('todo actions 1', () => {
  it('addTodo should create ADD_TODO action 1', () => {
    expect(todos.addTodo('First todo.')).toEqual({
      type: 'ADD_TODO',
      id: 0,
      text: 'First todo.',
    })
  })
})

describe('todo actions 2', () => {
  it('addTodo should create ADD_TODO action 2', () => {
    expect(todos.addTodo('Second todo.')).toEqual({
      type: 'ADD_TODO',
      id: 1,
      text: 'Second todo.',
    })
  })
})
