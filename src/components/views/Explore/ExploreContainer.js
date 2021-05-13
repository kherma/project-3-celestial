import { connect } from 'react-redux';
import Explore from './Explore';
import { getPaginatedResults } from '../../../redux/planetsRedux';

const mapStateToProps = (state) => ({
  results: getPaginatedResults(state),
});

// const mapDispatchToProps = (dispatch) => ({
//   action: (arg) => dispatch(sampleActionCreator(arg)),
// });

export default connect(mapStateToProps)(Explore);
