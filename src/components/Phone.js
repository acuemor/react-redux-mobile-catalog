import React from 'react';
import PropTypes from 'prop-types';
import './styles/Phone.css';

const Phone = ({ onClick, inStock, text, url }) => (
    <li className={inStock ? "phone-in-stock" : "phone-sold-out"}
        onClick={onClick}

    >
        <img src={url} alt="Italian Trulli"></img>
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
