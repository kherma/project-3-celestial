import { connect } from 'react-redux';
import Explore from './Explore';
import { getPaginatedResults } from '../../../redux/planetsRedux';
import { getData } from '../../../redux/modalRedux';

const mapStateToProps = (state) => ({
  results: getPaginatedResults(state),
  modal: getData(state),
});

// const mapDispatchToProps = (dispatch) => ({
//   action: (arg) => dispatch(sampleActionCreator(arg)),
// });

export default connect(mapStateToProps)(Explore);
