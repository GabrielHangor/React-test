import React, { Component } from 'react';
import Overview from './Components/Overview';
import uniqid from 'uniqid';

class App extends Component {
  constructor() {
    super();
    this.state = {
      task: { text: '', id: uniqid() },
      tasks: [],
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      tasks: [...this.state.tasks, this.state.task],
      task: {
        text: '',
        id: uniqid(),
      },
    });
  }

  handleChange(e) {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      },
    });
  }

  deleteTask(id) {
    this.setState({
      tasks: this.state.tasks.filter((task) => task.id !== id),
    });
  }

  render() {
    return (
      <div>
        <form>
          <input
            value={this.state.task.text}
            onChange={this.handleChange}
            type="text"
          />
          <button onClick={this.handleClick}>Click Me</button>
        </form>
        <br />
        <Overview tasks={this.state.tasks} deleteTask={this.deleteTask} />
      </div>
    );
  }
}

export default App;
