import React, { Component } from 'react';

export class QuickListingsForm extends Component {
  render() {
    return (
      <div className="quick-listings-form">
        <form onSubmit={this.props.handleSubmit}>
          <p>
            Notice:
            <input type="text" value={this.props.notice} onChange={this.props.handleNoticeChange} />
          </p>
          <p>
            Character Name:
            <input type="text" value={this.props.name} onChange={this.props.handleNameChange} />
          </p>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}