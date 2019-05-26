import React, { Component } from 'react';

export class QuickListingsNewPost extends Component {
  render() {
    return (
      <span className="quick-listings-new-post" onClick={this.props.handleNewPost}>{this.props.newPost ? 'Cancel' : 'New Post'}</span>
    );
  }
}