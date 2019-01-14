import React, { Component } from "react";
import ToDoContainer from "../../components/ToDo";
import AddBar from "../../components/AddBar"
import FilterBar from "../../components/FilterBar"
import uuidv4 from "uuidv4"
import {Row, Header} from "./styles"

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            matches: []
        };
        this.update=this.update.bind(this)
        this.search=this.search.bind(this)
        this.delete=this.delete.bind(this)
    }

    delete(donetask) {
        let newArray = this.state.tasks.slice()
        newArray = newArray.filter((el) => el.id !== donetask.id)
        this.setState({tasks:newArray})
    }
    
    update(task) {
        console.log(this.state)
        let newArray = this.state.tasks.slice();    
        newArray.push({
            name: task,
            id: uuidv4() 
        });   
        this.setState({tasks:newArray})
    }

    search(input){        
        let buffer = this.state.tasks.filter((el) => el.name.includes(input))
        this.setState({matches:buffer})
    }

    render() {
        console.log(this.state)
    return (
      <React.Fragment>
        <AddBar update={this.update}/>
        <Header>Here are the to-dos!</Header>
        <Row>
            <ToDoContainer tasks={this.state.tasks} delete={this.delete}/>
            <FilterBar search={this.search} matches={this.state.matches} tasks={this.state.tasks} />
        </Row>
      </React.Fragment>
    );
  }
}

export default Home;
