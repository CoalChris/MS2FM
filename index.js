import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './components/Hello';
import { Navbar } from './components/Navbar';
import { QuickListings } from './components/QuickListings';
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
        <Navbar />
        <QuickListings />
        <Hello name={this.state.name} />
        <p>
          Really? :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
