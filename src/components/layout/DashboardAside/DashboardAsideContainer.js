import { connect } from 'react-redux';
import DashboardAside from './DashboardAside';
import { getMenuStatus, toggleMenu } from '../../../redux/asideRedux';

const mapStateToProps = (state) => ({
  menuStatus: getMenuStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleAside: () => dispatch(toggleMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardAside);
