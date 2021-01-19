import React from 'react';
import style from './basketCart.module.css';
import CheckBoxMark from '../../../../fields/checkBoxMark/checkBoxMark';
import CartInfo from './cartInfo/cartInfo';

const BasketCart = ({title, size, color, colorText, price}) => {
  return (
      <div className={style.wrapper}>
        <div className={style.checkBox}>
          <CheckBoxMark title={' '}/>
        </div>
        <div className={style.infoWrap}>
          <img className={style.img}
               src={require('../../../../assets/img/Zara_2017 (10) 4.svg')}/>
          <div className={style.info}>
            <CartInfo
                title={title}
                size={size}
                color={color}
                colorText={colorText}
                price={price}
            />
          </div>
        </div>
      </div>
  );
};

export default BasketCart;