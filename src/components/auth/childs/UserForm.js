import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {Name} from '../../../fields/FirstSecondName';
import {Email} from '../../../fields/Email';
import {Phone} from '../../../fields/Phone';
import {Password} from '../../../fields/Password';
import {RequiredPassword} from '../../../fields/RequiredPassword';
import {SubmitButton} from '../../../fields/SubmitButton';
import CheckBox from '../../../fields/CheckBox';

export const UserForm = ({ onSubmit }) => {

  const { register, handleSubmit, errors, trigger, getValues, control, setValue} = useForm({
    defaultValues: { regGroup: 'user' }
  });

  register({ name: 'rules', type: 'input' })
  console.log(errors);
  return (
      <form className='regForm'>
        <input ref={register('regGroup')} hidden/>
        <Name register={register} errors={errors} name='surname' placeholder='Фамилия' />
        <Name register={register} errors={errors} name='firstname' placeholder='Имя' />
        <Name register={register} errors={errors} name='lastname' placeholder='Отчество' />
        <Email register={register} errors={errors}/>
        <Phone register={register} errors={errors}/>
        <Password register={register} errors={errors} trigger={trigger}/>
        <RequiredPassword register={register} errors={errors} trigger={trigger} getValues={getValues} />

        <SubmitButton handleSubmit={handleSubmit} onSubmit={onSubmit}/>
        <CheckBox
              id={'rules'}
              label={'Согласен на обработку персональных данных'}
              name='rules'
              label_size={13}
              checkbox_size={13}
              onChange={event => {
                event.persist();
                setValue('rules', event.target.checked)
              }
              }
          />
      </form>
  )
}