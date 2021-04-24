import { connect } from 'react-redux';
import { Settings } from './Settings';
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

const Container = connect(mapStateToProps, mapDispatchToProps)(Settings);

export { Container as Settings };
