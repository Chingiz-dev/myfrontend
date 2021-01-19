import React from 'react';
import style from './orderItem.module.css';
import OrderHeader from './orderHeader/orderHeader';
import OrderContent from './orderContent/orderContent';

const OrderItem = ({orderNumber, price, status, date}) => {
  return (
      <div className={style.orderWrap}>
        <OrderHeader
          orderNumber={orderNumber}
          price={price}
          status={status}
          date={date}
        />
        <OrderContent/>
      </div>
  );
};

export default OrderItem;