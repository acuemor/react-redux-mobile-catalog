import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './Header';
import PhoneListContainer from '../containers/PhoneListContainer';
import PhoneDetail from './PhoneDetailComponent';
import SpinnerComponent from './SpinnerComponent';

const mapStateToProps = state => ({
  phoneDetail: state.phones.phoneDetail,
  loading: state.phones.loading,
});

const App = ({ phoneDetail, loading }) => (
  <div>
    {!loading && <Header />}
    {phoneDetail && <PhoneDetail phoneDetail={phoneDetail} />}
    <PhoneListContainer />
    {loading && <SpinnerComponent />}
  </div>
);

App.propTypes = {
  phoneDetail: PropTypes.object,
  loading: PropTypes.bool,
};

export default connect(mapStateToProps)(App);
