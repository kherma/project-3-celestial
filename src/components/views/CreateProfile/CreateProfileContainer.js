import { connect } from 'react-redux';
import { CreateProfile } from './CreateProfile';
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

const Container = connect(mapStateToProps, mapDispatchToProps)(CreateProfile);

export { Container as CreateProfile };
