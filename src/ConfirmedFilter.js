import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ConfirmedFilter extends Component {

  static propTypes = {
    isFiltered: PropTypes.bool.isRequired,
    handleFilterToggle: PropTypes.func.isRequired
  };

  render() {
    return (
      <div>
        <h2>Invitees</h2>
        <label>
          <input type="checkbox"
                 value={this.props.isFiltered}
                 onChange={this.props.handleFilterToggle}/> Hide those who haven't responded
        </label>
      </div>
    );
  }
}

export default ConfirmedFilter;
