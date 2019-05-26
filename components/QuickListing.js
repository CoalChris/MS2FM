import React, { Component } from 'react';

export class QuickListing extends Component {
  render() {
    return (
      <div>
        <span className="quick-listing-title">{this.props.title}</span>
        <span className="quick-listing-name">{this.props.name}</span>
      </div>
    );
  }
}