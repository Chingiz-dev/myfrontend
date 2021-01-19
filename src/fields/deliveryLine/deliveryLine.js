import React from 'react';
import style from './deliveryLine.module.css';

const DeliveryLine = () => {
  return (
      <div className={style.wrapper}>
        <div className={style.line}>
          Создано
        </div>
        <div className={style.line}>
          Идет пошив
        </div>
        <div className={style.line}>
          Передано в доставку
        </div>
        <div className={style.line}>
          Доставлено
        </div>
      </div>
  );
};

export default DeliveryLine;