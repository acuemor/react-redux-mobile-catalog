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
    <VisiblePhoneList />
    {phoneDetail && <PhoneDetail phoneDetail={phoneDetail} />}
    <Footer />
  </div>
);

export default connect(mapStateToProps)(App);
