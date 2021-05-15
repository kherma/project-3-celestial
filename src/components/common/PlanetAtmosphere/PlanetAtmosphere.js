import React from 'react';
import styles from './PlanetAtmosphere.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const PlanetAtmosphere = ({ atmosphere, ozoneLayer }) => {
  return (
    <div className={styles.root}>
      {atmosphere.map((item, index) => (
        <p
          className={clsx(
            item === 'troposphere' && styles.troposphere,
            item === 'stratosphere' && styles.stratosphere,
            item === 'mesosphere' && styles.mesosphere,
            item === 'thermosphere' && styles.thermosphere,
            item === 'exosphere' && styles.exosphere
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
