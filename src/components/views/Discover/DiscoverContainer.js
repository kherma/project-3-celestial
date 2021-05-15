import { connect } from 'react-redux';
import Discover from './Discover';
import { getData, fetchRandomFromApi } from '../../../redux/seedRedux';

const mapStateToProps = (state) => ({
  data: getData(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: (arg) => dispatch(fetchRandomFromApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Discover);
