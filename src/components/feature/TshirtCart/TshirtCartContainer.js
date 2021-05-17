import { connect } from 'react-redux';
import TshirtCart from './TshirtCart';
import {
  removeFromExtras,
  saveExtrasChanges,
} from '../../../redux/extrasRedux';

// const mapStateToProps = (state) => ({
//   selector: sampleSelector(state),
// });

const mapDispatchToProps = (dispatch) => ({
  remove: (arg) => dispatch(removeFromExtras(arg)),
  save: (arg) => dispatch(saveExtrasChanges(arg)),
});

export default connect(null, mapDispatchToProps)(TshirtCart);
