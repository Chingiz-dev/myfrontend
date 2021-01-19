import React from 'react';
import style from './orderInfo.module.css'

const OrderInfo = ({date, number}) => {
  return (
      <div className={style.info}>
        <ul>
          <li>Доставка курьером</li>
          <li>Расчетный время доставки:{date}</li>
          <li>Трек-номер:{number}</li>
        </ul>
      </div>
  );
};

export default OrderInfo;