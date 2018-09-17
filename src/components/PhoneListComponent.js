import React from 'react';
import PropTypes from 'prop-types';
import Phone from './Phone';

const PhoneList = ({ phoneList = [{id: 'test', test: 'test2'}], onPhoneClick }) => (
    <ul>
        {phoneList.map(phone =>
            <Phone
                key={phone.id}
                {...phone}
                onClick={() => onPhoneClick(phone.id)}
            />
        )}
    </ul>
)

PhoneList.propTypes = {
    onClick: PropTypes.string,
    inStock: PropTypes.bool,
    text: PropTypes.string
  }

export default PhoneList
