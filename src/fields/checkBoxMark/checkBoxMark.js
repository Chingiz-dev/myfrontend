import React from 'react';
import style from './checkBoxMark.module.css'

const CheckBoxMark = ({title}) => {
  return (
      <div className={style.checkbox}>
        <input type="checkbox" id={`${title}`}/>
        <label htmlFor={`${title}`}>{title}</label>
      </div>
  );
};

export default CheckBoxMark;