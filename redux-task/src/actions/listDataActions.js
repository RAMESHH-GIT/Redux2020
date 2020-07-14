import ACTION_TYPES from "../action-constants";

export const listDataActions = {
  setSelection: function(selectionData) {
    return (dispatch) => {
      dispatch({
        type: ACTION_TYPES.SET_SELECTION,
        payload: selectionData
      })
    };
  }
};
