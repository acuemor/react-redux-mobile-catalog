import React from 'react';
import { connect } from 'react-redux';
import Footer from './Footer';
import VisiblePhoneList from '../containers/VisiblePhoneList';
import PhoneDetail from './PhoneDetailComponent';

const mapStateToProps = state => ({
  phoneDetail: state.phones.phoneDetail,
});

const App = ({ phoneDetail }) => (
  <div>
    <Footer />
    {phoneDetail && <PhoneDetail phoneDetail={phoneDetail} />}
    <VisiblePhoneList />
  </div>
);

export default connect(mapStateToProps)(App);
