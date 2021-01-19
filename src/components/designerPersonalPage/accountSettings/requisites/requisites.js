import React from 'react';
import style from './requisites.module.css'
import Input from '../../UI/input/input';
import Button from '../../UI/button/button';

const inputs = [
  {label: 'Название  Банка', id: '1'},
  {label: 'Расчетный счет ', id: '2'},
  {label: 'Корреспондентский счет', id: '3'},
  {label: 'БИК ', id: '4'},
  {label: 'Город Банка ', id: '5'},
]

const Requisites = () => {

  const renderInputs = () => {
    return inputs.map((item, index) => {
      return(
          <Input
            key={index}
            label={item.label}
            id={item.id}
          />
      )
    })
  }

  return (
      <div className={style.req}>
        <form>
        {renderInputs()}
        <div className={style.btn}>
          <Button
            width={'145px'}
            height={'48px'}
            title={'Сохранить'}
            background={'#CDCDCD'}
          />
        </div>
        </form>
      </div>
  );
};

export default Requisites;