import React, { Component } from "react";
import {Bar} from "./styles";

class AddBar extends Component {
  constructor(props) {
    super(props);
    this.state = {task: ''};
    this.typing = this.typing.bind(this);
  }

  typing(e) {
    this.setState({task: e.target.value});
  }

  render() {
    return (
      <div>
            <Bar placeholder="Add a Task" type="text" value={this.state.task} onChange={this.typing}/>
          <button onClick={() => this.props.update(this.state.task)}>Add Task</button>
      </div>
    );
  }
}

export default AddBar;
