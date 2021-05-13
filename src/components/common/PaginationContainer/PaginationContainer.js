import React, { useEffect } from 'react';
import styles from './PaginationContainer.module.scss';
import PropTypes from 'prop-types';

import { useForm } from 'react-hook-form';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const PaginationContainer = ({ totalPages, currentPage, changePage }) => {
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    setValue('page', currentPage);
  }, [setValue, currentPage]);

  return (
    <div className={styles.root}>
      <div className={styles.buttonContainer}>
        {currentPage > 1 && (
          <button
            className={styles.btnChangePage}
            onClick={() => changePage(currentPage - 1)}
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
              max: 14,
            })}
          />
        </form>
        <p className={styles.text}>of {totalPages}</p>
      </div>
      <div className={styles.buttonContainer}>
        {currentPage < totalPages && (
          <button
            className={styles.btnChangePage}
            onClick={() => changePage(currentPage + 1)}
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
};

export default PaginationContainer;
