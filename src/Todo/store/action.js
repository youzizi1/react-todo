import { fromJS } from "immutable";
import * as actionTypes from "./action-type";
import { getTodoListRequest } from "../../http/api";

export const initTodoListAction = data => ({
  type: actionTypes.INIT_TODOLIST,
  data: fromJS(data)
});

export const changeInputValAction = data => ({
  type: actionTypes.CHANGE_INPUT_VALUE,
  data: fromJS(data)
});

export const addTaskAction = () => ({
  type: actionTypes.ADD_TASK
});

export const deleteTaskAction = data => ({
  type: actionTypes.DELETE_TASK,
  data
});

export const getTodoListAction = () => {
  return dispatch => {
    getTodoListRequest()
      .then(res => {
        dispatch(initTodoListAction(res.data));
      })
      .catch(err => console.log(err, "获取todo列表失败"));
  };
};
