import React from 'react';
import style from './financePage.module.css';
import ItemOrder from './item/item';
import Summ from './sumItem/summItem';
import ButtonShowElse from '../UI/buttonShowElse/buttonShowElse';
import Button from '../UI/button/button';
import Pagination from '../pagination/pagination';
import ButtonPoint from '../UI/buttonBreakPoint/buttonPoint';

const menu = [
  {title: 'Все типы'},
  {title: 'Заказы'},
  {title: 'Возвраты'},
];

const orders = [
  {
    status: 'Перечисленно',
    date: '31.10.2020  14.05',
    dateOrder: '12.12.2020',
    numberOrder: '238974298346',
    details: {vendorCode: '1шт артикул 88888', name: 'Рубашка белая'},
    order: '11',
    comisions: '7',
    all: '11',
  },
  {
    status: 'Перечисленно',
    date: '31.10.2020  14.05',
    dateOrder: '12.12.2020',
    numberOrder: '238974298346',
    details: {vendorCode: '1шт артикул 88888', name: 'Рубашка белая'},
    order: '11',
    comisions: '7',
    all: '11',
  },
  {
    status: 'Перечисленно',
    date: '31.10.2020  14.05',
    dateOrder: '12.12.2020',
    numberOrder: '238974298346',
    details: {vendorCode: '1шт артикул 88888', name: 'Рубашка белая'},
    order: '11',
    comisions: '7',
    all: '11',
  },
  {
    status: 'Перечисленно',
    date: '31.10.2020  14.05',
    dateOrder: '12.12.2020',
    numberOrder: '238974298346',
    details: {vendorCode: '1шт артикул 88888', name: 'Рубашка белая'},
    order: '11',
    comisions: '7',
    all: '11',
  },
  {
    status: 'Возврат',
    date: '31.10.2020  14.05',
    dateOrder: '12.12.2020',
    numberOrder: '238974298346',
    details: {vendorCode: '1шт артикул 88888', name: 'Рубашка белая'},
    order: '11',
    comisions: '7',
    all: '11',
  },
];

const SummList = [
  {order: '11 996', comisions: '899,7', retur: '2999', all: '8097,3'},
];

const FinanceManagement = () => {

  const renderOrders = () => {
    return orders.map((order, index) => {
      return (
          <ItemOrder
              status={order.status}
              date={order.date}
              dateOrder={order.dateOrder}
              numberOrder={order.numberOrder}
              details={order.details}
              order={order.order}
              comisions={order.comisions}
              all={order.all}
          />

      );
    });
  };

  const renderSumm = () => {
    return SummList.map((SummList, index) => {
      return (
          <Summ
              order={SummList.order}
              comisions={SummList.comisions}
              retur={SummList.retur}
              all={SummList.all}
          />

      );
    });
  };

  return (
      <div>
        <div className={style.title}>
          <h2 className={style.caption}>Начисления</h2>
          <div className={style.btnPosition}>
          <ButtonPoint
              height={'48px'}
              width={'48px'}
              border={'1px solid #0085FF'}
              image={require('../../../assets/img/bi_download.svg')}

          />
          <div className={style.btnRight}>
          <ButtonPoint
              height={'48px'}
              width={'48px'}
              border={'1px solid #EE2A7B'}
              background={'#EE2A7B'}
              image={require('../../../assets/img/arrowLeft_icon.svg')}
          />
          </div>
            <div className={style.bigBtn}>
          <Button
              height={'48px'}
              width={'186px'}
              title={'Скачать отчёт'}
              color={'#0085FF'}
              border={'1px solid #0085FF'}
              background={'none'}
          />
            </div>
          <div className={style.btnRight}>
            <div className={style.bigBtn}>
          <Button
              height={'48px'}
              width={'186px'}
              title={'Вывод средств'}
              color={'#FFF'}
              border={'none'}
              background={'#EE2A7B'}
          />
            </div>
          </div>
          </div>
          </div>
        <div className={style.searchAndCategory}>
          {renderSumm()}
        </div>
        <div className={style.searchAndCategory}>
          <div className={style.blockCategory}>
            <div className={style.item1}>
              Статус
            </div>
            <div className={style.item2}>
              Дата транзакции &nbsp; &#x2193;
            </div>
            <div className={style.item3}>
              Дата заказа
            </div>
            <div className={style.item4}>
              Номер заказа
            </div>
            <div className={style.item5}>
              Детали
            </div>
            <div className={style.item6}>
              Сумма заказа
            </div>
            <div className={style.item7}>
              Комиссия
            </div>
            <div className={style.item8}>
              Итого
            </div>
          </div>
        </div>

        <div className={style.orders}>
          {renderOrders()}
        </div>
        <div className={style.btnShow}>
        <ButtonShowElse/>
        </div>
        <div>Страницы</div>
      </div>
  );
};

export default FinanceManagement;