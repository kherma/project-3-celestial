import { connect } from 'react-redux';
import ModalBox from './ModalBox';
import { getData, setModal } from '../../../redux/modalRedux';

const mapStateToProps = (state) => ({
  data: getData(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggler: (arg) => dispatch(setModal(arg)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalBox);
