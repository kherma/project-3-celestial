import { connect } from 'react-redux';
import DashboardLayout from './DashboardLayout';
import { getData } from '../../../redux/modalRedux';

const mapStateToProps = (state) => ({
  modal: getData(state),
});

export default connect(mapStateToProps)(DashboardLayout);
