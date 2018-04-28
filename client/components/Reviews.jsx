import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReviewItem from './ReviewItem';

export default class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // render new star average instantly through state instead of waiting for db
    };
  }

  render() {
    // map array of <Review />s for each
    const reviews = this.props.reviews.map(rev => (<div> <ReviewItem review={rev} /> </div>));
    // <ReviewItem /> with this.state.props = { review data }
    return (
      <div>
        <br /><br />
        c'mon and SLAM
        and welcome to the DOM
        <br /><br />
        {reviews}
        {/* Stretch goal: <ReviewsForm /> component here */}
        {/* Reviews [display shop star rating (number of shop reviews)]
        insert review array here
        */}
      </div>
    );
  }
}

// prop types validation
Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    person: PropTypes.number.isRequired,
    shop: PropTypes.number.isRequired,
    listing: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired,
  })).isRequired,
};

// Shops Table //
// id INT NOT NULL AUTO_INCREMENT,
// name TEXT NOT NULL,
// reviews_count INT,
// avg_stars_out_of_100 TINYINT,
