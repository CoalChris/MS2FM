import React, { Component } from 'react';
import { NavbarDisplay } from './NavbarDisplay';

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <NavbarDisplay />;
  }
}