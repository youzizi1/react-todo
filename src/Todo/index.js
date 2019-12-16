import React, { Component } from "react";
import { connect } from "react-redux";
import { Input, Button, List } from "antd";
import {
  getTodoListAction,
  changeInputValAction,
  addTaskAction,
  deleteTaskAction
} from "./store/action";
import {
  TodoTitleStyle,
  TodoInputStyle,
  TodoItemStyle,
  TodoStyle
} from "./style";

function TodoInput({ inputVal, addTask, changeInputVal }) {
  return (
    <TodoInputStyle>
      <Input value={inputVal} onChange={changeInputVal} />
      <Button type="primary" onClick={addTask}>
        Add Task
      </Button>
    </TodoInputStyle>
  );
}

function TodoList({ todoList, deleteTask }) {
  return (
    <TodoItemStyle>
      <List
        bordered
        dataSource={todoList.toJS()}
        renderItem={(todo, index) => (
          <List.Item
            actions={[
              <Button
                type="danger"
                size="small"
                onClick={() => deleteTask(index)}
              >
                delete
              </Button>
            ]}
          >
            {todo.task}
          </List.Item>
        )}
      />
    </TodoItemStyle>
  );
}

class Todo extends Component {
  componentDidMount() {
    this.props.getTodoList();
  }

  render() {
    return (
      <TodoStyle>
        <TodoTitleStyle>todos</TodoTitleStyle>
        <TodoInput {...this.props} />
        <TodoList {...this.props} />
      </TodoStyle>
    );
  }
}

const mapStateToProps = state => ({
  inputVal: state.getIn(["todo", "inputVal"]),
  todoList: state.getIn(["todo", "todoList"])
});

const mapDispatchToProps = dispatch => ({
  getTodoList() {
    dispatch(getTodoListAction());
  },
  changeInputVal(e) {
    dispatch(changeInputValAction(e.target.value));
  },
  addTask() {
    dispatch(addTaskAction());
  },
  deleteTask(index) {
    dispatch(deleteTaskAction(index));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
