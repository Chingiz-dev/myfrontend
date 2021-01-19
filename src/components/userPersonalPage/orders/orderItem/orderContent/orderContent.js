import React from 'react';
import style from './orderContent.module.css';
import DeliveryLine from '../../../../../fields/deliveryLine/deliveryLine';
import OrderInfo from './orderInfo/orderInfo';

const OrderContent = () => {
  return (
      <div className={style.content}>
        <div>
          <img className={style.img}
               src={require('../../../../../assets/img/Zara_2017 (10) 4.svg')}/>
        </div>
        <div className={style.info}>
          <DeliveryLine/>
          <OrderInfo
              date={'test'}
              number={'test'}
          />
        </div>
      </div>
  );
};

export default OrderContent;