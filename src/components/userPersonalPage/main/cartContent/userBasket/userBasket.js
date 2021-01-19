import React from 'react';
import style from './userBasket.module.css'

const UserBasket = ({titleProduct, designer, price}) => {
  return (
      <div className={style.wrapper}>
        <div className={style.info}>
          <img className={style.img} src={require('../../../../../assets/img/Zara_2017 (10) 4.svg')}/>
          <div className={style.orderInfo}>
            <span style={{fontWeight: '600'}}>{titleProduct}</span>
            <span>{designer}</span>
          </div>
        </div>
        {price} &#8381;
      </div>
  );
};

export default UserBasket;