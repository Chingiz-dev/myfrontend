import React from 'react';
import style from './input.module.css'

const Input = ({id, label}) => {
  return (
      <div className={style.item}>
        <label className={style.label} htmlFor={id}>{label}</label>
        <input
          id={id}
          className={style.input}
        />
      </div>
  );
};

export default Input;