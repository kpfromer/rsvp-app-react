import React, { Component } from 'react';
import './App.css';
import GuestList from "./GuestList";

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
  // this.setState(prevState => {
  //   prevState.guests.push()
  // });

  getTotalInvited = () => this.state.guests.length;
  getAttendingGuests = () => this.state.guests.filter(guest => guest.isConfirmed);
  getUnconfirmedGuest = () => this.state.guests.filter(guest => !guest.isConfirmed);

  render() {
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
          <table className="counter">
            <tbody>
            <tr>
              <td>Attending:</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Unconfirmed:</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Total:</td>
              <td>3</td>
            </tr>
            </tbody>
          </table>
          <GuestList
            guests={this.state.guests}
            toggleConfirmationAt={this.toggleConfirmationAt}
            toggleEditingAt={this.toggleEditingAt}
            setNameAt={this.setNameAt}
            isFiltered={this.state.isFiltered}
          />
        </div>
      </div>
    );
  }
}

export default App;
