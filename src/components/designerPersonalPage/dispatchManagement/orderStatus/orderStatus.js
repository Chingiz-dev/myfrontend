import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import style from './orderStatus.module.css'
import './dataPicker.css'
import ru from 'date-fns/locale/ru';
import Button from '../../UI/button/button';
import OrderRow from './orderRow/orderRow';

const rows = {
  party1: ['ФИО покупателя:', 'Номер телефона:'],
  party2: ['Размер:', 'Материал:', 'Цвет:', 'Узор:', 'Цена:', 'Количество:']
}


const OrderStatus = ({fio,
                       number,
                       address,
                       size,
                       material,
                       color,
                       pattern,
                       price,
                       quantity
                     }) => {

  const [startDate, setStartDate] = useState(new Date());

  const renderPartyRow1 = () => {
    return rows.party1.map((item, index) => {
      return(
          <OrderRow
             key={index}
             title={item}
          />
      )
    })
  }
  const renderPartyRow2 = () => {
    return rows.party2.map((item, index) => {
      return(
          <OrderRow
              key={index}
              title={item}
          />
      )
    })
  }
  return (
      <div className={style.statusBlock}>
        <div className={style.titleCart}>Статус</div>
        <div>Полоса</div>
        <div className={style.info}>
          <div className={style.img}>
            <img src={''} alt={''}/>
          </div>
          <div className={style.personalInfo}>
            {renderPartyRow1()}
            <div style={{flexDirection: 'column'}} className={style.fl}>
              <div className={style.title}>Адрес покупателя:</div>
              <div className={style.address}>{address}</div>
            </div>
            {renderPartyRow2()}

            <div style={{flexDirection: 'column'}} className={style.fl}>
              <div className={style.title}>Комментарий:</div>
              <div>
                <textarea className={style.textArea}></textarea>
              </div>
            </div>
            <div className={style.date}>
              Заказ будет готов к отправке:
              <DatePicker
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                  dateFormat={"dd/MM/yyyy"}
                  locale={ru}
              />
            </div>

          </div>
        </div>
        <div className={style.buttons}>
          <div className={style.cancelBtn}>Отменить заказ</div>
          <Button
            title={'Перейти к пошиву'}
            width={'203px'}
            height={'48px'}
          />
        </div>
      </div>
  );
};



export default OrderStatus;