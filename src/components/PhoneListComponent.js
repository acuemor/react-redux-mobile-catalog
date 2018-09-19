import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Phone from './Phone';

class PhoneList extends Component {
  componentDidMount() {
    // Equals to this.props.getPhoneList();
    const { getPhoneList } = this.props;
    getPhoneList();
  }

  render() {
    const { onPhoneListClick, phoneList } = this.props;

    return (
      <div>
        <ul>
          {phoneList.map(phone => (
            <Phone key={phone.key} {...phone} onClick={() => onPhoneListClick(phone)} />
          ))}
        </ul>
      </div>
    );
  }
}

PhoneList.propTypes = {
  onPhoneListClick: PropTypes.func,
  phoneList: PropTypes.array,
  getPhoneList: PropTypes.func,
  inStock: PropTypes.bool,
  text: PropTypes.string,
};
PhoneList.defaultProps = {
  onPhoneListClick: undefined,
  phoneList: [],
  getPhoneList: undefined,
  inStock: true,
  text: '',
};

export default PhoneList;
