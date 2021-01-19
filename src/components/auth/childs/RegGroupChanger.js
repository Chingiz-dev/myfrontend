import React, { useState} from 'react';
import CheckBox from '../../../fields/CheckBox';


export const RegGroupChanger = ({onChange}) => {
  const [regGroup, setRegGroup] = useState('user')
  // useEffect(()=> {
  //   onChange(regGroup);
  // }, [regGroup])

  return (
      <div className='group_changer'>
        <CheckBox
            checked={regGroup === 'user'}
            label={'Клиент'}
            id={'user'}
            onChange={
              ()=> {
                setRegGroup('user');
                onChange('user');
              }
            }/>
        <CheckBox
            checked={regGroup === 'designer'}
            label={'Дизайнер'}
            id={'designer'}
            onChange={
              ()=> {
                setRegGroup('designer');
                onChange('designer');
              }
            }/>
      </div>
  )
}