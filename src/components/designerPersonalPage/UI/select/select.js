import React from 'react';
import style from './select.module.css'
import OptionColor from './optionColor/optionColor';

const Select = ({label, id, options, color}) => {

  const renderOptions = () => {
    return options.map((item, index) => {
      return(
          <option key={index + item}>
            {item.name}
          </option>
      )
    })
  }

  return (
      <div className={style.selectBlock}>
        <label className={style.label} htmlFor={id}>{label}</label>
        <select className={style.select} id={id}>
          {renderOptions()}
        </select>
      </div>
  );
};

export default Select;