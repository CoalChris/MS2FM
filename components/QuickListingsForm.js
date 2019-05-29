import React, { Component } from 'react';

export class QuickListingsForm extends Component {
  render() {
    return (
      <div className="quick-listings-form">
        {this.props.error ? <p className="error-message">Please enter a notice message and your character name.</p> : null}
        <p>
          Notice: {this.props.newNotice}
          <input type="text" value={this.props.newNotice} onChange={this.props.handleNoticeChange} />
        </p>
        <p>
          Character Name: {this.props.newName}
          <input type="text" value={this.props.newName} onChange={this.props.handleNameChange} />
        </p>
        <p>
          Server: {this.props.newServer}
          <select value={this.props.newServer} onChange={this.props.handleServerChange}>
            <option value="NAE">NAE</option>
            <option value="NAW">NAW</option>
            <option value="EU">EU</option>
            <option value="OCE">OCE</option>
            <option value="SA">SA</option>
          </select>
        </p>
        <label className="submit-button" onClick={this.props.handleSubmit}>Submit</label>
      </div>
    );
  }
}