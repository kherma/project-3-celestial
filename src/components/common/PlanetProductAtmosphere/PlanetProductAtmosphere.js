import React from 'react';
import styles from './PlanetProductAtmosphere.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import ArticlePaper from '../ArticlePaper/ArticlePaper';

const PlanetProductAtmosphere = ({ className, atmosphere, ozoneLayer }) => {
  return (
    <ArticlePaper className={clsx(styles.root, className)}>
      {atmosphere.map((item) =>
        item === 'stratosphere' && ozoneLayer ? (
          <div key={item} className={styles.stratosphere}>
            <p className={styles.text}>{item}</p>
            <span className={styles.ozone}>ozone</span>
          </div>
        ) : (
          <p
            key={item}
            className={clsx(
              item === 'troposphere' && styles.troposphere,
              item === 'stratosphere' && styles.stratosphere,
              item === 'mesosphere' && styles.mesosphere,
              item === 'thermosphere' && styles.thermosphere,
              item === 'exosphere' && styles.exosphere
            )}
          >
            {item}
          </p>
        )
      )}
    </ArticlePaper>
  );
};

PlanetProductAtmosphere.propTypes = {
  className: PropTypes.string,
  atmosphere: PropTypes.array,
  ozoneLayer: PropTypes.bool,
};

PlanetProductAtmosphere.defaultProps = {
  atmosphere: [],
  ozoneLayer: false,
};

export default PlanetProductAtmosphere;
