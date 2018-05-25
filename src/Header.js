import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GuestInputForm from "./GuestInputForm";

class Header extends Component {

  static propTypes = {
    pendingGuest: PropTypes.string.isRequired,
    handleNameChange: PropTypes.func.isRequired,
    handleNewGuest: PropTypes.func.isRequired
  };

  render() {
    return (
      <header>
        <h1>RSVP</h1>
        <p>A Treehouse App</p>
        <GuestInputForm
          pendingGuest={this.props.pendingGuest}
          handleNameChange={this.props.handleNameChange}
          handleNewGuest={this.props.handleNewGuest}
        />
      </header>
    );
  }
}

export default Header;
