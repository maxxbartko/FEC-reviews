import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews,
      listings: this.props.listings,
      people: this.props.people,
      shop: this.props.shop,
    };
  }

  componentDidMount() {
    fetch(`${window.location.href}listings/666666666/reviews/`)
    // 404 error is likely about 6299/6300 ports situation between servers
      .then(response => response.json())
      .then((data) => {
        const [reviews, listings, people, [shop]] = data;
        this.setState({
          reviews,
          listings,
          people,
          shop,
        }).catch(err => console.error`⚠️ ${err}`);
      });
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

// Reviews Table //
//   id INT NOT NULL AUTO_INCREMENT,
//   person INT NOT NULL,
//   shop INT NOT NULL,
//   listing INT NOT NULL,
//   body TEXT NOT NULL,
//   date DATETIME NOT NULL,
//   stars TINYINT NOT NULL,

// Listings Table //
// id INT NOT NULL AUTO_INCREMENT,
// name TEXT NOT NULL,
// photo TEXT,
// shop INT NOT NULL,

// People Table //
// id INT NOT NULL AUTO_INCREMENT,
// name TEXT NOT NULL,
// photo TEXT,

// Shops Table //
// id INT NOT NULL AUTO_INCREMENT,
// name TEXT NOT NULL,
// reviews_count INT,
// avg_stars_out_of_100 TINYINT,
