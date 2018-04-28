import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ReviewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {/*
        Left panel:
        circular profile image
        `Reviewed by {name}`

        Middle panel:
        star rating
        description
        image and title block

        Right panel:
        date (no time)
        that's it
        */}
      </div>
    );
  }
}

// prop types validation

// Reviews Table //
// id INT NOT NULL AUTO_INCREMENT,
// person INT NOT NULL,
// shop INT NOT NULL,
// listing INT NOT NULL,
// body TEXT NOT NULL,
// date DATETIME NOT NULL,
// stars TINYINT NOT NULL,

// Listings Table //
// id INT NOT NULL AUTO_INCREMENT,
// name TEXT NOT NULL,
// photo TEXT,
// shop INT NOT NULL,

// People Table //
// id INT NOT NULL AUTO_INCREMENT,
// name TEXT NOT NULL,
// photo TEXT,
