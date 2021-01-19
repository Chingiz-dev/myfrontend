import React, {useState} from 'react';
import style from './summ.module.css';

const Summ = ({order, comisions, retur, all}) => {
  
    return (
        <div className={style.itemList}>
          <div className={style.item1}>
          <p>Сумма заказов:</p>{order}&nbsp; &#8381;
          </div>
          <div className={style.item2}>
          <p>Сумма комиссии:</p>{comisions}&nbsp; &#8381;
          </div>
          <div className={style.item3}>
          <p>Сумма возврата:</p>{retur}&nbsp; &#8381;
          </div>
          <div className={style.item4}>
          <p>Итого:</p>{all}&nbsp; &#8381;
          </div>
        </div>
    );
  };
  
  export default Summ;