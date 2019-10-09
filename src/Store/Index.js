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
    default:
      return state
  }
};

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
