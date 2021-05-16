import { connect } from 'react-redux';
import TopbarMobile from './TopbarMobile';
import { getTopbarData, removeFromCart } from '../../../redux/cartRedux';

const mapStateToProps = (state) => ({
  planets: getTopbarData(state),
});

const mapDispatchToProps = (dispatch) => ({
  remove: (arg) => dispatch(removeFromCart(arg)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopbarMobile);
