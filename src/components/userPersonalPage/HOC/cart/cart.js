import React from 'react';
import style from './cart.module.css';

const Cart = ({children, title, imgUrl, width, height, marginTop, quantityNumber}) => {
  return (
      <div
          style={{
            width: `${width}`,
            height: `${height}`,
            marginTop: `${marginTop}`,
          }}
          className={style.cart}>
        <div className={style.title}>
          <img src={imgUrl}/>
          <span>
            {title} {quantityNumber}
          </span>
        </div>
        <div className={style.content}>
          {children}
        </div>
      </div>
  );
};

export default Cart;