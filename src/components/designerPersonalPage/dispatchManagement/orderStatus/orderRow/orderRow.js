import React from 'react';
import style from './orderRow.module.css'

const OrderRow = ({title, value, color}) => {
  return (
      <div className={style.row}>
        <div className={style.title}>{title}</div>
        <div className={style.value}>
          {color ? <div
              style={{backgroundColor: `${color}`}}
              className={style.color}>
          </div> : null}
          {value}
        </div>
      </div>
  );
};

export default OrderRow;