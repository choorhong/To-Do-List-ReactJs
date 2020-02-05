import React, { Component } from "react";
import InputArea from "../../components/InputArea/InputArea";
import Task from "../../components/Task/Task";

class ToDos extends Component {
  state = {
    todos: [
      { id: 1, task: "Walk the dog", done: false },
      { id: 2, task: "Water the plant", done: true },
      {
        id: 3,
        task:
          "Meeting with James, Jonathan, Merry (Grumpy all the time, wrong name), Nicholas, Raymond, Sean, Maggie, HR Department, and all sorts of non-sense folks who just I am lazy to name. Lol",
        done: false
      }
    ]
  };

  additem = item => {
    let newtodos = [...this.state.todos];
    newtodos.push(item);
    this.setState({ todos: newtodos });
  };

  deleteItem = id => {
    let newtodos = this.state.todos.filter(item => item.id !== id);
    this.setState({ todos: newtodos });
  };

  toggleDoneHandler = id => {
    let newtodos = [...this.state.todos];
    let targetItem = newtodos.map(item => item.id).indexOf(id);
    newtodos[targetItem].done = !newtodos[targetItem].done;
    this.setState({ todos: newtodos });
  };

  render() {
    let { todos } = this.state;
    console.log(todos);
    todos = todos.map((todo, index) => {
      return (
        <Task
          key={todo.id}
          index={index}
          task={todo.task}
          done={todo.done}
          toggleDone={() => this.toggleDoneHandler(todo.id)}
          deleteItem={() => this.deleteItem(todo.id)}
        />
      );
    });

    return (
      <React.Fragment>
        <InputArea additem={this.additem} />
        <div>{todos}</div>
      </React.Fragment>
    );
  }
}

export default ToDos;
