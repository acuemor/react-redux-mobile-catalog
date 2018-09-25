import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Phone from './Phone';
import './styles/PhoneList.css';

class PhoneList extends Component {
  componentDidMount() {
    // Equals to this.props.getPhoneList();
    const { getPhoneList } = this.props;
    getPhoneList();
  }

  render() {
    const { onPhoneListClick, phoneList } = this.props;
    const firstThird = Math.ceil(phoneList.length / 3);
    const secondThird = Math.ceil(phoneList.length - phoneList.length / 3);
    const columnA = phoneList.slice(0, firstThird);
    const columnB = phoneList.slice(firstThird, secondThird);
    const columnC = phoneList.slice(secondThird);
    return (
      <div>
        <div className="columns is-mobile is-multiline is-centered">
          <div className="column is-narrow">
            {columnA.map(phone => (
              <Phone key={phone.key} {...phone} onClick={() => onPhoneListClick(phone)} />
            ))}
          </div>
          <div className="column is-narrow">
            {columnB.map(phone => (
              <Phone key={phone.key} {...phone} onClick={() => onPhoneListClick(phone)} />
            ))}
          </div>
          <div className="column is-narrow">
            {columnC.map(phone => (
              <Phone key={phone.key} {...phone} onClick={() => onPhoneListClick(phone)} />
            ))}
          </div>
        </div>
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
