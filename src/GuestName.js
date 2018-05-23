import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GuestName extends Component {

  static propTypes = {
    isEditing: PropTypes.bool.isRequired,
    handleNameEdits: PropTypes.func.isRequired
  };

  render() {
    if (this.props.isEditing) {
      return (
        <input
          type="text"
          value={this.props.children}
          onChange={this.props.handleNameEdits}
        />
      );
    }

    return <span>{this.props.children}</span>
  }
}

export default GuestName;
