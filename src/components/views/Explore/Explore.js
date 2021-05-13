import React, { useRef } from 'react';
import styles from './Explore.module.scss';
import PropTypes from 'prop-types';

import ArticlePaper from '../../common/ArticlePaper/ArticlePaper';

import Pagination from '../../common/PaginationContainer/PaginationContainerContainer';
import PlanetItem from '../../common/PlanetListItem/PlanetListItem';

const Explore = ({ results }) => {
  const scrollable = useRef();

  return (
    <div className={styles.root}>
      <div className={styles.gridContainer} ref={scrollable}>
        <ArticlePaper>
          <div className={styles.pagination}>
            <Pagination container={scrollable} />
          </div>
          <div className={styles.resultsContainer}>
            {results.map((data) => (
              <PlanetItem key={data.id} data={data} />
            ))}
          </div>
          <div className={styles.pagination}>
            <Pagination container={scrollable} />
          </div>
        </ArticlePaper>
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
