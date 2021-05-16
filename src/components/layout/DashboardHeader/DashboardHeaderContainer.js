import { connect } from 'react-redux';
import DashboardHeader from './DashboardHeader';
import { toggleMenu } from '../../../redux/asideRedux';
import { setExtrasData } from '../../../redux/extrasRedux';
import { setCartData } from '../../../redux/cartRedux';

const mapDispatchToProps = (dispatch) => ({
  toggleAside: () => dispatch(toggleMenu()),
  setExtras: () => dispatch(setExtrasData()),
  setCart: () => dispatch(setCartData()),
});

export default connect(null, mapDispatchToProps)(DashboardHeader);
