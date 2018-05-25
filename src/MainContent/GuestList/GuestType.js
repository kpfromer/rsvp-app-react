import PropTypes from 'prop-types';

export const GuestType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  isConfirmed: PropTypes.bool.isRequired
});