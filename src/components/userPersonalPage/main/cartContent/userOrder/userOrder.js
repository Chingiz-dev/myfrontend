import React from 'react';
import style from './userOrder.module.css'

const UserOrder = ({numberOrder, date, price, statusOrder}) => {
  return (
      <div className={style.wrapper}>
        <div className={style.info}>
          <span>№ {numberOrder} от {date}</span>
          <span className={style.status}>{statusOrder}</span>
        </div>
        <div>
          {price} &#8381;
        </div>
      </div>
  );
};

export default UserOrder;