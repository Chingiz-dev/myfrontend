import React from 'react'

export const Name = ({errors, type = 'text', placeholder="Фамилия, имя и отчество", register, name='personal'}) => {
  console.log(errors);
  return (

      <div className='field'>
        <input className={errors[name] && 'errorInput'}
               type={type}
               name={name}
               placeholder={placeholder}
               ref={register({required: 'Поле должно быть заполнено'})}
        />
        {errors[name] && <p className='error'>{errors[name].message}</p>}
      </div>

  )
}