import React from 'react';
import style from './personalData.module.css'
import Input from '../../../fields/input/input';

const PersonalData = () => {
  return (
      <div className={style.wrapper}>
        <h2>Личные данные</h2>
        <div className={style.content}>
          <Input
            type={'text'}
            label={'Фамилия'}
            width={'290px'}
          />
        </div>
      </div>
  );
};

export default PersonalData;