import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    // fetch(`${window.location.href}/reviews/`)
    // investigate relationship between API endpoint / fetch URL
    //   .then(response => response.json())
    //   .then(data => this.setState({ data }))
    //   .catch((error) => {
    //     console.error(error);
    //   });
    // trigger GET request call for Review table data for this listing/store
    // requires Listing table query for ReviewItem
    // requires People table query for ReviewItem
    // requires Shop table query for Reviews
  }

  // stretch goal: post function
  // probably would require a ReviewsForm component

  render() {
    return (
      <div>
        <br /><br />
        <span role="img" aria-label="Skull and Crossbones">
          ☠️　ＥＴＳＹＣＵＴＩＯＮＥＲ　☠️
        </span>
      </div>
    );
  }
}

// prop types validation
