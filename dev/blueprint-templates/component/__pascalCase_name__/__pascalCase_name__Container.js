import { connect } from 'react-redux';
import { {{pascalCase name}} } from './{{pascalCase name}}';
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

const Container = connect(mapStateToProps, mapDispatchToProps)({{pascalCase name}});

export { Container as {{pascalCase name}} };
