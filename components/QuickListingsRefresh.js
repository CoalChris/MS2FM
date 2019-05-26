import React, { Component } from 'react';

export class QuickListingsRefresh extends Component {
  render() {
    return (
      <span className="quick-listings-refresh" onClick={this.props.handleRefresh}>Refresh</span>
    );
  }
}