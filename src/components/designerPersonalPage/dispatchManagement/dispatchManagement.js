import React from 'react';
import style from './dispatchManagement.module.css';
import {Search} from '../../main/childs/childs/Search';
import ItemOrder from './itemOrder/itemOrder';
import ButtonShowElse from '../UI/buttonShowElse/buttonShowElse';

const orders = [
  {
    status: 'Ожидает сборки',
    date: '31.10.2020  14.05',
    numberOrder: '238974298346',
    details: {vendorCode: '1шт артикул 88888', name: 'Рубашка белая'},
    price: '5000',
  },
  {
    status: 'Идет доставка',
    date: '31.10.2020  14.05',
    numberOrder: '238974298346',
    details: {vendorCode: '1шт артикул 88888', name: 'Рубашка белая'},
    price: '5000',
  },
  {
    status: 'Идет пошив',
    date: '31.10.2020  14.05',
    numberOrder: '238974298346',
    details: {vendorCode: '1шт артикул 88888', name: 'Рубашка белая'},
    price: '5000',
  },
  {
    status: 'Ожидает сборки',
    date: '31.10.2020  14.05',
    numberOrder: '238974298346',
    details: {vendorCode: '1шт артикул 88888', name: 'Рубашка белая'},
    price: '5000',
  },
  {
    status: 'Доставлено',
    date: '31.10.2020  14.05',
    numberOrder: '238974298346',
    details: {vendorCode: '1шт артикул 88888', name: 'Рубашка белая'},
    price: '5000',
  },
];

const Orders = () => {

  const renderOrders = () => {
    return orders.map((order, index) => {
      return (
          <ItemOrder
              status={order.status}
              date={order.date}
              numberOrder={order.numberOrder}
              details={order.details}
              price={order.price}
          />
      );
    });
  };

  return (
      <div className={style.orderBLock}>
        <div className={style.title}><h2>Заказы</h2></div>
        <div className={style.scroll}>


          <div className={style.searchAndCategory}>
            <Search
                color={'black'}
            />
            <div className={style.blockCategory}>
              <div className={style.item1}>
                Статус
              </div>
              <div className={style.item2}>
                Принят в обработки &nbsp; &#x2193;
              </div>
              <div className={style.item3}>
                Номер заказа
              </div>
              <div className={style.item4}>
                Детали
              </div>
              <div className={style.item5}>
                Цена
              </div>
              <div className={style.item6}>
                Действие
              </div>
            </div>
            <div className={style.plug}>

            </div>
          </div>

          {renderOrders()}
        </div>

        <ButtonShowElse/>
        <div>Страницы</div>
      </div>
  );
};

export default Orders;