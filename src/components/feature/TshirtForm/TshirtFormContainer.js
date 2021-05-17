import { connect } from 'react-redux';
import TshirtForm from './TshirtForm';
import { addToExtras } from '../../../redux/extrasRedux';
import { setModal } from '../../../redux/modalRedux';
// const mapStateToProps = (state) => ({
//   selector: sampleSelector(state),
// });

const mapDispatchToProps = (dispatch) => ({
  addExtras: (arg) => dispatch(addToExtras(arg)),
  modal: (arg) => dispatch(setModal(arg)),
});

export default connect(null, mapDispatchToProps)(TshirtForm);
