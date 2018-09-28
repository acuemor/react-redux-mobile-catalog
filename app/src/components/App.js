import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './Header';
import PhoneListContainer from '../containers/PhoneListContainer';
import ModalContainer from '../containers/ModalContainer';
import SpinnerComponent from './SpinnerComponent';

const mapStateToProps = state => ({
  loading: state.phones.loading,
});

const App = ({ loading }) => (
  <div>
    {!loading && <Header />}
    <ModalContainer />
    <PhoneListContainer />
    {loading && <SpinnerComponent />}
  </div>
);

App.propTypes = {
  loading: PropTypes.bool,
};

export default connect(mapStateToProps)(App);
