import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PendingGuest extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired
  };

  setName = event => this.props.setName(event.target.value);

  render() {

    if (this.props.name) {
      return (
        <li className="pending">
        <span>
          {this.props.name}
        </span>
        </li>
      );
    }

    return null;
  }
}


export default PendingGuest;