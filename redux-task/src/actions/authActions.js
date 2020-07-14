import ACTION_TYPES from "../action-constants";

export const authActions = {
  login: function(loginData) {
    return (dispatch) => {
      dispatch({
        type: ACTION_TYPES.LOGIN,
        payload: loginData
      })
    };
  }
};
