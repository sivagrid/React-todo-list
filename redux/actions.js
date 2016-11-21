let actions = {
  addToDo: function(text) {
    return {
      type: 'ADD_TODO',
      text
    }
  }
};

export default actions;
