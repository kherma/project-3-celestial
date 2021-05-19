import { connect } from 'react-redux';
import SubmitCart from './SubmitCart';
import { getDescription, addDescription } from '../../../redux/orderRedux';

const mapStateToProps = (state) => ({
  description: getDescription(state),
});

const mapDispatchToProps = (dispatch) => ({
  newDescription: (arg) => dispatch(addDescription(arg)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SubmitCart);
