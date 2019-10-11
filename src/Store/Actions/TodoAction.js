import * as ActionTypes from './ActionTypes';

export const addTodo = (todo) => ({ 
  type: ActionTypes.ADD_TODOS, 
  payload: todo 
})

export const editTodo = (payload) => ({
  type: ActionTypes.EDIT_TODOS,
  payload: payload
})

export const deleteTodo = (index) => ({
  type: ActionTypes.DELETE_TODOS,
  payload: index
})