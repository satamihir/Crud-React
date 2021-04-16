const initialState = {
  users: [
    { id: 1, name: "Mihir", age: 24 },
    { id: 2, name: "Rajan", age: 24 },
  ],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_USERS":
      return state;
    case "CREATE_USER":
      let user = { ...payload, id: state.users.length + 1 };
      return {
        ...state,
        users: state.users.concat(user),
      };
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== payload),
      };
    case "UPDATE_USER":
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === payload.id) return payload;
          return user;
        }),
      };
    default:
      return state;
  }
};
