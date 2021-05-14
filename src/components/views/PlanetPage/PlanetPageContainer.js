import { connect } from 'react-redux';
import PlanetPage from './PlanetPage';
import { getData, setCurrent } from '../../../redux/planetRedux';

const mapStateToProps = (state) => ({
  data: getData(state),
});

const mapDispatchToProps = (dispatch) => ({
  setCurrenID: (arg) => dispatch(setCurrent(arg)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlanetPage);
