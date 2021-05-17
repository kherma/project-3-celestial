import { connect } from 'react-redux';
import TshirtWidget from './TshirtWidget';
import { getBasePrice } from '../../../redux/extrasRedux';

const mapStateToProps = (state) => ({
  tshirtPrice: getBasePrice(state),
});

// const mapDispatchToProps = (dispatch) => ({
//   action: (arg) => dispatch(sampleActionCreator(arg)),
// });

export default connect(mapStateToProps)(TshirtWidget);
