import React, { Component } from "react";
import {Bar} from "./styles"

class FilterBar extends Component {
  constructor(props) {
    super(props);
    this.state = {input: ''};
    this.typing = this.typing.bind(this);
  }
  
  typing(e) {
    this.setState({input: e.target.value});
    this.props.search(e.target.value);
  }

  render() {
    const tasks = this.props.tasks
    const matches = this.props.matches.map((match) =>
    <div>
      <li>{match.name}</li>
    </div>
  );
    return (
        <div>
            <Bar type="text" placeholder="filter through tasks" value={this.state.input} onChange={this.typing}/>
            <ul>{this.state.input ? matches:""}</ul>
            <div>
                {matches.length === 0 && tasks.length !== 0 && this.state.input &&
                <h2>There are no matches</h2>
                }
            </div>
        </div>
    );
  }
}

export default FilterBar;
