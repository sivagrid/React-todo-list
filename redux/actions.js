let actions = {
  addTodo: function(text) {
    return {
      type: 'ADD_TODO',
      text
    }
  },
  completeTodo: function(id) {
    return {
      type: 'COMPLETE_TODO',
      id: id
    }
  },
  deleteTodo: function(id) {
    return {
      type: 'DELETE_TODO',
      id: id
    }
  },
  generateRandomId: function() {
    return {
      type: 'GENERATE_RANDOM_ID',
      id: Math.round(Math.random()*100)+1
    }
  }
};

export default actions;
