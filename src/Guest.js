import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GuestName from "./GuestName";

class Guest extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    isConfirmed: PropTypes.bool.isRequired,
    isEditing: PropTypes.bool.isRequired,
    handleConfirmation: PropTypes.func.isRequired,
    handleToggleEditing: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired
  };

  setName = event => this.props.setName(event.target.value);

  render() {
    return (
      <li>
        <GuestName
          isEditing={this.props.isEditing}
          handleNameEdits={this.setName}>
          {this.props.name}
        </GuestName>
        <label>
          <input type="checkbox" checked={this.props.isConfirmed} onChange={this.props.handleConfirmation} /> Confirmed
        </label>
        <button onClick={this.props.handleToggleEditing}>
          {
            this.props.isEditing ?
              'save'
              :
              'edit'
          }
        </button>
        <button>remove</button>
      </li>
    );
  }
}


export default Guest;