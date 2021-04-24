import { connect } from 'react-redux';
import { HomePage } from './HomePage';
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

const Container = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export { Container as HomePage };
