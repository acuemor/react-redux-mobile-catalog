import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Footer from './Footer';
import VisiblePhoneList from '../containers/VisiblePhoneList';
import PhoneDetail from './PhoneDetailComponent';
import SpinnerComponent from './SpinnerComponent';

const mapStateToProps = state => ({
  phoneDetail: state.phones.phoneDetail,
  loading: state.phones.loading,
});

const App = ({ phoneDetail, loading }) => (
  <div>
    {!loading && <Footer />}
    {phoneDetail && <PhoneDetail phoneDetail={phoneDetail} />}
    <VisiblePhoneList />
    {loading && <SpinnerComponent />}
  </div>
);

App.propTypes = {
  phoneDetail: PropTypes.object,
  loading: PropTypes.bool,
};

export default connect(mapStateToProps)(App);
