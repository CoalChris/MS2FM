import React, { Component } from 'react';

export class QuickListingsForm extends Component {
  render() {
    return (
      <div className="quick-listings-form">
        {this.props.error ? <p className="error-message">Please enter a notice message and your character name.</p> : null}
        <p>
          Notice: {this.props.newNotice}
          <input type="text" value={this.props.notice} onChange={this.props.handleNoticeChange} />
        </p>
        <p>
          Character Name: {this.props.newName}
          <input type="text" value={this.props.name} onChange={this.props.handleNameChange} />
        </p>
        <label className="submit-button" onClick={this.props.handleSubmit}>Submit</label>
      </div>
    );
  }
}