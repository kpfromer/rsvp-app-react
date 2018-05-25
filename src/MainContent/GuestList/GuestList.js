import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GuestType } from "./GuestType";
import Guest from "./Guest";
import PendingGuest from "./PendingGuest";

class GuestList extends Component {

  static propTypes = {
    guests: PropTypes.arrayOf(GuestType).isRequired,
    toggleConfirmationAt: PropTypes.func.isRequired,
    toggleEditingAt: PropTypes.func.isRequired,
    setNameAt: PropTypes.func.isRequired,
    removeGuestAt: PropTypes.func.isRequired,
    isFiltered: PropTypes.bool.isRequired,
    pendingGuest: PropTypes.string.isRequired
  };

  // The reason for not having an arrow function in render is because every time
  // render is rerun (like on a state change) react has to recreate the arrow fn
  // which is really inefficient. This can be solved by pre-creating the arrow fn.
  toggleConfirmationAt = index => () => this.props.toggleConfirmationAt(index);
  toggleEditingAt = index => () => this.props.toggleEditingAt(index);
  setNameAt = index => text => this.props.setNameAt(index, text);
  removeGuestAt = index => () => this.props.removeGuestAt(index);

  render() {
    return (
      <ul>
        <PendingGuest name={this.props.pendingGuest}/>
        {this.props.guests.map((guest, index) =>
          // TODO: better key than index
          this.props.isFiltered && !guest.isConfirmed ?
            null
            :
            <Guest
              key={index}
              name={guest.name}
              isConfirmed={guest.isConfirmed}
              isEditing={guest.isEditing}
              handleConfirmation={this.toggleConfirmationAt(index)}
              handleToggleEditing={this.toggleEditingAt(index)}
              handleRemove={this.removeGuestAt(index)}
              setName={this.setNameAt(index)}
            />
        )}
      </ul>
    );
  }
}

export default GuestList;
