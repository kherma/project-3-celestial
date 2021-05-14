import { connect } from 'react-redux';
import Explore from './Explore';
import {
  getPaginatedResults,
  fetchAllFromAPI,
} from '../../../redux/planetsRedux';
import { getData } from '../../../redux/modalRedux';

const mapStateToProps = (state) => ({
  results: getPaginatedResults(state),
  modal: getData(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: (arg) => dispatch(fetchAllFromAPI(arg)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Explore);
