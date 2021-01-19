import React from 'react';
import style from './basket.module.css';
import CheckBoxMark from '../../../fields/checkBoxMark/checkBoxMark';
import BasketCart from './basketCart/basketCart';
import BasketTotal from './basketTotal/basketTotal';
import {Link} from 'react-router-dom';

const Basket = () => {
  return (
      <div className={style.basket}>
        <h2>Корзина {}</h2>
        <Link to={'/userPage/main'}>
          <div className={style.link}>&#8592; Назад</div>
        </Link>
        <div className={style.content}>
          <div className={style.carts}>
            <div className={style.header}>
              <CheckBoxMark
                  title={'Выбрать все'}
              />
            </div>
            <BasketCart
                title={'test'}
                size={'s'}
                colorText={'Розовый'}
                color={'EE2A7B'}
                price={'5000'}
            />
          </div>
          {/*<BasketTotal*/}
          {/*    totalProduct={'12'}*/}
          {/*/>*/}
        </div>
      </div>
  );
};

export default Basket;