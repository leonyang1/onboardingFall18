import React, { Component } from "react";
import {No, Task, Button} from "./styles"

class ToDoContainer extends Component {
  render() {
    const tasks = this.props.tasks.map((el) =>
      <div>
        <Task>
        <li>
          {el.name}
          <Button onClick = {() => this.props.delete(el)}>
            Done!
          </Button>
        </li>
        </Task>
      </div>
    );
    return (
      <React.Fragment>
        {tasks.length === 0 &&
        <No>
          <div>There are no to-dos! Enjoy your day!</div>
        </No>
        }
        <ul>{tasks}</ul>
      </React.Fragment>
    );
  }
}

export default ToDoContainer;
