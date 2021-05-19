import React from 'react';
import styles from './SubmitCart.module.scss';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import { useHistory } from 'react-router-dom';

import ArticlePaper from '../../common/ArticlePaper/ArticlePaper';

const SubmitCart = ({ description, newDescription }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const history = useHistory();

  const handleForm = (data) => {
    const newData = {
      ...data,
      description: data.description.trim(),
    };
    newDescription(newData);
    history.push('/order');
  };

  return (
    <ArticlePaper className={styles.root}>
      <form
        className={styles.form}
        onSubmit={handleSubmit((data) => handleForm(data))}
      >
        {errors.description?.type === 'required' && (
          <small className={styles.message}>{errors.description.message}</small>
        )}
        {errors.description?.type === 'minLength' && (
          <small className={styles.message}>{errors.description.message}</small>
        )}
        {errors.description?.type === 'validate' && (
          <small className={styles.message}>Remove white spaces</small>
        )}
        <input
          type="text"
          defaultValue={description}
          placeholder="Please provide description"
          className={styles.description}
          {...register('description', {
            required: { value: true, message: 'Description is required' },
            validate: (value) => value.trim().length >= 5,
            minLength: { value: 5, message: 'min 5 characters' },
          })}
        />

        <button className={styles.btnCheckout}>checkout</button>
      </form>
    </ArticlePaper>
  );
};

SubmitCart.propTypes = {
  description: PropTypes.string,
  newDescription: PropTypes.func,
};

export default SubmitCart;
