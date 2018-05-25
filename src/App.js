import React, { Component } from 'react';
import './App.css';
import Header from "./Header/Header";
import MainContent from "./MainContent/MainContent";

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

  handleNameChange = name =>
    this.setState({ pendingGuest: name });

  handleNewGuest = () =>
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

  render() {
    return (
      <div className="App">
        <Header
          pendingGuest={this.state.pendingGuest}
          handleNameChange={this.handleNameChange}
          handleNewGuest={this.handleNewGuest}
        />
        <MainContent
          guests={this.state.guests}
          isFiltered={this.state.isFiltered}
          pendingGuest={this.state.pendingGuest}
          toggleFilter={this.toggleFilter}
          toggleConfirmationAt={this.toggleConfirmationAt}
          toggleEditingAt={this.toggleEditingAt}
          setNameAt={this.setNameAt}
          removeGuestAt={this.removeGuestAt}
        />
      </div>
    );
  }
}

export default App;
