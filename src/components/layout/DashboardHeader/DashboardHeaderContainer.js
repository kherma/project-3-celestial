import { connect } from 'react-redux';
import DashboardHeader from './DashboardHeader';
import { toggleMenu } from '../../../redux/asideRedux';

const mapDispatchToProps = (dispatch) => ({
  toggleAside: () => dispatch(toggleMenu()),
});

export default connect(null, mapDispatchToProps)(DashboardHeader);
