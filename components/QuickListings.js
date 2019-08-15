import React, { Component } from 'react';
import { QuickListingsDisplay } from './QuickListingsDisplay';
import { QuickListingsRefresh } from './QuickListingsRefresh';
import { QuickListingsNewPost } from './QuickListingsNewPost';
import { QuickListingsForm } from './QuickListingsForm';
import firebase from './firebase/firebase.js';

const quickListings = [
  {
    title: 'R>Rog Any',
    name: 'Bobbie',
    server: 'OCE'
  },
  {
    title: 'S>Pepegas 1m',
    name: 'HelloMemes',
    server: 'NAE'
  }
];

async function getListings() {
  try {
    quickListings.length = 0;
    const db = firebase.firestore();
    await db.collection("quick-listings").get().then((querySnapshot) => {
      querySnapshot.forEach((item) => {    
          quickListings.push(JSON.parse(JSON.stringify(item.data())));
      });
    });
  } catch(e) {
    console.error("Error retrieving listings: ", e);
    return null;
  }
}

async function addListing(listing) {
  try {
    const db = firebase.firestore();
    await db.collection("quick-listings").doc(listing.key).set({
      title: listing.title,
      name: listing.name,
      server: listing.server
    });
  } catch(e) {
    console.error("Error: ", e);
    return null;
  }
}

export class QuickListings extends Component {
  constructor(props) {
    super(props);
    //const tempArray = quickListings.map(object => ({ ...object }));
    this.state = {
      listings: quickListings,
      newPost: false,
      newNotice: '',
      newName: '',
      newServer: '',
      submitError: false
    };

    this.handleNewPost = this.handleNewPost.bind(this);
    this.handleNoticeChange = this.handleNoticeChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleServerChange = this.handleServerChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  async componentDidMount() {
    await getListings();
    this.setState({ready: true});
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

  handleServerChange(e) {
    this.setState({newServer: e.target.value});
  }

  async handleSubmit(e) {
    if (this.state.newNotice && this.state.newName) {
      const submission = {key: this.state.newServer + this.state.newName, title: this.state.newNotice, name: this.state.newName, server: this.state.newServer};
      await addListing(submission);
      await getListings();
      //const updatedList = this.state.listings.push(submission);
      this.setState({newPost: false, submitError: false});
    } else {
      this.setState({submitError: true});
    }
  }

  async handleRefresh(e) {
    await getListings();
    this.setState({ready: true});
  }

  render() {
    return (
      <div>
        <QuickListingsDisplay listings={this.state.listings} />
        <hr />
        <div className="quick-listings-buttons">
          <QuickListingsRefresh handleRefresh={this.handleRefresh} />
          <QuickListingsNewPost handleNewPost={this.handleNewPost} newPost={this.state.newPost} />
          {this.state.newPost ? <QuickListingsForm handleNoticeChange={this.handleNoticeChange} handleNameChange={this.handleNameChange} handleServerChange={this.handleServerChange} newNotice={this.state.newNotice} newName={this.state.newName} newServer={this.state.newServer} handleSubmit={this.handleSubmit} error={this.state.submitError} /> : null}
        </div>
      </div>
    );
  }
}