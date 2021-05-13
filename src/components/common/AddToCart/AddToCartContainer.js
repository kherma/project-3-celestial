import { connect } from 'react-redux';
import AddToCart from './AddToCart';
import { getCart, addToCart, removeFromCart } from '../../../redux/cartRedux';

const mapStateToProps = (state) => ({
  cart: getCart(state),
});

const mapDispatchToProps = (dispatch) => ({
  add: (arg) => dispatch(addToCart(arg)),
  remove: (arg) => dispatch(removeFromCart(arg)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);
