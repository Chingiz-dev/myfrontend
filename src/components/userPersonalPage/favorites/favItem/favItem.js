import React from 'react';
import style from './favItem.module.css'
import FavItemHeader from './favItemHeader/favItemHeader';
import FavItemFooter from './favItemFooter/favItemFooter';

const FavItem = ({price, productTitle, designer}) => {
  return (
      <div className={style.wrapper}>
        <img className={style.img} src={require('../../../../assets/img/Zara_2017 (10) 4.svg')}/>
        <div className={style.content}>
          <FavItemHeader price={price} productTitle={productTitle} designer={designer}/>
          <FavItemFooter/>
        </div>
      </div>
  );
};

export default FavItem;