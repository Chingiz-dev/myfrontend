import React from 'react';

export const Phone = (
    {
      errors,
      type = 'tel',
      placeholder="Номер телефона",
      register,
      name='phone',
    }) =>
{

  return (
      <div className='field'>
        <input
            className={errors[name] && 'errorInput'}
            type={type}
            placeholder={placeholder}
            name={name} ref={register} />
        {errors[name] && <p className='error'>{errors[name].message}</p>}
      </div>
  )
}