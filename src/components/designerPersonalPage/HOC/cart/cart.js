import React from 'react';
import style from './cart.module.css'

const Cart = ({children, title}) => {
  return (
      <div className={style.cart}>
        <div className={style.title}>
          <div>{title}</div>
        </div>
        {children}
      </div>
  );
};

export default Cart;