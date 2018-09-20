import React from 'react';
import PropTypes from 'prop-types';
import './styles/Phone.css';

const Phone = ({ onClick, inStock, url }) => (
  <li className={inStock ? 'phone-in-stock' : 'phone-sold-out'} onClick={onClick}>
    <img src={url} alt="Demo app" />
  </li>
);

Phone.propTypes = {
  onClick: PropTypes.func.isRequired,
  inStock: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Phone;
