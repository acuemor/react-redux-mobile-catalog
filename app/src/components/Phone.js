import React from 'react';
import PropTypes from 'prop-types';
import './styles/Phone.css';

const Phone = ({ onClick, inStock, url }) => (
  <div className={inStock ? 'phone-in-stock' : 'phone-sold-out'} onClick={onClick}>
    <img src={url} alt="Demo app" />
  </div>
);

Phone.propTypes = {
  onClick: PropTypes.func.isRequired,
  inStock: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Phone;
