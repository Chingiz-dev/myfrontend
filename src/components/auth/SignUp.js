import React, {useState} from 'react';
import {UserForm} from './childs/UserForm';
import {RegGroupChanger} from './childs/RegGroupChanger';

export const SignUn = () => {
  const [form, setForm]=useState('user');

  
  return(
      <div className='sign_up'>
        <h1 className='sign_title'>Создать аккаунт в Fit For You</h1>
        <div className='signWrapper'>
            <RegGroupChanger onChange={(value)=> setForm(value)}/>
            <div style={{display: 'flex', justifyContent: 'left'}}><p className='sign_subtitle'>Контактная информация</p></div>

          {form === 'user' ? <UserForm className="signForm" onSubmit={console.log} /> :
          <p>Регистрация дизайнера</p>}

        </div>
      </div>
  )
}