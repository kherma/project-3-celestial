import { connect } from 'react-redux';
import Cart from './Cart';
import { getTopbarData } from '../../../redux/cartRedux';

const mapStateToProps = (state) => ({
  cart: getTopbarData(state),
});

// const mapDispatchToProps = (dispatch) => ({
//   action: (arg) => dispatch(sampleActionCreator(arg)),
// });

export default connect(mapStateToProps)(Cart);
