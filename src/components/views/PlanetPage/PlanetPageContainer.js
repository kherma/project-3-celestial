import { connect } from 'react-redux';
import PlanetPage from './PlanetPage';
import { getData, fetchSingleFromApi } from '../../../redux/planetRedux';

const mapStateToProps = (state) => ({
  data: getData(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: (arg) => dispatch(fetchSingleFromApi(arg)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlanetPage);
