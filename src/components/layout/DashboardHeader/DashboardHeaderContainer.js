import { connect } from 'react-redux';
import DashboardHeader from './DashboardHeader';
import { toggleMenu } from '../../../redux/asideRedux';
import { setExtrasData } from '../../../redux/extrasRedux';
import { setCartData } from '../../../redux/cartRedux';
import { setDescription } from '../../../redux/orderRedux';

const mapDispatchToProps = (dispatch) => ({
  toggleAside: () => dispatch(toggleMenu()),
  setExtras: () => dispatch(setExtrasData()),
  setCart: () => dispatch(setCartData()),
  setDescription: () => dispatch(setDescription()),
});

export default connect(null, mapDispatchToProps)(DashboardHeader);
