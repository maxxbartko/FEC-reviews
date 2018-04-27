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
        {/* Reviews [display shop star rating (number of shop reviews)]
        insert review array here
        */}
      </div>
    );
  }
}

// prop types validation
