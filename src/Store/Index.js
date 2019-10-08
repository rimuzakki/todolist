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
    default:
      return state
  }
};

const store = createStore(rootReducer);

export default store;
