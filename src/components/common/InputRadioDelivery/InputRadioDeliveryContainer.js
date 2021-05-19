import { connect } from 'react-redux';
import InputRadioDelivery from './InputRadioDelivery';
import { addToTotal } from '../../../redux/orderRedux';

const mapDispatchToProps = (dispatch) => ({
  addToTotal: (arg) => dispatch(addToTotal(arg)),
});

export default connect(null, mapDispatchToProps)(InputRadioDelivery);
