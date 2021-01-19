import React from 'react';

export const SubmitButton = (
    {
    title='Зарегистрироваться',
    handleSubmit,
    onSubmit,
    className='button button_black bck_black'
    }) => {

  return (
      <div
          className={className}
          style={{marginTop: 40}}
          onClick={handleSubmit(onSubmit)}>
        {title}

      </div>
  )
}