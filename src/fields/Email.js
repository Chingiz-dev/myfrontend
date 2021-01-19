import React from 'react';

export const Email = ({errors, type = 'email', placeholder="Электронная почта", register, name='email'}) => {

  return (
      <div className='field'>
        <input
            className={errors[name] && 'errorInput'}
            type={type}
            placeholder={placeholder}
            name={name}
            ref={register({
              required: 'Поле должно быть заполнено',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]/i,
                message: 'Email не указан или имеет неверный формат'
              }
            })}
        />
        {errors[name] && <p className='error'>{errors[name].message}</p>}

      </div>
  )
}