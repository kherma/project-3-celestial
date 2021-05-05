import React from 'react';
import styles from './PlanetAtmosphere.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const PlanetAtmosphere = ({ atmosphere, ozoneLayer }) => {
  return (
    <div className={styles.root}>
      {!atmosphere.length && <h2 style={{ color: 'black' }}>...</h2>}
      {atmosphere.map((item, index) => (
        <p
          className={clsx(
            item === 'troposphere' && styles.troposphereCold,
            item === 'stratosphere' && styles.stratosphereCold,
            item === 'mesosphere' && styles.mesosphereCold,
            item === 'thermosphere' && styles.thermosphereCold,
            item === 'exosphere' && styles.exosphereCold
          )}
          key={index}
        >
          <span
            className={clsx(
              item === 'stratosphere' && ozoneLayer ? styles.ozone : styles.hide
            )}
          >
            ozone
          </span>
          {item}
        </p>
      ))}
    </div>
  );
};

PlanetAtmosphere.propTypes = {
  atmosphere: PropTypes.array,
  ozoneLayer: PropTypes.bool,
};

PlanetAtmosphere.defaultProps = {
  atmosphere: [],
};

export default PlanetAtmosphere;
