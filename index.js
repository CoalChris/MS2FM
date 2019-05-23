import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './components/Hello';
import './style/style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Really? :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
