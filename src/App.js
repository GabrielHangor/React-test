import React, { Component } from 'react';
import Overview from './Components/Overview';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentInput: '',
      tasks: [],
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ tasks: [...this.state.tasks, this.state.currentInput] });
  }

  handleChange(e) {
    this.setState({ currentInput: e.target.value });
  }

  render() {
    return (
      <div>
        <form>
          <input
            value={this.state.currentInput}
            onChange={this.handleChange}
            type="text"
          />
          <button onClick={this.handleClick}>Click Me</button>
        </form>
        <br />
        <Overview tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
