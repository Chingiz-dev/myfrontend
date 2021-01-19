import React, {useState} from 'react';
import style from './itemOrder.module.css';
import InvisibleBackDrop from '../../UI/invisibleBackDrop/invisibleBackDrop';
import DarkBackDrop from '../../UI/darkBackDrop/darkBackDrop';
import OrderStatus from '../orderStatus/orderStatus';

const ItemOrder = ({status, date, numberOrder, details, price,}) => {

  const [toggle, setToggle] = useState(false);
  const [statusToggle, setStatusToggle] = useState(false)



  const hideContex = () => {
    setToggle(false);
  };
  const showContexHandler = () => {
    setToggle(prevState => !prevState);
  };

  const showStatusBlock = () => {
    setStatusToggle(true)
    console.log(statusToggle);

  }
  const hideStatusBlock = () => {
    setStatusToggle(false)
    console.log(statusToggle);
  }

  let cls = '';
  if (toggle) {
    cls = style.showContex;
  } else {
    cls = style.hideContex;
  }

  let statusColor = ''
  switch (status) {
    case 'Ожидает сборки':
      statusColor = style.green
      break;
    case 'Идет доставка':
      statusColor = style.blue
      break;
    case 'Идет пошив':
      statusColor = style.orange
      break;
    case 'Доставлено':
      statusColor = style.grey
      break;
    default:
      statusColor = '#000'
  }


  return (
      <dvi>
      <div  className={style.itemOrder}>
        <div onClick={showStatusBlock} className={`${style.item1} ${statusColor}`}>
          {status}
        </div>
        <div onClick={showStatusBlock} className={style.item2}>
          {date}
        </div>
        <div onClick={showStatusBlock} className={style.item3}>
          {numberOrder}
        </div>
        <div onClick={showStatusBlock} className={style.item4}>
          <div>{details.vendorCode}</div>
          <div>{details.name}</div>
        </div>
        <div onClick={showStatusBlock} className={style.item5}>
          {price} &nbsp; &#8381;
        </div>
        <div onClick={showContexHandler} className={style.item6}>
          <img src={require('../../../../assets/img/action_icon.svg')}/>
          <div className={cls}>
            <ul>
              <li>Готово</li>
              <li>Отмена</li>
            </ul>
          </div>
        </div>
        {toggle ?
            <>
              <InvisibleBackDrop onClickHandler={hideContex}/>
            </>
            : null
        }

      </div>
        {statusToggle ?
            <>
              <DarkBackDrop onClickHandler={hideStatusBlock}/>
              <OrderStatus/>
            </>
            : null
        }
      </dvi>
  );
};

export default ItemOrder;