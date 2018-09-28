import { connect } from 'react-redux';
import ModalComponent from '../components/ModalComponent';
import { closeModal } from '../actions/index';

const mapStateToProps = state => ({
  title: state.modal.title,
  content: state.modal.content,
  close: state.modal.close,
});

const mapDispatchToProps = dispatch => ({
  closeModalHandler: () => {
    dispatch(closeModal());
  },
});

const ModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalComponent);

export default ModalContainer;
