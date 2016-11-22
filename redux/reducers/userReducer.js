export default function userReducer(user = {}, action) {
  switch(action.type) {
    case 'GENERATE_RANDOM_ID':
      return Object.assign({}, user, {
        name: user.name,
        id: action.id
      })
    default:
      return user;
  }
};
