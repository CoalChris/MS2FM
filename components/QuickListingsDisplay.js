import React, { Component } from 'react';
import { QuickListing } from './QuickListing';

export class QuickListingsDisplay extends Component {
  render() {
    return (
      <div>
        <h1>Notice Board</h1>
        <hr />
        <div className="quick-listings">
          {this.props.listings.map(listing => (
            <QuickListing key={listing.key} title={listing.title} name={listing.name} />
          ))}
        </div>
      </div>
    );
  }
}