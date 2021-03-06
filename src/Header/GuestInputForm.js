import React, { Component } from 'react';
import PropTypes from "prop-types";

class GuestInputForm extends Component {

  static propTypes = {
    pendingGuest: PropTypes.string.isRequired,
    handleNameChange: PropTypes.func.isRequired,
    handleNewGuest: PropTypes.func.isRequired
  };

  handleNameInput = event =>
    this.props.handleNameChange(event.target.value);

  handleNewGuest = event => {
    event.preventDefault();
    this.props.handleNewGuest();
  };

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.props.pendingGuest}
          placeholder="Invite Someone"
          onChange={this.handleNameInput}
        />
        <button
          type="submit"
          name="submit"
          value="submit"
          onClick={this.handleNewGuest}
        >Submit
        </button>
      </form>
    );
  }
}

export default GuestInputForm;
