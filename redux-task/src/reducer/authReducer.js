import ACTION_TYPES from "../action-constants";

const AuthReducers = {
  authData: (state = {}, action) => {
    switch (action.type) {
      case ACTION_TYPES.LOGIN:
        return {
          result: action.payload
        };
      default:
        return state
    }
  }
};

export default AuthReducers;
