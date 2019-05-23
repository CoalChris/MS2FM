import React, { Component } from 'react';
import { QuickListingsDisplay } from './QuickListingsDisplay';

export class QuickListings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <QuickListingsDisplay />;
  }
}