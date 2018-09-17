import React from 'react';
import PropTypes from 'prop-types';

const PhoneDetail = ({ onClick, inStock, text }) => (
    <div
      onClick={onClick}
    >
      {text},
      {description},
      {color},
      {price},
    </div>
  )

PhoneDetail.propTypes = {
    phoneList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        inStock: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onPhoneClick: PropTypes.func.isRequired
}

export default PhoneDetail