import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {

  static propTypes = {
    totalInvited: PropTypes.number.isRequired,
    totalAttending: PropTypes.number.isRequired,
    totalUnconfirmed: PropTypes.number.isRequired
  };

  render() {
    return (
      <table className="counter">
        <tbody>
        <tr>
          <td>Attending:</td>
          <td>{this.props.totalAttending}</td>
        </tr>
        <tr>
          <td>Unconfirmed:</td>
          <td>{this.props.totalUnconfirmed}</td>
        </tr>
        <tr>
          <td>Total:</td>
          <td>{this.props.totalInvited}</td>
        </tr>
        </tbody>
      </table>
    );
  }
}

export default Counter;
