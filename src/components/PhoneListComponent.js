import React from 'react';
import PropTypes from 'prop-types';
import Phone from './Phone';

const PhoneList = ({ phoneList = [], onPhoneListClick }) => (
    <div>
        <ul>
            {phoneList.map(phone =>
                <Phone
                    key={phone.key}
                    {...phone}
                    onClick={() => onPhoneListClick(phone.key)}
                />
            )}
        </ul>
    </div>
)

PhoneList.propTypes = {
    onPhoneListClick: PropTypes.func,
    inStock: PropTypes.bool,
    text: PropTypes.string
}

export default PhoneList
