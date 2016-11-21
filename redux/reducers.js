var getId = function (state) {
  return state.todos.reduce(function (maxId, todo) {
    return Math.max(todo.id, maxId)
  }, -1) + 1;
};

export default function reducers(state, action) {
  switch(action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, {todos: [{
        id: getId(state),
        text: action.text,
        complted: false,
      }, ...state.todos]
    });
    default:
      return state;
  }
};
