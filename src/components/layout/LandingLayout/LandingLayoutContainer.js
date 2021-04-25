import { connect } from 'react-redux';
import { LandingLayout } from './LandingLayout';
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

const Container = connect(mapStateToProps, mapDispatchToProps)(LandingLayout);

export { Container as LandingLayout };
