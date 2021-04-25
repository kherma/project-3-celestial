import { connect } from 'react-redux';
import {{pascalCase name}} from './{{pascalCase name}}';
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

export default connect(mapStateToProps, mapDispatchToProps)({{pascalCase name}});
