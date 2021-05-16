import { connect } from 'react-redux';
import PlanetCart from './PlanetCart';
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

export default connect(mapStateToProps, mapDispatchToProps)(PlanetCart);
