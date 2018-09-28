import { connect } from 'react-redux';
import { loadData, openModal } from '../actions';
import PhoneList from '../components/PhoneListComponent';

const getPhoneListContainer = (phones, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return phones;
    case 'SHOW_IN_STOCK':
      return phones.filter(phone => phone.inStock);
    case 'SHOW_SOLD_OUT':
      return phones.filter(phone => !phone.inStock);
    default:
      return phones;
  }
};

const mapStateToProps = state => ({
  phoneList: getPhoneListContainer(state.phones.phoneList, state.visibilityFilter.filter),
});

const mapDispatchToProps = dispatch => ({
  onPhoneListClick: (phone) => {
    dispatch(openModal(phone, phone.text));
  },
  getPhoneList: () => {
    dispatch(loadData());
  },
});

const PhoneListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PhoneList);

export default PhoneListContainer;
