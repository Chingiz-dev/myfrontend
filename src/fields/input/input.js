import React from 'react';
import style from './input.module.css';

const Input = ({type, label, width}) => {
  return (
      <div style={{
        width: `${width}`
      }} className={style.wrapper}>
        <input className={style.input} type={type} placeholder={' '}/>
        <label className={style.lab}>{label}</label>
      </div>
  );
};

export default Input;