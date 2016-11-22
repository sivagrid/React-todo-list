var getId = function (todos) {
  return todos.reduce(function (maxId, todo) {
    return Math.max(todo.id, maxId)
  }, -1) + 1;
};

export default function todoReducer(todos = [], action) {
  switch(action.type) {

    case 'ADD_TODO':
      return [{
        id: getId(todos),
        text: action.text,
        completed: false,
      }, ...todos];

    case 'COMPLETE_TODO':
      return todos.map((todo) => {
        return todo.id === action.id ? Object.assign({}, todo, { completed: !todo.completed }) : todo;
      });

    case 'DELETE_TODO':
      return todos.filter((todo) => {
        return todo.id !== action.id;
      });

    default:
      return todos;
  }
};
