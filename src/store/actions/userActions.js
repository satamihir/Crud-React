export const createUser = (data) => (dispatch) => {
  dispatch({
    type: "CREATE_USER",
    payload: data,
  });
};

export const deleteUser = (userId) => (dispatch) => {
  dispatch({
    type: "DELETE_USER",
    payload: userId,
  });
};

export const updateUserData = (user) => (dispatch) => {
  dispatch({
    type: "UPDATE_USER",
    payload: user,
  });
};
