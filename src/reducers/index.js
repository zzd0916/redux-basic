//拆分reducer 合并为一个
import { combineReducers } from 'redux';
import postReducer from './postReducer'
export default combineReducers({
  posts: postReducer
})