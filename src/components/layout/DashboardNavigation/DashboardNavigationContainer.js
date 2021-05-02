import { connect } from 'react-redux';
import DashboardNavigation from './DashboardNavigation';
import { getMenuLinks, toggleMenu } from '../../../redux/asideRedux';

const mapStateToProps = (state) => ({
  menuLinks: getMenuLinks(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleAside: () => dispatch(toggleMenu()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardNavigation);
