import { connect } from 'react-redux';
import { loadData, getPhoneDetail } from '../actions';
import PhoneList from '../components/PhoneListComponent';

const getVisiblePhoneList = (phones, filter) => {
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
  phoneList: getVisiblePhoneList(state.phones.phoneList, state.visibilityFilter),
});

const mapDispatchToProps = dispatch => ({
  onPhoneListClick: (phone) => {
    dispatch(getPhoneDetail(phone));
  },
  getPhoneList: () => {
    dispatch(loadData());
  },
});

const VisiblePhoneList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PhoneList);

export default VisiblePhoneList;
