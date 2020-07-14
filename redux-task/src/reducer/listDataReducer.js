import ACTION_TYPES from "../action-constants";

const listDataReducer = {
  listData: (state = {
    list: [
      {name: 'ramesh', role: 'software'},
      {name: 'abcd', role: 'it'},
      ]
  }, action) => {
    switch (action.type) {
      case ACTION_TYPES.SET_SELECTION:
        return {
          ...state,
          selection: action.payload
        };
      default:
        return state
    }
  }
};

export default listDataReducer;
