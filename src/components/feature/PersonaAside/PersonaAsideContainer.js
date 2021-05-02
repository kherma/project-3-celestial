import { connect } from 'react-redux';
import PersonaAside from './PersonaAside';
import { getUserData, toggleMenu } from '../../../redux/asideRedux';

const mapStateToProps = (state) => ({
  userData: getUserData(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleMenu: () => dispatch(toggleMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonaAside);
