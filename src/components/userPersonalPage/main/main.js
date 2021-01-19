import React from 'react';
import style from './main.module.css';
import Cart from '../HOC/cart/cart';
import UserOrder from './cartContent/userOrder/userOrder';
import UserBasket from './cartContent/userBasket/userBasket';

const Main = () => {
  return (
      <div className={style.wrapper}>
        <h2 className={style.title}>Личный кабинет</h2>
        <div className={style.carts}>
          <Cart
              imgUrl={require('../../../assets/img/box.svg')}
              title={'Заказы'}
              width={'100%'}
              quantityNumber={'5'}
              height={'372px'}
          >
            <UserOrder date={'date'} price={'5000'} numberOrder={'777845648'}
                       statusOrder={'test'}/>
          </Cart>
          <Cart
              imgUrl={require('../../../assets/img/briefcase.svg')}
              title={'Корзина'}
              height={'334px'}
              marginTop={'30px'}
              quantityNumber={'6'}
          >
            <UserBasket
                designer={'designer'}
                titleProduct={'test'}
                price={'5000'}
            />
          </Cart>

          <Cart
              imgUrl={require('../../../assets/img/heart.svg')}
              title={'Корзина'}
              height={'334px'}
              marginTop={'30px'}
              quantityNumber={'6'}
          >
            <UserBasket
                designer={'designer'}
                titleProduct={'test'}
                price={'5000'}
            />
          </Cart>
        </div>
      </div>
  );
};

export default Main;