import React from 'react';
import style from './invisibleBackDrop.module.css'

const InvisibleBackDrop = ({onClickHandler}) => {
  return (
      <div className={style.invisibleBackDrop} onClick={onClickHandler}>
        
      </div>
  );
};

export default InvisibleBackDrop;