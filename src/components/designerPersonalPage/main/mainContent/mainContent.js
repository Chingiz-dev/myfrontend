import React from 'react';
import style from './mainContent.module.css';
import Cart from '../../HOC/cart/cart';
import StatusCart from './statusCart/statusCart';
import CartContent from './cartContent/cartContent';
import SimpleRating from './ratingStar/ratingStar';

const rows = [
  {title: 'Упаковывается', value: 1},
  {title: 'Отправено покупателю', value: 0},
  {title: 'Доставлено', value: 5},
  {title: 'Отменен', value: 2},
];

const rows2 = [
  {title: 'На балансе', value: 15222},
  {title: 'Ожидает начисления', value: 0},
  {title: 'Возврат', value: 0},
  {title: 'За все время', value: 15222},
];

const rows3 = [
  {title: 'Все товары', value: 10},
  {title: 'К продаже', value: 5},
  {title: 'Коллекции', value: 1},
];

const MainContent = () => {
  return (
      <div>
        <div className={style.title}><h2>Главное</h2></div>
        <div className={style.content}>
          <div className={style.cartPad}>
          <Cart title={'Статус'}>
            <StatusCart/>
          </Cart>
        </div>
          <div className={style.cartPad}>
            <Cart title={'Заказы на сегодня'}>
              <CartContent
                  rows={rows}
              />
            </Cart>
          </div>
          <div className={style.cartPad}>
            <Cart title={'Рейтинг'}>
              <div className={style.rating}>
                <span>Средняя оценка</span>
                <SimpleRating/>
              </div>
              <div className={style.rating}>
                <span>Количество отзывов</span>
                <div>12</div>
              </div>
            </Cart>
          </div>
          <div className={style.cartPad}>
          <Cart title={'Количество товаров'}>
            <CartContent
                rows={rows3}
            />
          </Cart>
          </div>
          <div className={style.cartPad}>
            <Cart title={'Финансы'}>
              <CartContent
                  rows={rows2}
              />
            </Cart>
          </div>
        </div>
      </div>
  );
};

export default MainContent;