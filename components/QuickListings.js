import React, { Component } from 'react';
import { QuickListingsDisplay } from './QuickListingsDisplay';
import { QuickListingsRefresh } from './QuickListingsRefresh';
import { QuickListingsNewPost } from './QuickListingsNewPost';
import { QuickListingsForm } from './QuickListingsForm';

const quickListings = [
  {
    author: 'bob',
    title: 'R>Rog Any',
    name: 'Bobbie'
  },
  {
    author: 'memelord',
    title: 'S>Pepegas 1m',
    name: 'HelloMemes'
  }
];

export class QuickListings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: quickListings,
      newPost: false
    };

    this.handleNewPost = this.handleNewPost.bind(this);
  }

  handleNewPost(e) {
    this.setState({newPost: !this.state.newPost});
  }

  render() {
    return (
      <div>
        <QuickListingsDisplay listings={this.state.listings} />
        <hr />
        <div className="quick-listings-buttons">
          <QuickListingsRefresh />
          <QuickListingsNewPost handleNewPost={this.handleNewPost} newPost={this.state.newPost} />
          {this.state.newPost ? <QuickListingsForm /> : null}
        </div>
      </div>
    );
  }
}