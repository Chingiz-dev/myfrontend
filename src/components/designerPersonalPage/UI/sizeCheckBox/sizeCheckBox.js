import React from 'react';
import style from './sizeCheckBox.module.css';

const SizeCheckBox = ({id, title}) => {
  return (
      <div className={style.block}>
          <input
              id={id}
              className={style.check}
              type={'checkbox'}
          />
        <label className={style.label} htmlFor={id}>{title}</label>
        <input placeholder={'Кол.'} className={style.quantity}/>
      </div>
  );
};

export default SizeCheckBox;