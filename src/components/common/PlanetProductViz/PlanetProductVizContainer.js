import { connect } from 'react-redux';
import PlanetProductViz from './PlanetProductViz';
import {
  sampleSelector,
  sampleActionCreator,
} from '../../../redux/globalRedux';

const mapStateToProps = (state) => ({
  selector: sampleSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  action: (arg) => dispatch(sampleActionCreator(arg)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlanetProductViz);
