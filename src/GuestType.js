import PropTypes from 'prop-types';

export const GuestType = PropTypes.shape({
  key: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  isConfirmed: PropTypes.bool.isRequired
});