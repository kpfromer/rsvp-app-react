import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Counter from "./Counter";
import GuestList from "./GuestList/GuestList";
import ConfirmedFilter from "./ConfirmedFilter";
import { GuestType } from "./GuestList/GuestType";

class MainContent extends Component {

  static propTypes = {
    guests: PropTypes.arrayOf(GuestType).isRequired,
    toggleFilter: PropTypes.func.isRequired,
    toggleConfirmationAt: PropTypes.func.isRequired,
    toggleEditingAt: PropTypes.func.isRequired,
    setNameAt: PropTypes.func.isRequired,
    removeGuestAt: PropTypes.func.isRequired,
    isFiltered: PropTypes.bool.isRequired,
    pendingGuest: PropTypes.string.isRequired
  };

  getTotalInvited = () => this.props.guests.length;
  getAttendingGuests = () =>
    this.props.guests.reduce(
      (total, guest) => guest.isConfirmed ? total + 1 : total,
      0
    );
  getUnconfirmedGuests = () => this.getTotalInvited() - this.getAttendingGuests();

  render() {
    return (
      <div className="main">
        <ConfirmedFilter
          isFiltered={this.props.isFiltered}
          handleFilterToggle={this.props.toggleFilter}
        />
        <Counter
          totalInvited={this.getTotalInvited()}
          totalAttending={this.getAttendingGuests()}
          totalUnconfirmed={this.getUnconfirmedGuests()}
        />
        <GuestList
          guests={this.props.guests}
          toggleConfirmationAt={this.props.toggleConfirmationAt}
          toggleEditingAt={this.props.toggleEditingAt}
          setNameAt={this.props.setNameAt}
          removeGuestAt={this.props.removeGuestAt}
          isFiltered={this.props.isFiltered}
          pendingGuest={this.props.pendingGuest}
        />
      </div>
    );
  }
}

export default MainContent;
