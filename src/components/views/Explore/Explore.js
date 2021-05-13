import React from 'react';
import styles from './Explore.module.scss';
import PropTypes from 'prop-types';

import Pagination from '../../common/PaginationContainer/PaginationContainerContainer';

const Explore = ({ results }) => {
  return (
    <div className={styles.root}>
      <Pagination />
      <div>
        {results.map(({ id }) => (
          <p key={id}>{id}</p>
        ))}
      </div>
    </div>
  );
};

Explore.propTypes = {
  results: PropTypes.array,
};

Explore.defaultProps = {
  results: [],
};

export default Explore;
