var getId = function (state) {
  return state.todos.reduce(function (maxId, todo) {
    return Math.max(todo.id, maxId)
  }, -1) + 1;
};

export default function reducers(todos, action) {
  switch(action.type) {
    case 'ADD_TODO':
      return [{
        id: getId(state),
        text: action.text,
        complted: false,
      }, ...state.todos]
    case 'COMPLETE_TODO':
      return Object.assign({}, state, {
        todos: state.todos.map((todo) => {
          return todo.id === action.id ? Object.assign({}, todo, {completed : !todo.completed}) : todo;
        })
      })
    case 'DELETE_TODO':
      return Object.assign({}, state, {
        todos: state.todos.filter((todo) => {
          return todo.id !== action.id;
        })
      })
    case 'GENERATE_RANDOM_ID':
      return Object.assign({}, state, {
        user: {
          name: state.user.name,
          id: action.id
        }        
      })
    default:
      return state;
  }
};
