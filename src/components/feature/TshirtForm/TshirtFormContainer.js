import { connect } from 'react-redux';
import TshirtForm from './TshirtForm';
import { addToExtras } from '../../../redux/extrasRedux';

// const mapStateToProps = (state) => ({
//   selector: sampleSelector(state),
// });

const mapDispatchToProps = (dispatch) => ({
  addExtras: (arg) => dispatch(addToExtras(arg)),
});

export default connect(null, mapDispatchToProps)(TshirtForm);
