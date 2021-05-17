import { connect } from 'react-redux';
import TopbarMobile from './TopbarMobile';
import { getTopbarData, removeFromCart } from '../../../redux/cartRedux';
import { getTotal } from '../../../redux/orderRedux';

const mapStateToProps = (state) => ({
  planets: getTopbarData(state),
  total: getTotal(state),
});

const mapDispatchToProps = (dispatch) => ({
  remove: (arg) => dispatch(removeFromCart(arg)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopbarMobile);
