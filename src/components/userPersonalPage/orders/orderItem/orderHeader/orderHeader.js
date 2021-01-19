import React from 'react';
import style from './orderHeader.module.css'

const OrderHeader = ({orderNumber, status, price, date}) => {
  return (
      <div className={style.orderHeader}>
        <div>
          Заказ № {orderNumber} от {date}
        </div>
        <div className={style.price}>
          <div>{price} &#8381;</div>
          <div className={style.status}>{status}</div>
        </div>
      </div>
  );
};

export default OrderHeader;