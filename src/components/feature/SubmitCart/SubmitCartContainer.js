import { connect } from 'react-redux';
import SubmitCart from './SubmitCart';
import {
  getDescription,
  addDescription,
  setDescription,
} from '../../../redux/orderRedux';

const mapStateToProps = (state) => ({
  description: getDescription(state),
});

const mapDispatchToProps = (dispatch) => ({
  newDescription: (arg) => dispatch(addDescription(arg)),
  loadDescription: (arg) => dispatch(setDescription(arg)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SubmitCart);
