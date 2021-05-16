import { connect } from 'react-redux';
import PlanetCart from './PlanetCart';
import { removeFromCart } from '../../../redux/cartRedux';

// const mapStateToProps = (state) => ({
//   selector: sampleSelector(state),
// });

const mapDispatchToProps = (dispatch) => ({
  remove: (arg) => dispatch(removeFromCart(arg)),
});

export default connect(null, mapDispatchToProps)(PlanetCart);
