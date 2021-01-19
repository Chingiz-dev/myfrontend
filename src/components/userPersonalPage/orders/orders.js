import React from 'react';
import style from './orders.module.css'
import OrderItem from './orderItem/orderItem';

const Orders = () => {
  return (
      <div className={style.orders}>
        <h2>Заказы</h2>
        <OrderItem
            price={'5000'}
            status={'test'}
            orderNumber={'test'}
            date={'testDate'}
        />
      </div>
  );
};

export default Orders;