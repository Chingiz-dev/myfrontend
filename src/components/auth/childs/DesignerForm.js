import React, {useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {Name} from '../../../../fields/FirstSecondName';
import {Email} from '../../../../fields/Email';
import {Phone} from '../../../../fields/Phone';
import {Password} from '../../../../fields/Password';
import {RequiredPassword} from '../../../../fields/RequiredPassword';
import {SubmitButton} from '../../../../fields/SubmitButton';
import CheckBox from '../../../../fields/CheckBox';
import DesignerFormStepOne from './DesignerStepsForms/Step1';


export const DesignerForm = ({ onSubmit }) => {

  const { register, handleSubmit, errors, trigger, getValues, control, setValue} = useForm({
    defaultValues: { regGroup: 'designer' }
  });

  register({ name: 'rules', type: 'input' })
  console.log(errors);



  const formStepOne = DesignerFormStepOne;
  
  return (
      
  )
}