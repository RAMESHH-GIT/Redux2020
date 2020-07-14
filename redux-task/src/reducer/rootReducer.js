import { combineReducers } from 'redux';
import AuthReducers from './authReducer';
import ListDataReducer from './listDataReducer';
export default combineReducers({
    authData: AuthReducers.authData,
    listData: ListDataReducer.listData
});
