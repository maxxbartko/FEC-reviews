import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
