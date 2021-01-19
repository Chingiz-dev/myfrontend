import React from 'react';
import style from './cartInfo.module.css';
import Counter from './counter/counter';
import TextArea from '../../../../designerPersonalPage/UI/textArea/textArea';

const CartInfo = ({title, size, color, colorText, price}) => {
  return (
      <div className={style.wrapper}>
        <ul className={style.list}>
          <li>{title}</li>
          <li>Размер: {size}</li>
          <li>
            <div className={style.row}>
              Цвет:
              <div style={{backgroundColor: `#${color}`}} className={style.color}></div>
              <span className={style.colorText}>
                {colorText}
              </span>
              <div className={style.counter}><Counter/></div>
              <div className={style.price}>{price} &#8381; </div>
            </div>
          </li>
          <li>
            <div className={style.textArea}>
            <TextArea
                label={'Комментарий'}
                border={'1px solid #8E8E8E'}
                borderRadius={'5px'}
                height={'103px'}
                width={'100%'}
                fzLabel={'16px'}
                marginTop={'0px'}
            />
            </div>
          </li>
        </ul>
        <div className={style.icons}>
          <div className={style.favorite}>
            <img src={require('../../../../../assets/img/heartPink.svg')}/>
            <span>В избранное</span>
          </div>
          <div className={style.delete}>
            <img src={require('../../../../../assets/img/mdi_deletePink.svg')}/>
            <span>Удалить</span>
          </div>
        </div>
      </div>
  );
};

export default CartInfo;