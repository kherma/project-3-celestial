import React from 'react';
import styles from './TshirtForm.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';

import InputColor from '../../common/InputRadioColor/InputRadioColor';
import InputSize from '../../common/InputRadioSize/InputRadioSize';
import InputCounter from '../../common/InpitCounter/InpitCounter';

const TshirtForm = ({ className, tshirt }) => {
  const { register, handleSubmit, setValue, getValues, reset } = useForm();

  const handleReset = () => {
    reset({ qunatity: 1, color: '#000', size: 'm' });
    tshirt.current.style.backgroundColor = '#000';
  };

  const handleForm = (data) => {
    handleReset();
    console.log(data);
  };

  return (
    <div className={clsx(styles.root, className)}>
      <form
        className={styles.form}
        onSubmit={handleSubmit((data) => handleForm(data))}
      >
        <div className={styles.colorPicker}>
          <InputColor
            reg={register}
            value="#000"
            tshirt={tshirt}
            checked={true}
          />
          <InputColor reg={register} value="#fff" tshirt={tshirt} />
          <InputColor reg={register} value="#6bf2c1" tshirt={tshirt} />
          <InputColor reg={register} value="#2279f2" tshirt={tshirt} />
          <InputColor reg={register} value="#f2e641" tshirt={tshirt} />
          <InputColor reg={register} value="#d93280" tshirt={tshirt} />
        </div>
        <div className={styles.sizePicker}>
          <InputSize reg={register} value="xs" />
          <InputSize reg={register} value="s" />
          <InputSize reg={register} value="m" checked={true} />
          <InputSize reg={register} value="l" />
          <InputSize reg={register} value="xl" />
        </div>
        <div className={styles.countPicker}>
          <InputCounter reg={register} set={setValue} get={getValues} />
          <button className={styles.btnSubmit} type="submit">
            add
          </button>
        </div>
      </form>
    </div>
  );
};

TshirtForm.propTypes = {
  className: PropTypes.string,
  tshirt: PropTypes.object,
};

export default TshirtForm;
