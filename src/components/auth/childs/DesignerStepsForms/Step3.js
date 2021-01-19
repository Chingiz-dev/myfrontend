import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {Name} from '../../../../fields/FirstSecondName';
import {SubmitButton} from '../../../../fields/SubmitButton';

export const DesignerFormStepTwo = ({ onSubmit }) => {

    const { register, handleSubmit, errors, trigger, getValues, control, setValue} = useForm({
      defaultValues: { regGroup: 'designer' }
    });
  
    register({ name: 'rules', type: 'input' })
    console.log(errors);
    return (
      <form className='regForm'>
        <h2>FitForYou</h2>
        <input ref={register('regGroup')} hidden/>
        <span className='regForm_label'>Банковские данные</span>
        <span className='regForm_step'>Шаг 3 из 3</span>
        <Name register={register} errors={errors} name='bank' placeholder='Название банка' />
        <Name register={register} errors={errors} name='checkAccount' placeholder='Расчётный счёт' />
        <Name register={register} errors={errors} name='corrAccount' placeholder='Корреспондентский счёт' />
        <Name register={register} errors={errors} name='bic' placeholder='БИК' />
        <Name register={register} errors={errors} name='bankCity' placeholder='Город Банка' />

        <SubmitButton title='Создать' handleSubmit={handleSubmit} onSubmit={onSubmit} />
        
      </form>
    )
  }