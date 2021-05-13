import React, { useEffect } from 'react';
import styles from './PaginationContainer.module.scss';
import PropTypes from 'prop-types';

import { useForm } from 'react-hook-form';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const PaginationContainer = ({
  totalPages,
  currentPage,
  changePage,
  container,
}) => {
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    setValue('page', currentPage);
  }, [setValue, currentPage]);

  const goToTop = () => {
    container.current.scrollTo(0, 0);
  };

  return (
    <div className={styles.root}>
      <div className={styles.buttonContainer}>
        {currentPage > 1 && (
          <button
            className={styles.btnChangePage}
            onClick={() => {
              changePage(currentPage - 1);
              container && goToTop();
            }}
          >
            <BsChevronLeft className={styles.icon} />
          </button>
        )}
      </div>
      <div className={styles.inputContainer}>
        <form
          className={styles.form}
          onSubmit={handleSubmit((data) => changePage(data.page))}
        >
          <input
            className={styles.input}
            defaultValue={currentPage}
            type="number"
            {...register('page', {
              valueAsNumber: true,
              required: true,
              min: 1,
              max: { totalPages },
            })}
          />
        </form>
        <p className={styles.text}>of {totalPages}</p>
      </div>
      <div className={styles.buttonContainer}>
        {currentPage < totalPages && (
          <button
            className={styles.btnChangePage}
            onClick={() => {
              changePage(currentPage + 1);
              container && goToTop();
            }}
          >
            <BsChevronRight className={styles.icon} />
          </button>
        )}
      </div>
    </div>
  );
};

PaginationContainer.propTypes = {
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
  changePage: PropTypes.func,
  container: PropTypes.object,
};

export default PaginationContainer;
