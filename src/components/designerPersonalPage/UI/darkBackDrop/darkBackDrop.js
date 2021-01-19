import React from 'react';
import style from './darkBackDrop.module.css'

const DarkBackDrop = ({onClickHandler}) => {
  return (
      <div onClick={onClickHandler} className={style.darkBackDrop}>
      </div>
  );
};

export default DarkBackDrop;