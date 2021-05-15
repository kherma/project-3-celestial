import { connect } from 'react-redux';
import PlanetProductDistance from './PlanetProductDistance';
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

export default connect(mapStateToProps, mapDispatchToProps)(PlanetProductDistance);
