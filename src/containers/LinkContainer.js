import { connect } from 'react-redux';
import { setVisibilityFilter, restorePhoneDetail } from '../actions';
import Link from '../components/Link';

const mapStateToProps = (state, ownProps) => ({
  inStock: ownProps.filter === state.visibilityFilter,
  phoneDetail: null,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
    dispatch(restorePhoneDetail({}));
  },
});

const LinkContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Link);

export default LinkContainer;
