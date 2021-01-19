import React from 'react';
import style from './favItemFooter.module.css';
import Button from '../../../../designerPersonalPage/UI/button/button';

const FavItemFooter = () => {
  return (
      <div className={style.wrapper}>
        <div className={style.icons}>
          <div className={style.icon}>
            <img src={require(
                '../../../../../assets/img/mdi_file-document-edit-outline.svg')}/>
            <span className={style.text}>Комментарий</span>
          </div>
          <div style={{marginLeft: '33px'}} className={style.icon}>
            <img src={require(
                '../../../../../assets/img/mdi_delete-forever-outline.svg')}/>
            <span className={style.text}>Удалить</span>
          </div>
        </div>
        <div className={style.btn}>
          <Button
              title={'Изготовить под заказ'}
              width={'100%'}
              height={'48px'}
          />
        </div>
      </div>
  );
};

export default FavItemFooter;