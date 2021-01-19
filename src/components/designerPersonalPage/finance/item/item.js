import React, {useState} from 'react';
import style from './item.module.css';
import InvisibleBackDrop from '../../UI/invisibleBackDrop/invisibleBackDrop';

const Item = ({status, date, dateOrder, numberOrder, details, order, comisions, all}) => {

  let colorText = [];
  if(status === 'Возврат'){
    colorText.push(style.item1)
    colorText.push(style.returColor);
  }else{
    colorText.push(style.item1)
  }

  return (
    <div className={style.scroll}>
      <div className={style.itemOrder}>
        <div className={colorText.join(' ')}>
          {status}
        </div>
        <div className={style.item2}>
          {date}
        </div>
        <div className={style.item3}>
          {dateOrder}
        </div>
        <div className={style.item4}>
          {numberOrder}
        </div>
        <div className={style.item5}>
          <div>{details.vendorCode}</div>
          <div>{details.name}</div>
        </div>
        <div className={style.item6}>
          {order}&nbsp; &#8381;
        </div>
        <div className={style.item7}>
          {comisions}&nbsp; &#8381;
        </div>
        <div className={style.item8}>
          {all}&nbsp; &#8381;
        </div>
      </div>
    </div>
  );
};

export default Item;