import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // render new star average instantly through state instead of waiting for db
    };
  }

  render() {
    // GET reviews for item/shop
    // map array of <Review />s for each
    // <ReviewItem /> with this.state.props = { review data }
    return (
      <div>
        {/* Stretch goal: <ReviewsForm /> component here */}
        {/* Reviews [display shop star rating (number of shop reviews)]
        insert review array here
        */}
      </div>
    );
  }
}

// prop types validation

// Shops Table //
// id INT NOT NULL AUTO_INCREMENT,
// name TEXT NOT NULL,
// reviews_count INT,
// avg_stars_out_of_100 TINYINT,
