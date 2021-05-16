import React, { useRef, useEffect } from 'react';
import styles from './Explore.module.scss';
import PropTypes from 'prop-types';

import ArticlePaper from '../../common/ArticlePaper/ArticlePaper';
import Pagination from '../../common/PaginationContainer/PaginationContainerContainer';
import PlanetItem from '../../common/PlanetListItem/PlanetListItem';

const Explore = ({ results, modal: { show }, fetchData }) => {
  const scrollable = useRef();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className={styles.root}>
      <div className={styles.gridContainer} ref={scrollable}>
        <ArticlePaper>
          <div className={styles.pagination}>
            <Pagination container={scrollable} />
          </div>
        </ArticlePaper>

        <div className={styles.resultsContainer}>
          {results.map((data) => (
            <ArticlePaper key={data._id}>
              <PlanetItem data={data} />
            </ArticlePaper>
          ))}
        </div>
        <ArticlePaper>
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
  modal: PropTypes.object,
  fetchData: PropTypes.func,
};

Explore.defaultProps = {
  results: [],
  modal: {},
};

export default Explore;
