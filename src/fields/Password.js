import React from 'react';

export const Password = (
    {
      errors,
      type = 'password',
      placeholder="Пароль",
      register,
      name='password',
      trigger,
      minLength=8,
      maxLength=32
    }) =>
{
  console.log(errors)
  return (
      <div className='field'>
        <input
            className={errors[name] && 'errorInput'}
            type={type}
            placeholder={placeholder}
            name={name}
            ref={register({
              required: 'Поле должно быть заполнено',
              minLength: {value: minLength, message: `Минимальная длина - ${minLength} символов`},
              maxLength: {value: maxLength, message: `Максимальная длина - ${maxLength} символов`}
            })}
            onChange={() => { trigger(name)}}
        />
        {errors[name] && <p className='error'>{errors[name].message}</p>}
      </div>
  )
}