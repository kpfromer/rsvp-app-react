import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GuestType } from "./GuestType";
import Guest from "./Guest";

class GuestList extends Component {

  static propTypes = {
    guests: PropTypes.arrayOf(GuestType).isRequired,
    toggleConfirmationAt: PropTypes.func.isRequired,
    toggleEditingAt: PropTypes.func.isRequired,
    setNameAt: PropTypes.func.isRequired
  };

  // The reason for not having an arrow function in render is because every time
  // render is rerun (like on a state change) react has to recreate the arrow fn
  // which is really inefficient. This can be solved by pre-creating the arrow fn.
  toggleConfirmationAt = index => () => this.props.toggleConfirmationAt(index);
  toggleEditingAt = index => () => this.props.toggleEditingAt(index);
  setNameAt = index => text => this.props.setNameAt(index, text);

  render() {
    return (
      <ul>
        {this.props.guests.map((guest, index) =>
          // TODO: better key than index
          <Guest
            key={index}
            name={guest.name}
            isConfirmed={guest.isConfirmed}
            isEditing={guest.isEditing}
            handleConfirmation={this.toggleConfirmationAt(index)}
            handleToggleEditing={this.toggleEditingAt(index)}
            setName={this.setNameAt(index)}
          />
        )}
      </ul>
    );
  }
}

export default GuestList;
