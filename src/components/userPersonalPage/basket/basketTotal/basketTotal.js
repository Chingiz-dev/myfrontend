import React from 'react';
import style from './basketTotal.module.css';

const BasketTotal = ({totalProduct}) => {
  return (
      <div className={style.wrapper}>
        <div className={style.header}>
          <div className={style.row1}>
            <div style={{fontWeight: 'bold'}}>Ваша корзина</div>
            <div>{totalProduct} товара</div>
          </div>
          <div className={style.row2}>
          </div>
        </div>
      </div>
  );
};

export default BasketTotal;