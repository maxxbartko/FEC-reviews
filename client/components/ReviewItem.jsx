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
        {this.props.review.body}
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
        <br /><br /> !!!!!!! <br /><br />
      </div>
    );
  }
}

// prop types validation
ReviewItem.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.number.isRequired,
    person: PropTypes.number.isRequired,
    shop: PropTypes.number.isRequired,
    listing: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired,
  }).isRequired,
};

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
