import React from 'react';
import style from './favItemHeader.module.css'

const FavItemHeader = ({price, productTitle, designer}) => {
  return (
      <div className={style.wrapper}>
        <div className={style.info}>
          <span className={style.title}>{productTitle}</span>
          <span className={style.designer}>{designer}</span>
        </div>
        <div className={style.price}>{price} &#8381;</div>
      </div>
  );
};

export default FavItemHeader;