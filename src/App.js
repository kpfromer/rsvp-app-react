import React, { Component } from 'react';
import './App.css';
import GuestList from "./GuestList";
import Counter from "./Counter";

class App extends Component {

  state = {
    isFiltered: false,
    pendingGuest: '',
    guests: [
      {
        name: 'Treasure',
        isConfirmed: false,
        isEditing: false
      },
      {
        name: 'Nick',
        isConfirmed: true,
        isEditing: true
      }
    ]
  };

  setGuestPropertyAt = (guestIndex, property, value) =>
    this.setState({
      guests: this.state.guests.map((guest, index) =>
        index === guestIndex ?
          {
            ...guest,
            [property]: value
          }
          :
          guest
      )
    });

  toggleGuestPropertyAt = (guestIndex, property) =>
    this.setGuestPropertyAt(guestIndex, property, !this.state.guests[guestIndex][property]);

  toggleConfirmationAt = index => this.toggleGuestPropertyAt(index, 'isConfirmed');

  removeGuestAt = index =>
    this.setState({
      guests: [
        ...this.state.guests.slice(0, index),
        ...this.state.guests.slice(index + 1)
      ]
    });

  toggleEditingAt = index => this.toggleGuestPropertyAt(index, 'isEditing');

  setNameAt = (guestIndex, text) =>
    this.setGuestPropertyAt(guestIndex, 'name', text);

  toggleFilter = () =>
    this.setState({
      isFiltered: !this.state.isFiltered
    });

  handleNameInput = event =>
    this.setState({ pendingGuest: event.target.value });

  newGuestSubmitHandler = event => {
    event.preventDefault();

    this.setState({
      guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false
        },
        ...this.state.guests
      ],
      pendingGuest: ''
    });
  };

  getTotalInvited = () => this.state.guests.length;
  getAttendingGuests = () =>
    this.state.guests.reduce(
      (total, guest) => guest.isConfirmed ? total + 1 : total,
      0
    );
  getUnconfirmedGuests = () => this.getTotalInvited() - this.getAttendingGuests();

  render() {
    console.log(this.getAttendingGuests());
    return (
      <div className="App">
        <header>
          <h1>RSVP</h1>
          <p>A Treehouse App</p>
          <form>
            <input
              type="text"
              value={this.state.pendingGuest}
              placeholder="Invite Someone"
              onChange={this.handleNameInput}
            />
            <button
              type="submit"
              name="submit"
              value="submit"
              onClick={this.newGuestSubmitHandler}
            >Submit
            </button>
          </form>
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input type="checkbox"
                     value={this.state.isFiltered}
                     onChange={this.toggleFilter}/> Hide those who haven't responded
            </label>
          </div>
          <Counter
            totalInvited={this.getTotalInvited()}
            totalAttending={this.getAttendingGuests()}
            totalUnconfirmed={this.getUnconfirmedGuests()}
          />
          <GuestList
            guests={this.state.guests}
            toggleConfirmationAt={this.toggleConfirmationAt}
            toggleEditingAt={this.toggleEditingAt}
            setNameAt={this.setNameAt}
            removeGuestAt={this.removeGuestAt}
            isFiltered={this.state.isFiltered}
            pendingGuest={this.state.pendingGuest}
          />
        </div>
      </div>
    );
  }
}

export default App;
