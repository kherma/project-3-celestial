import { connect } from 'react-redux';
import Cart from './Cart';
import { getTopbarData } from '../../../redux/cartRedux';
import { getExtras } from '../../../redux/extrasRedux';

const mapStateToProps = (state) => ({
  cart: getTopbarData(state),
  extras: getExtras(state),
});

// const mapDispatchToProps = (dispatch) => ({
//   action: (arg) => dispatch(sampleActionCreator(arg)),
// });

export default connect(mapStateToProps)(Cart);
