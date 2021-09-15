import ACTION_TYPES from './../actions/actionTypes';

const initialState = {
  todos: [],
  error: null,
  isFetching: false,
};

function todosReducer (state = initialState, action) {
  const { type } = action;
  switch (type) {
    case ACTION_TYPES.GET_TODOS_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }

    case ACTION_TYPES.GET_TODOS_SUCCESS: {
      const { todos } = action;
      return {
        ...state,
        isFetching: false,
        todos: todos,
      };
    }

    case ACTION_TYPES.GET_TODOS_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        error: error,
      };
    }

    case ACTION_TYPES.CREATE_TODO_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }

    case ACTION_TYPES.CREATE_TODO_SUCCESS: {
      return {
        ...state,
        isFetching: false,
      };
    }

    case ACTION_TYPES.CREATE_TODO_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }

    case ACTION_TYPES.DELETE_TODO_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }

    case ACTION_TYPES.DELETE_TODO_SUCCESS: {
      const { deletedTodo } = action;
      const { todos } = state;
      const newTodos = [...todos];
      newTodos.splice(
        newTodos.findIndex(todo => todo.id === deletedTodo[0].id),
        1
      );
      return {
        ...state,
        isFetching: false,
        todos: newTodos,
      };
    }

    case ACTION_TYPES.DELETE_TODO_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }

    case ACTION_TYPES.STATUS_TODO_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }

    case ACTION_TYPES.STATUS_TODO_SUCCESS: {
      const { id } = action;
      const { todos } = state;
      const index = todos.findIndex(todo => todo.id === id);
      todos[index].isDone = !todos[index].isDone;
      return {
        ...state,
        isFetching: false,
      };
    }

    case ACTION_TYPES.STATUS_TODO_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }

    default:
      return state;
  }
}

export default todosReducer;
