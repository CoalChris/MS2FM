import React, { Component } from 'react';
import { QuickListingsDisplay } from './QuickListingsDisplay';
import { QuickListingsRefresh } from './QuickListingsRefresh';
import { QuickListingsNewPost } from './QuickListingsNewPost';
import { QuickListingsForm } from './QuickListingsForm';
import firebase from './firebase/firebase.js';

/*const quickListings = [
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
];*/

var qListings = [
  {
    author: 'bob',
    name: 'R>Rog Any',
    title: 'Bobbie',
  },
  {
    author: 'memelord',
    name: 'S>Pepegas 1m',
    title: 'HelloMemes'
  }
]

export class QuickListings extends Component {
  constructor(props) {
    super(props);
    //const tempArray = quickListings.map(object => ({ ...object }));
    const db = firebase.firestore();
    db.settings({ timestampsInSnapshots: true});
    db.collection("quick-listings").get().then((querySnapshot) => {
      querySnapshot.forEach((item) => {    
          let string = JSON.parse(JSON.stringify(item.data()));
          console.log(string);
          qListings.push(string);
      });
    });
    console.log(qListings);
    this.state = {
      listings: qListings,
      newPost: false,
      newNotice: '',
      newName: '',
      submitError: false
    };

    this.handleNewPost = this.handleNewPost.bind(this);
    this.handleNoticeChange = this.handleNoticeChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  handleNewPost(e) {
    this.setState({newPost: !this.state.newPost, newNotice: '', newName: ''});
  }

  handleNoticeChange(e) {
    this.setState({newNotice: e.target.value});
  }

  handleNameChange(e) {
    this.setState({newName: e.target.value});
  }

  handleSubmit(e) {
    if (this.state.newNotice && this.state.newName) {
      const submission = {author: 'Username', title: this.state.newNotice, name: this.state.newName};
      const updatedList = this.state.listings.push(submission);
      this.setState({newPost: false, submitError: false});
    } else {
      this.setState({submitError: true});
    }
  }

  handleRefresh(e) {
    const tempArray = quickListings.map(object => ({ ...object }));
    this.setState({listings: tempArray});
  }

  render() {
    return (
      <div>
        <QuickListingsDisplay listings={this.state.listings} />
        <hr />
        <div className="quick-listings-buttons">
          <QuickListingsRefresh handleRefresh={this.handleRefresh} />
          <QuickListingsNewPost handleNewPost={this.handleNewPost} newPost={this.state.newPost} />
          {this.state.newPost ? <QuickListingsForm handleNoticeChange={this.handleNoticeChange} handleNameChange={this.handleNameChange} newNotice={this.state.newNotice} newName={this.state.newName} handleSubmit={this.handleSubmit} error={this.state.submitError} /> : null}
        </div>
      </div>
    );
  }
}