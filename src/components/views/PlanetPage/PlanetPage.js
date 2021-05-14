import React, { useEffect } from 'react';
import styles from './PlanetPage.module.scss';
import PropTypes from 'prop-types';

const PlanetPage = ({ location: { state }, data, setCurrenID }) => {
  useEffect(() => {
    setCurrenID(state);
  }, [state, setCurrenID]);

  return (
    <div className={styles.root}>
      <h2>PlanetPage</h2>
    </div>
  );
};

PlanetPage.propTypes = {
  location: PropTypes.object,
  data: PropTypes.object,
  setCurrenID: PropTypes.func,
};

export default PlanetPage;
