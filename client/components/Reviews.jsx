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
    const reviews = this.props.reviews.map((rev) => {
      const variable = 'important';
      // identify correct listings and people
      // consider doing JOINS in queries in order to expedite this process
      return (<div> <ReviewItem review={rev} /> </div>);
    });

    return (
      <div>
        <br /><br />
        <b>Reviews</b> {this.props.shop.avg_stars_out_of_100}% ({this.props.shop.reviews_count})`
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

  listings: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    shop: PropTypes.number.isRequired,
  })).isRequired,

  people: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  })).isRequired,

  shop: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    reviews_count: PropTypes.number.isRequired,
    avg_stars_out_of_100: PropTypes.number.isRequired,
  }).isRequired,
};
