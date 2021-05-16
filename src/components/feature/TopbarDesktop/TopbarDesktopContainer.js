import { connect } from 'react-redux';
import TopbarDesktop from './TopbarDesktop';
import { removeFromCart } from '../../../redux/cartRedux';

// const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  remove: (arg) => dispatch(removeFromCart(arg)),
});

export default connect(null, mapDispatchToProps)(TopbarDesktop);
