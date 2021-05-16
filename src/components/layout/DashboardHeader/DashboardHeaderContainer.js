import { connect } from 'react-redux';
import DashboardHeader from './DashboardHeader';
import { toggleMenu } from '../../../redux/asideRedux';
import { setExtrasData } from '../../../redux/extrasRedux';

const mapDispatchToProps = (dispatch) => ({
  toggleAside: () => dispatch(toggleMenu()),
  setExtras: () => dispatch(setExtrasData()),
});

export default connect(null, mapDispatchToProps)(DashboardHeader);
