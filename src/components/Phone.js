import React from 'react';
import PropTypes from 'prop-types';

const Phone = ({ onClick, inStock, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: inStock ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
  
)

Phone.propTypes = {
  onClick: PropTypes.func.isRequired,
  inStock: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  camera: PropTypes.string.isRequired,
  screen: PropTypes.string.isRequired,
  battery: PropTypes.string.isRequired,
}

export default Phone
