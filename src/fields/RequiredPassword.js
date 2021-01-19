import React from 'react';

export const RequiredPassword = (
    {
      errors,
      type = 'password',
      placeholder="Подтверждение пароля",
      register,
      name='requiredPassword',
      trigger,
      getValues,
      basePasswordName='password',
      minLength=8,
      maxLength=32
    }) =>
{
  return (
      <div className='field'>
        <input className={errors[name] && 'errorInput'}
               type={type} placeholder={placeholder}
               name={name}
               ref={register({
                 required: 'Поле должно быть заполнено',
                 minLength: {value: minLength, message: `Минимальная длина - ${minLength} символов`},
                 maxLength: {value: maxLength, message: `Максимальная длина - ${maxLength} символов`},
                 validate: {
                   confirm: value => value === getValues(basePasswordName) || `Пароли должны совпадать`
                 }

               })}
               onChange={() => { trigger(name)
               }}/>
        {errors[name] && <p className='error'>{errors[name].message}</p>}
      </div>
  )
}