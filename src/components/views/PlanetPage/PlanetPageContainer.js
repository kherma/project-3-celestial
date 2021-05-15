import { connect } from 'react-redux';
import PlanetPage from './PlanetPage';
import {
  getData,
  getLoading,
  fetchSingleFromApi,
} from '../../../redux/planetRedux';

const mapStateToProps = (state) => ({
  data: getData(state),
  loading: getLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: (arg) => dispatch(fetchSingleFromApi(arg)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlanetPage);
