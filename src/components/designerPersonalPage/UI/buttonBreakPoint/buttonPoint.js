import React from 'react';
import style from './buttonPoint.module.css';

const ButtonPoint = ({height, width, background, image, border, onClickHandler}) => {
  return (
      <div
          className={style.btn}
          style={{
            height: `${height}`,
            width: `${width}`,
            background: `${background}`,
            border: `${border}`,
          }}
          onClick={onClickHandler}
      >
        <div className={style.icon}>
        <img src={image} alt={''}/>
        </div>
      </div>
  );
};

export default ButtonPoint;