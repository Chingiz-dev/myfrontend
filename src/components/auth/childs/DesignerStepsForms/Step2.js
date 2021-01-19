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
        <span className='regForm_label'>Контактная информация компании</span>
        <span className='regForm_step'>Шаг 2 из 3</span>
        <Name register={register} errors={errors} name='brand' placeholder='Бренд' />
        <Name register={register} errors={errors} name='ceoName' placeholder='ФИО руководителя' />
        <Name register={register} errors={errors} name='companyName' placeholder='Название юридического лица' />
        <Name register={register} errors={errors} name='taxpayerNumber' placeholder='ИНН' />
        <Name register={register} errors={errors} name='iecNumber' placeholder='КПП' />
        <Name register={register} errors={errors} name='address' placeholder='Адрес компании' />

        <SubmitButton title='Далее' handleSubmit={handleSubmit} onSubmit={onSubmit} />
        
      </form>
    )
  }