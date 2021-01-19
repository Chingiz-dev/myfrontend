import React from 'react';
import style from './toggleButton.module.css'

const ToggleButton = ({onChangeToggle, isChecked}) => {

  return (
      <div>
        <label className={style.switch}>
          <input checked={isChecked} onChange={event => onChangeToggle(event.target.checked)} type="checkbox"/>
            <span className={`${style.slider} ${style.round}`}></span>
        </label>
      </div>
  );
};

export default ToggleButton;