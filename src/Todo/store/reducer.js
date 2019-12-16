import { fromJS } from "immutable";
import * as actionTypes from "./action-type";

const defaultState = fromJS({
  inputVal: "",
  todoList: []
});

const handleAddTask = state => {
  const task = state.get("inputVal");
  if (!task) {
    alert("请填写任务");
    return state;
  }
  return state
    .update("todoList", item => item.push({ task }))
    .set("inputVal", "");
};

const handleDeleteTask = (state, index) => {
  const todoList = [...state.get("todoList").toJS()];
  todoList.splice(index, 1);
  return state.set("todoList", fromJS(todoList));
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_INPUT_VALUE:
      return state.set("inputVal", action.data);
    case actionTypes.INIT_TODOLIST:
      return state.set("todoList", action.data);
    case actionTypes.ADD_TASK:
      return handleAddTask(state);
    case actionTypes.DELETE_TASK:
      return handleDeleteTask(state, action.data);
    default:
      return state;
  }
};
