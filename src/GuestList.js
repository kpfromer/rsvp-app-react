import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GuestType } from "./GuestType";
import Guest from "./Guest";

class GuestList extends Component {

  toggleConfirmationAt = index => () => this.props.toggleConfirmationAt(index);

  render() {
    return (
      <ul>
        {/*<li className="pending"><span>Safia</span></li>*/}
        {/*<li className="responded"><span>Iver</span>*/}
        {/*<label>*/}
        {/*<input type="checkbox" checked /> Confirmed*/}
        {/*</label>*/}
        {/*<button>edit</button>*/}
        {/*<button>remove</button>*/}
        {/*</li>*/}
        {/*<li className="responded">*/}
        {/*<span>Corrina</span>*/}
        {/*<label>*/}
        {/*<input type="checkbox" checked /> Confirmed*/}
        {/*</label>*/}
        {/*<button>edit</button>*/}
        {/*<button>remove</button>*/}
        {/*</li>*/}
        {this.props.guests.map((guest, index) =>
          // TODO: better key than index
          <Guest
            key={index}
            name={guest.name}
            isConfirmed={guest.isConfirmed}
            handleConfirmation={this.toggleConfirmationAt(index)}
          />
        )}
      </ul>
    );
  }
}

GuestList.propsTypes = {
  guests: PropTypes.arrayOf(GuestType).isRequired,
  toggleConfirmationAt: PropTypes.func.isRequired
};

export default GuestList;
