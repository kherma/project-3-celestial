import { connect } from 'react-redux';
import PaginationContainer from './PaginationContainer';
import {
  getNumberOfPages,
  getCurrentPage,
  changeCurrentPage,
} from '../../../redux/planetsRedux';

const mapStateToProps = (state) => ({
  totalPages: getNumberOfPages(state),
  currentPage: getCurrentPage(state),
});

const mapDispatchToProps = (dispatch) => ({
  changePage: (arg) => dispatch(changeCurrentPage(arg)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginationContainer);
