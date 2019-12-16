import { combineReducers } from "redux-immutable";
import { reducer as todoReducer } from "../Todo/store";

export default combineReducers({
  todo: todoReducer
});
