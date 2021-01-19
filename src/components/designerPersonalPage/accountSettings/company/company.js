import React from 'react';
import style from './company.module.css'
import Input from '../../UI/input/input';
import Button from '../../UI/button/button';

const inputs = [
  {label: 'Бренд', id: '1'},
  {label: 'ФИО руководителя', id: '2'},
  {label: 'Форма собственности', id: '3'},
  {label: 'Название компании', id: '4'},
  {label: 'Номер телефона', id: '5'},
  {label: 'Юридический адрес', id: '6'},
  {label: 'Почтовый адрес', id: '6'},
]

const Company = () => {

  const renderInputs = () => {
    return inputs.map((item, index) => {
      return(
          <Input
            label={item.label}
            id={item.id}
            key={index}
          />
      )
    })
  }

  return (
      <div className={style.company}>
        <div className={style.photoInfo}>
          <img src={require('../../../../assets/img/lk_plus_data.svg')}/>
          <div>
            <span className={style.title}>Добавить логотип</span>
            <ul>
              <li>Формат - JPEG, PNG</li>
              <li>Разрешение - от 700 до 1400 пикселей</li>
              <li>Размер - не более 10 МБ</li>
            </ul>
          </div>
        </div>
        <form>
        {renderInputs()}
        <div className={style.mini}>
            <Input id={'7'} label={'ИНН'} width={'177px'}/>
            <Input id={'8'} label={'КПП'} width={'177px'}/>
        </div>
        <div className={style.btn}>
          <Button
            width={'145px'}
            height={'48'}
            title={'Сохранить'}
            background={'#CDCDCD'}
          />
        </div>
        </form>
      </div>
  );
};

export default Company;