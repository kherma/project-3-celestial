import { connect } from 'react-redux';
import OrderPage from './OrderPage';
import { getData, getTotal } from '../../../redux/orderRedux';
import { getCart } from '../../../redux/cartRedux';
import { getExtras } from '../../../redux/extrasRedux';

const mapStateToProps = (state) => ({
  orderData: getData(state),
  total: getTotal(state),
  cartData: getCart(state),
  extrasData: getExtras(state),
});

// const mapDispatchToProps = (dispatch) => ({
//   action: (arg) => dispatch(sampleActionCreator(arg)),
// });

export default connect(mapStateToProps)(OrderPage);
