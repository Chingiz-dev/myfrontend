import React, {useState} from 'react';
import style from './notifications.module.css'
import CheckBox from '../../../../fields/CheckBox';
import Button from '../../UI/button/button';

const Notifications = ({email, number}) => {

  const [checkEmail, setCheckEmail] = useState()
  const [checkSMS, setCheckSMS] = useState()

  return (
      <div className={style.notif}>
        <div>Настройка уведомления, рассылки и другие важные сообщения о заказах</div>
        <div className={style.ways}>
          <div className={style.email}>
            <span>Email</span>
            <span>Alex@mail.ru</span>
            <CheckBox onChange={event => setCheckEmail(event.target.checked)} id={'1'} label={''}/>
          </div>
          <div className={style.number}>
            <span>SMS</span>
            <span>+7 (982) 223-45-56</span>
            <CheckBox onChange={event => setCheckSMS(event.target.checked)} id={'2'} label={''}/>
          </div>
        </div>
        <div className={style.btn}>
        <Button
          title={'Сохранить'}
          width={'145px'}
          height={'48px'}
        />
        </div>
      </div>
  );
};

export default Notifications;