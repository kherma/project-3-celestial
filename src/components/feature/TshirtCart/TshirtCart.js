import React, { useRef, useEffect } from 'react';
import styles from './TshirtCart.module.scss';
import PropTypes from 'prop-types';

import { FaTrash } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

import InputColor from '../../common/InputRadioColor/InputRadioColor';
import InputSize from '../../common/InputRadioSize/InputRadioSize';
import InputCounter from '../../common/InpitCounter/InpitCounter';

import TshirtView from '../../common/TshirtView/TshirtView';
import CurrancyDisplay from '../../common/CurrancyDisplay/CurrancyDisplay';

const TshirtCart = ({
  extras: { qunatity, color, size, id, planetStyles, price },
  remove,
  save,
}) => {
  const { register, handleSubmit, setValue, getValues, reset } = useForm();

  useEffect(() => {
    setValue('qunatity', qunatity);
    setValue('color', color);
    setValue('size', size);
    tshirt.current.style.backgroundColor = color;
  }, [setValue, qunatity, color, size]);

  const tshirt = useRef();

  const handleReset = () => {
    reset({ qunatity, color, size });
    tshirt.current.style.backgroundColor = color;
  };

  const handleForm = (data) => {
    handleReset();
    const submitData = { ...data, id, planetStyles };
    save(submitData);
  };
  return (
    <div className={styles.root}>
      <div className={styles.tshirtContainer}>
        <TshirtView planetStyles={planetStyles} size="small" tshirt={tshirt} />
      </div>
      <form
        className={styles.form}
        onSubmit={handleSubmit((data) => handleForm(data))}
      >
        <div className={styles.countPicker}>
          <InputCounter reg={register} set={setValue} get={getValues} />
        </div>

        <div className={styles.colorPicker}>
          <InputColor reg={register} value="#000" tshirt={tshirt} />
          <InputColor reg={register} value="#fff" tshirt={tshirt} />
          <InputColor reg={register} value="#6bf2c1" tshirt={tshirt} />
          <InputColor reg={register} value="#2279f2" tshirt={tshirt} />
          <InputColor
            reg={register}
            value="#f2e641"
            tshirt={tshirt}
            checked={true}
          />
          <InputColor reg={register} value="#d93280" tshirt={tshirt} />
        </div>
        <div className={styles.sizePicker}>
          <InputSize reg={register} value="xs" />
          <InputSize reg={register} value="s" />
          <InputSize reg={register} value="m" />
          <InputSize reg={register} value="l" />
          <InputSize reg={register} value="xl" />
        </div>

        <button className={styles.btnSubmit} type="submit">
          save
        </button>
      </form>
      <div className={styles.dataContainer}>
        <CurrancyDisplay amount={price} containerClass={styles.currancy} />
        <button className={styles.btnRemove} onClick={() => remove(id)}>
          <FaTrash className={styles.icon} />
        </button>
      </div>
    </div>
  );
};

TshirtCart.propTypes = {
  extras: PropTypes.object,
  remove: PropTypes.func,
  save: PropTypes.func,
};

TshirtCart.defaultProps = {
  extras: {},
};

export default TshirtCart;
