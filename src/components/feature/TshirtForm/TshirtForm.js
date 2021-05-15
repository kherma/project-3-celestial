import React, { useRef } from 'react';
import styles from './TshirtForm.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';

import InputRadioColor from '../../common/InputRadioColor/InputRadioColor';

const TshirtForm = ({ className }) => {
  const { register, handleSubmit } = useForm();

  const handleForm = (data) => {
    console.log(data);
  };

  return (
    <div className={clsx(styles.root, className)}>
      <form
        className={styles.form}
        onSubmit={handleSubmit((data) => handleForm(data))}
      >
        <div className={styles.colorPicker}>
          <InputRadioColor reg={register} value="#000" />
          <InputRadioColor reg={register} value="#fff" />
          <InputRadioColor reg={register} value="#6bf2c1" />
          <InputRadioColor reg={register} value="#2279f2" />
          <InputRadioColor reg={register} value="#f2e641" />
          <InputRadioColor reg={register} value="#d93280" />
        </div>
      </form>
    </div>
  );
};

TshirtForm.propTypes = {
  className: PropTypes.string,
};

export default TshirtForm;
