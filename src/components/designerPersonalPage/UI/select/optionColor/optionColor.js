import React from 'react';
import style from './optionColor.module.css'

const OptionColor = ({color}) => {
  return (
      <div className={style.opColor}>
        <input type={'checkbox'}/>
        <div style={{backgroundColor: `${color}`}} className={style.color}></div>
      </div>
  );
};

export default OptionColor;