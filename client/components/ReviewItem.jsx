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
