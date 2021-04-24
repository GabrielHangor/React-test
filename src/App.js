import React, { Component } from 'react';
import Overview from './Components/Overview';
import uniqid from 'uniqid';

class App extends Component {
  constructor() {
    super();
    this.state = {
      task: { text: '', id: uniqid(), reSubmit: false },
      editedTask: '',
      tasks: [],
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.toggleInputField = this.toggleInputField.bind(this);
    this.handleOverviewChange = this.handleOverviewChange.bind(this);
    this.handleOverviewClick = this.handleOverviewClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      tasks: [...this.state.tasks, this.state.task],
      task: {
        text: '',
        id: uniqid(),
        reSubmit: false,
      },
    });
  }

  handleOverviewClick(id) {
    this.setState({
      tasks: this.state.tasks.map((task) =>
        task.id === id
          ? { ...task, text: this.state.editedTask, reSubmit: false }
          : task
      ),
      editedTask: '',
    });
  }

  handleChange(e) {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
        reSubmit: false,
      },
    });
  }

  handleOverviewChange(e) {
    this.setState({
      editedTask: e.target.value,
    });
  }

  deleteTask(id) {
    this.setState({
      tasks: this.state.tasks.filter((task) => task.id !== id),
    });
  }

  toggleInputField(id) {
    this.setState({
      tasks: this.state.tasks.map((task) =>
        task.id === id ? { ...task, reSubmit: !task.reSubmit } : task
      ),
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
        <Overview
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
          toggleInputField={this.toggleInputField}
          handleOverviewChange={this.handleOverviewChange}
          handleOverviewClick={this.handleOverviewClick}
        />
      </div>
    );
  }
}

export default App;
