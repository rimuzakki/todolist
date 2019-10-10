import { createStore } from "redux";

const initialState = {
  todos: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODOS':
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    case 'DELETE_TODOS':
      // menghapus dengan metode splice
      // copy state todos
      let newTodos = [...state.todos]
      // hapus element array
      newTodos.splice(action.payload.index, 1)

      // return state baru
      return {
        ...state,
        todos: newTodos
      }
    case 'EDIT_TODOS':
      // edit state

      // copy state todos
      let todos = [...state.todos]
      // ganti data todo
      let index = action.payload.index
      let todo = action.payload.todo
      todos[index] = todo

      // return state baru
      return {
        ...state,
        todos
      }
    default:
      return state
  }
};

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
