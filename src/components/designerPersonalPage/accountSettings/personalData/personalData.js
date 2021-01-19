import React from 'react';
import style from './personalData.module.css'
import Input from '../../UI/input/input';
import TextArea from '../../UI/textArea/textArea';
import Button from '../../UI/button/button';

const inputs = [
  {label: 'Фамилия', id: '1'},
  {label: 'Имя', id: '2'},
  {label: 'Отчество', id: '3'},
  {label: 'E-mail', id: '4'},
  {label: 'Номер телефона', id: '5'},
]

const PersonalData = () => {

  const renderInputs = () => {
    return inputs.map((item, index) => {
      return(
          <Input
            id={item.id}
            label={item.label}
            key={index}
          />
      )
    })
  }

  return (
      <div className={style.data}>
        <form>
        <div className={style.photoInfo}>
          <img src={require('../../../../assets/img/lk_plus_data.svg')}/>
          <div>
            <ul>
              <li>Формат - JPEG, PNG</li>
              <li>Разрешение - от 700 до 1400 пикселей</li>
              <li>Размер - не более 10 МБ</li>
            </ul>
          </div>
        </div>
        <div>
          {renderInputs()}
          <TextArea
            label={'О себе'}
            id={'6'}
          />
        </div>
        <div className={style.btn}>
        <Button
          title={'Сохранить'}
          width={'145px'}
          height={'48px'}
        />
        </div>
        </form>
      </div>
  );
};

export default PersonalData;